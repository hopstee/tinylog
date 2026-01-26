<script lang="ts">
    import {
        IconFolderOpen,
        IconFolder,
        IconFile,
        IconPlus,
        IconLibraryMinus,
    } from "@tabler/icons-svelte";

    import { Tree } from "melt/builders";
    import Button from "../ui/Button.svelte";

    const items = [
        {
            id: "src",
            label: "src",
            children: [
                { id: "main.ts", label: "main.ts" },
                {
                    id: "components",
                    label: "components",
                    children: [{ id: "Button.svelte", label: "Button.svelte" }],
                },
            ],
        },
        {
            id: "static",
            label: "static",
            children: [
                { id: "favicon.png", label: "favicon.p" },
                { id: "style.css", label: "style" },
            ],
        },
    ];

    const typeheadFunc = (letter: string) => {};

    const tree = new Tree({
        items,
        typeaheadTimeout: 200,
    });
</script>

{#snippet treeItems(items: (typeof tree)["children"], depth: number = 0)}
    {#each items as item (item.id)}
        <li {...item.attrs}>
            <div class="group py-1" style="padding-left: {depth * 1}rem">
                <div
                    class="
                        flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md
                        group-hover:bg-muted transition-all duration-100
                        {item.selected &&
                        !item.children?.length &&
                        'bg-accent/80 hover:bg-accent/80'}
                    "
                >
                    {#if item.children?.length}
                        <span class="">
                            {#if item.expanded}
                                <IconFolderOpen size={18} />
                            {:else}
                                <IconFolder size={18} />
                            {/if}
                        </span>
                    {:else}
                        <span class="">
                            <IconFile size={16} />
                        </span>
                    {/if}

                    <span class="select-none text-sm">{item.item.label}</span>
                </div>
            </div>

            {#if item.children?.length}
                <ul
                    class="relative list-none p-0 overflow-hidden origin-left transition-all duration-200 ease-in-out"
                    style="
                    max-height: {item.expanded ? '1000px' : '0px'};
                    opacity: {item.expanded ? 1 : 0};
                    transform: {item.expanded ? 'scale(1)' : 'scale(.85)'};
                    "
                >
                    <div
                        style="left: {depth + 0.75}rem"
                        class="absolute bottom-2 top-2 w-px bg-border"
                    ></div>
                    {@render treeItems(item.children, depth + 1)}
                </ul>
            {/if}
        </li>
    {/each}
{/snippet}

<div class="h-full overflow-hidden border-r border-border p-2">
    <div>
        <Button variant="ghost" size="icon">
            <IconPlus size={16} />
        </Button>
        <Button variant="ghost" size="icon" on:click={() => tree.expandAll()}>
            <IconLibraryMinus size={16} />
        </Button>
    </div>
    <ul {...tree.root} class="w-56 h-full overflow-x-auto">
        {@render treeItems(tree.children, 0)}
    </ul>
</div>
