<script lang="ts">
    import type { LogEntry } from "$lib/types/logs";
    import { selectedLog } from "$lib/hooks/useLogsStore";

    export let log: LogEntry;

    const colors = {
        trace: "text-muted-foreground",
        debug: "text-muted-foreground",
        info: "text-foreground",
        warn: "text-yellow-500",
        error: "text-red-500",
        fatal: "text-red-600 font-semibold",
    };
</script>

<div
    class="flex gap-3 px-3 py-1 cursor-pointer hover:bg-muted"
    class:selected={$selectedLog?.id === log.id}
    on:click={() => selectedLog.set(log)}
>
    <span class="w-20 shrink-0 text-muted-foreground">
        {new Date(log.ts).toLocaleTimeString()}
    </span>

    <span class={"w-12 shrink-0 " + colors[log.level]}>
        {log.level.toUpperCase()}
    </span>

    <span class="flex-1 truncate">{log.message}</span>
</div>

<style>
    .selected {
        background: hsl(var(--primary) / 0.12);
    }
</style>
