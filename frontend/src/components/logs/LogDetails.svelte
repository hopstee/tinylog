<script lang="ts">
    import { selectedLog } from "$lib/hooks/useLogsStore";
</script>

<div class="h-48 border-t border-border bg-card p-3 text-sm overflow-auto">
    <pre class="whitespace-pre-wrap text-xs">
        {$selectedLog?.raw ?? JSON.stringify($selectedLog?.data, null, 2)}
  </pre>
</div>
