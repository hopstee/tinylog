<script lang="ts">
    import { Accordion } from "bits-ui";
    import TreeItem, { type TreeNode } from "./TreeItem.svelte";
    // import type { TreeNode } from "./types";

    export let items: TreeNode[];
    export let selected: string | null = null;
    export let onSelect: (id: string) => void;
</script>

<ul class="text-sm select-none">
    {#each items as item (item.id)}
        <TreeItem {item} {selected} {onSelect} depth={0} />
    {/each}
</ul>
