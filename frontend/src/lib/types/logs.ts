export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export type LogEntry = {
  id: string;
  ts: number; // unix ms
  level: LogLevel;
  service?: string;
  message: string;
  raw?: string;
  data?: unknown; // json payload
};
