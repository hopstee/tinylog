<script lang="ts">
    import { logs, levelFilter } from "$lib/hooks/useLogsStore";
    import LogRow from "./LogRow.svelte";
</script>

<div class="flex-1 overflow-auto font-mono text-xs">
    {#each $logs as log (log.id)}
        {#if $levelFilter.has(log.level)}
            <LogRow {log} />
        {/if}
    {/each}
</div>
