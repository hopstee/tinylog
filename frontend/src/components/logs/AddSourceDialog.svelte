<script lang="ts">
    import { Dialogs } from "@wailsio/runtime";
    import Button from "$lib/ui/Button.svelte";
    import DialogClose from "$lib/ui/Dialog/DialogClose.svelte";
    import Dialog from "$lib/ui/Dialog/Dialog.svelte";
    import Input from "$lib/ui/Input.svelte";
    import {
        IconPlus,
        IconDisc,
        IconServer,
        IconTestPipe,
        IconLoader,
        IconPassword,
        IconKey,
        IconForms,
    } from "@tabler/icons-svelte";
    import { Separator } from "bits-ui";
    import DialogTrigger from "$lib/ui/Dialog/DialogTrigger.svelte";
    import DialogContent from "$lib/ui/Dialog/DialogContent.svelte";
    import DialogTitle from "$lib/ui/Dialog/DialogTitle.svelte";
    import Tooltip from "$lib/ui/Tooltip/Tooltip.svelte";
    import Tabs from "$lib/ui/Tabs/Tabs.svelte";
    import TabsList from "$lib/ui/Tabs/TabsList.svelte";
    import TabsTrigger from "$lib/ui/Tabs/TabsTrigger.svelte";
    import TabsContent from "$lib/ui/Tabs/TabsContent.svelte";
    import { SSHService } from "../../../bindings/tinylog/backend/services";
    import { Creds } from "../../../bindings/tinylog/backend/services/models";
    import { fade } from "svelte/transition";

    let dialogOpen = false;

    const connTypesList = [
        {
            name: "local",
            title: "Local",
            icon: IconDisc,
        },
        {
            name: "ssh",
            title: "SSH",
            icon: IconServer,
        },
    ];

    let selectedConnType = connTypesList[0].name;
    const onChangeConnTab = (tab: string) => {
        selectedConnType = tab;
    };

    const authTypesList = [
        {
            name: "pass",
            title: "Password",
            icon: IconPassword,
        },
        {
            name: "pub_key",
            title: "Passphrase",
            icon: IconForms,
        },
    ];
    let selectedAuthType = authTypesList[0].name;
    console.log(selectedAuthType);
    const onChangeAuthTab = (tab: string) => {
        selectedAuthType = tab;
    };

    // SSH
    let name = "";
    let host = "164.92.194.64";
    let port = 22;
    let user = "root";
    let pass = "";
    let passphrase = "";

    // Log
    let logPath = "";
    let logLabel = "";

    // Test
    const connection = {
        testingesting: false,
        success: false,
        failed: false,
        showMessage: false,
    };

    let submitLoading = false;

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function submit() {
        submitLoading = true;
        const payload = {
            selectedConnType,
            connection:
                selectedConnType === "local"
                    ? null
                    : { name, host, port, user },
            log: {
                path: logPath,
                label: logLabel || logPath.split("/").pop(),
            },
        };

        console.log("ADD SOURCE", payload);
        await sleep(2000);
        submitLoading = false;
        dialogOpen = false;
    }

    async function testConnection() {
        if (connection.testingesting) return;
        connection.testingesting = true;

        const creds: Creds = {
            host: host,
            port: String(port),
            user: user,
            password: pass,
            passphrase: passphrase,
        };
        const res = await SSHService.TestConnection(creds);

        if (!res) {
            connection.failed = true;
        } else {
            connection.success = true;
        }

        connection.testingesting = false;
        connection.showMessage = true;

        setTimeout(() => {
            connection.failed = false;
            connection.success = false;
            connection.showMessage = false;
        }, 2000);
    }
</script>

{#snippet defaultInputs()}
    <div class="space-y-2">
        <Input placeholder="/var/log/app.log" bind:value={logPath} />
        <Input placeholder="Display name (optional)" bind:value={logLabel} />
    </div>
{/snippet}

<Dialog bind:open={dialogOpen}>
    <DialogTrigger class="w-fit">
        <Button size="icon-sm" variant="ghost">
            <IconPlus size={14} />
        </Button>
    </DialogTrigger>
    <DialogContent>
        <DialogTitle>Add log source</DialogTitle>

        <Tabs value={selectedConnType} onValueChange={onChangeConnTab}>
            <div class="flex items-center justify-between">
                <TabsList>
                    {#each connTypesList as tab}
                        <TabsTrigger value={tab.name}>
                            <svelte:component
                                this={tab.icon}
                                class="size-4 shrink-0"
                            />
                            {tab.title}
                        </TabsTrigger>
                    {/each}
                </TabsList>

                {#if selectedConnType === "ssh"}
                    <div class="flex items-center space-x-1">
                        {#if connection.showMessage}
                            <span
                                class="text-xs"
                                class:text-secondary={connection.success}
                                class:text-destructive={connection.failed}
                                transition:fade={{ duration: 150 }}
                            >
                                {#if connection.failed}
                                    Не удалось подключиться
                                {:else if connection.success}
                                    Успешно подключились
                                {/if}
                            </span>
                        {/if}
                        <Tooltip>
                            {#snippet trigger()}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    loading={connection.testingesting}
                                    onclick={() => testConnection()}
                                >
                                    {#if connection.testingesting}
                                        <IconLoader
                                            size={16}
                                            class="animate-spin"
                                        />
                                    {:else}
                                        <IconTestPipe size={16} />
                                    {/if}
                                </Button>
                            {/snippet}
                            Test SSH connection
                        </Tooltip>
                    </div>
                {/if}
            </div>

            <TabsContent value="local">
                {@render defaultInputs()}
            </TabsContent>
            <TabsContent value="ssh">
                <div class="space-y-2 mb-4">
                    <Input placeholder="Connection name" bind:value={name} />
                    <Input placeholder="Host" bind:value={host} />
                    <div class="flex gap-2">
                        <Input placeholder="User" bind:value={user} />
                        <Input
                            type="number"
                            placeholder="Port"
                            bind:value={port}
                        />
                    </div>
                </div>

                <Tabs value={selectedAuthType} onValueChange={onChangeAuthTab}>
                    <TabsList>
                        {#each authTypesList as tab}
                            <TabsTrigger value={tab.name}>
                                <svelte:component
                                    this={tab.icon}
                                    class="size-4 shrink-0"
                                />
                                {tab.title}
                            </TabsTrigger>
                        {/each}
                    </TabsList>

                    <TabsContent value="pass">
                        <Input
                            type="password"
                            placeholder="Password"
                            bind:value={pass}
                        />
                    </TabsContent>
                    <TabsContent value="pub_key">
                        <Input
                            type="password"
                            placeholder="Key passphrase (optional)"
                            bind:value={passphrase}
                        />
                    </TabsContent>
                </Tabs>

                <Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" />
                {@render defaultInputs()}
            </TabsContent>
        </Tabs>

        <div class="mt-4 flex">
            <div class="flex space-x-1 ml-auto">
                <DialogClose>
                    <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button onclick={submit} loading={submitLoading}>
                    {#if submitLoading}
                        <IconLoader class="size-4 animate-spin" />
                    {/if}
                    Add
                </Button>
            </div>
        </div>
    </DialogContent>
</Dialog>
