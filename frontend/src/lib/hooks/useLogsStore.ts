import { writable } from "svelte/store";
import type { LogEntry, LogLevel } from "../types/logs";

export const logs = writable<LogEntry[]>([]);
export const selectedLog = writable<LogEntry | null>(null);

export const levelFilter = writable<Set<LogLevel>>(
  new Set(["info", "warn", "error"]),
);

export function appendLog(entry: LogEntry) {
  logs.update((l) => [...l, entry]);
}
