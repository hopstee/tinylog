package services

import (
	"errors"
	"fmt"
	"log/slog"
	"net"
	"os"
	"path/filepath"
	"time"

	"golang.org/x/crypto/ssh"
	"golang.org/x/crypto/ssh/agent"
)

var defaultKeys = []string{
	"id_ed25519",
	"id_rsa",
	"id_ecdsa",
}

type Creds struct {
	Host       string `json:"host"`
	Port       string `json:"port"`
	User       string `json:"user"`
	Password   string `json:"password"`
	Passphrase string `json:"passphrase"`
}

type SSHService struct{}

func (s *SSHService) TestConnection(creds Creds) bool {
	client, err := s.Connect(creds)
	if err != nil {
		slog.Error("failed connect to server", slog.Any("error", err.Error()))
		return false
	}
	defer client.Close()

	return true
}

func (s *SSHService) Connect(creds Creds) (*ssh.Client, error) {
	addr := fmt.Sprintf("%s:%s", creds.Host, creds.Port)
	cfg := s.baseConfig(creds.User)

	if agentAuth, err := s.agentAuthMethod(); err != nil {
		cfg.Auth = []ssh.AuthMethod{agentAuth}
		if client, err := ssh.Dial("tcp", addr, cfg); err == nil {
			return client, nil
		}
	}

	keys, _ := s.findSSHKeys()
	for _, key := range keys {
		auth, err := s.keyAuthMethod(key, "")
		if err == nil {
			cfg.Auth = []ssh.AuthMethod{auth}
			if client, err := ssh.Dial("tcp", addr, cfg); err == nil {
				return client, nil
			}
		}
	}

	if creds.Passphrase != "" {
		for _, key := range keys {
			auth, err := s.keyAuthMethod(key, creds.Passphrase)
			if err == nil {
				cfg.Auth = []ssh.AuthMethod{auth}
				if client, err := ssh.Dial("tcp", addr, cfg); err == nil {
					return client, nil
				}
			}
		}
	}

	if creds.Password != "" {
		cfg.Auth = []ssh.AuthMethod{
			s.passAuthMethod(creds.Password),
		}

		if client, err := ssh.Dial("tcp", addr, cfg); err == nil {
			return client, nil
		}
	}

	return nil, errors.New("all authentication methods failed")
}

func (s *SSHService) baseConfig(user string) *ssh.ClientConfig {
	return &ssh.ClientConfig{
		User:            user,
		Timeout:         5 * time.Second,
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
	}
}

func (s *SSHService) agentAuthMethod() (ssh.AuthMethod, error) {
	sock := os.Getenv("SSH_AUTH_SOCK")
	if sock == "" {
		return nil, errors.New("ssh-agent not available")
	}

	conn, err := net.Dial("unix", sock)
	if err != nil {
		return nil, err
	}

	ag := agent.NewClient(conn)
	return ssh.PublicKeysCallback(ag.Signers), nil
}

func (s *SSHService) keyAuthMethod(path, passphrase string) (ssh.AuthMethod, error) {
	key, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	var signer ssh.Signer
	if passphrase != "" {
		signer, err = ssh.ParsePrivateKeyWithPassphrase(key, []byte(passphrase))
	} else {
		signer, err = ssh.ParsePrivateKey(key)
	}

	if err != nil {
		return nil, err
	}

	return ssh.PublicKeys(signer), nil
}

func (s *SSHService) passAuthMethod(pass string) ssh.AuthMethod {
	return ssh.Password(pass)
}

func (s *SSHService) findSSHKeys() ([]string, error) {
	var keys []string

	home, err := os.UserHomeDir()
	if err != nil {
		return nil, err
	}

	sshDir := filepath.Join(home, ".ssh")

	for _, name := range defaultKeys {
		path := filepath.Join(sshDir, name)
		if _, err := os.Stat(path); err == nil {
			keys = append(keys, path)
		}
	}

	return keys, nil
}
