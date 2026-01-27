<script context="module">
    export type TreeNode = {
        id: string;
        label: string;
        path?: string;
        children?: TreeNode[];
    };
</script>

<script lang="ts">
    import { IconChevronRight, IconFile } from "@tabler/icons-svelte";
    import { Accordion } from "bits-ui";
    import TreeItem from "$lib/ui/Tree/TreeItem.svelte";

    export let item: TreeNode;
    export let depth = 0;
    export let selected: string | null;
    export let onSelect: (id: string) => void;

    $: isSelected = selected === item.id;
</script>

<li>
    {#if item.children}
        <Accordion.Root type="single">
            <Accordion.Item value={item.id}>
                <Accordion.Header>
                    <Accordion.Trigger
                        class="
                            group flex items-center gap-2 w-full px-2 py-1 rounded-md
                            hover:bg-muted
                            {isSelected && 'bg-primary/15 text-primary'}
                        "
                        style="padding-left: {depth * 12 + 8}px"
                    >
                        <IconChevronRight
                            class="h-4 w-4 transition-transform group-data-[state=open]:rotate-90"
                        />
                        <span>{item.label}</span>
                    </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                    <ul class="relative ml-2">
                        <div
                            class="absolute left-1 top-0 bottom-0 w-px bg-border"
                        ></div>

                        {#each item.children as child (child.id)}
                            <TreeItem
                                item={child}
                                depth={depth + 1}
                                {selected}
                                {onSelect}
                            />
                        {/each}
                    </ul>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    {:else}
        <button
            class="
                flex items-center gap-2 w-full px-2 py-1 rounded-md
                hover:bg-muted
                {isSelected && 'bg-primary/15 text-primary'}
            "
            style="padding-left: {depth * 12 + 28}px"
            on:click={() => onSelect(item.id)}
        >
            <IconFile class="h-4 w-4 opacity-60" />
            <span>{item.label}</span>
        </button>
    {/if}
</li>
