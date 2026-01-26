<script lang="ts">
    import { levelFilter } from "$lib/hooks/useLogsStore";
    import type { LogLevel } from "$lib/types/logs";

    const levels: LogLevel[] = [
        "trace",
        "debug",
        "info",
        "warn",
        "error",
        "fatal",
    ];

    function toggle(level: LogLevel) {
        levelFilter.update((s) => {
            const next = new Set(s);
            next.has(level) ? next.delete(level) : next.add(level);
            return next;
        });
    }
</script>

<div
    class="h-11 flex items-center gap-3 px-3 border-b border-border"
    style="
        padding-left: calc(var(--titlebar-x) + 12px);
        padding-top: env(safe-area-inset-top);
      "
>
    <input
        placeholder="Search logs…"
        class="h-7 px-2 text-sm bg-muted rounded-md outline-none"
    />

    <div class="flex gap-1">
        {#each levels as lvl}
            <button
                on:click={() => toggle(lvl)}
                class="px-2 text-xs rounded-md border transition
                {$levelFilter.has(lvl)
                    ? 'bg-primary/15 text-primary border-primary/30'
                    : 'border-transparent text-muted-foreground'}"
            >
                {lvl.toUpperCase()}
            </button>
        {/each}
    </div>
</div>
