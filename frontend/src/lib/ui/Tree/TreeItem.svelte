<script context="module">
    export type TreeNode = {
        id: string;
        label: string;
        icon?: ComponentType;
        path?: string;
        children?: TreeNode[];
    };
</script>

<script lang="ts">
    import { IconFile } from "@tabler/icons-svelte";
    import { Accordion } from "bits-ui";
    import TreeItem from "$lib/ui/Tree/TreeItem.svelte";
    import type { ComponentType } from "svelte";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { writable } from "svelte/store";

    export let item: TreeNode;
    export let depth = 0;
    export let selected: string | null;
    export let onSelect: (id: string) => void;

    $: isSelected = selected === item.id;

    const openNodes = writable<Set<string>>(new Set());
</script>

<li>
    {#if item.children}
        <Accordion.Root
            type="multiple"
            value={[...$openNodes]}
            onValueChange={(v) => openNodes.set(new Set(v))}
        >
            <Accordion.Item value={item.id}>
                <Accordion.Header>
                    <Accordion.Trigger
                        class="
                            group flex items-center gap-2 w-full px-2 py-1 rounded-md
                            hover:bg-muted
                            {isSelected &&
                            'bg-primary/15 hover:bg-primary/15 text-primary'}
                        "
                        style="padding-left: {depth + 0.5}rem"
                    >
                        {#if item.icon}
                            <svelte:component
                                this={item.icon}
                                class="size-4 shrink-0"
                            />
                        {/if}
                        <span>{item.label}</span>
                    </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content forceMount>
                    {#snippet child({ props, open })}
                        {#if open}
                            <div
                                {...props}
                                transition:slide={{
                                    duration: 220,
                                    easing: quintOut,
                                }}
                            >
                                <ul class="relative">
                                    <div
                                        class="absolute top-0 bottom-0 w-px bg-border z-50"
                                        style="left: {depth + 1}rem"
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
                            </div>
                        {/if}
                    {/snippet}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    {:else}
        <div class="py-px">
            <button
                class="
                    flex items-center gap-2 w-full px-2 py-1 rounded-md
                    hover:bg-muted
                    {isSelected &&
                    'bg-primary/15 hover:bg-primary/15 text-primary'}
                "
                style="padding-left: {depth + 0.5}rem"
                on:click={() => onSelect(item.id)}
            >
                <IconFile class="size-4 shrink-0" />
                <span>{item.label}</span>
            </button>
        </div>
    {/if}
</li>
