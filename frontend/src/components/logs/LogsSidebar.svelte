<script lang="ts">
    import {
        IconFolderOpen,
        IconFolder,
        IconFile,
        IconPlus,
        IconLibraryMinus,
        IconDisc,
        IconServer,
        IconChevronCompactDown,
        IconChevronCompactUp,
        IconChevronDown,
        IconChevronUp,
    } from "@tabler/icons-svelte";

    // import { Tree } from "melt/builders";
    import Button from "$lib/ui/Button.svelte";
    import AddSourceDialog from "./AddSourceDialog.svelte";
    import Input from "$lib/ui/Input.svelte";
    import Tree from "$lib/ui/Tree/Tree.svelte";

    const items = [
        {
            id: "local",
            label: "Local",
            children: [
                {
                    id: "local-syslog",
                    label: "syslog",
                    path: "/var/log/syslog",
                },
                { id: "local-app", label: "app.log", path: "~/logs/app.log" },
            ],
        },
        {
            id: "ssh",
            label: "SSH",
            children: [
                {
                    id: "ssh-1",
                    label: "my-server-1",
                    children: [
                        {
                            id: "nginx-access",
                            label: "nginx access",
                            path: "/var/log/nginx/access.log",
                        },
                        {
                            id: "nginx-error",
                            label: "nginx error",
                            path: "/var/log/nginx/error.log",
                        },
                    ],
                },
            ],
        },
    ];

    const typeheadFunc = (letter: string) => {};

    // const tree = new Tree({
    //     items,
    //     typeaheadTimeout: 200,
    // });
</script>

<!-- {#snippet treeItems(items: (typeof tree)["children"], depth: number = 0)}
    {#each items as item (item.id)}
        <li {...item.attrs}>
            <div class="group py-1" style="padding-left: {depth * 1}rem">
                <div
                    class="
                        flex items-center gap-2 cursor-pointer px-3 py-2 rounded-xl
                        group-hover:bg-muted transition-all duration-100
                        {item.selected &&
                        !item.children?.length &&
                        'bg-accent/80 hover:bg-accent/80 text-accent-foreground'}
                    "
                >
                    {#if item.children?.length}
                        <span class="">
                            {#if item.id === "local"}
                                <IconDisc size={18} />
                            {:else if item.id === "ssh"}
                                <IconServer size={18} />
                            {:else if item.expanded}
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

                    <div class="flex flex-col items-start">
                        <span class="select-none text-sm">
                            {item.item.label}
                        </span>
                        <span class="select-none text-xs">
                            {item.item.path}
                        </span>
                    </div>

                    {#if item.children?.length}
                        <span class="ml-auto">
                            <IconChevronDown
                                size={18}
                                class="
                                transition-all
                                    {item.expanded && 'rotate-180'}
                                "
                            />
                        </span>
                    {/if}
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
{/snippet} -->

<div class="w-56 h-full overflow-hidden border-r border-border">
    <div class="flex items-center gap-2 border-b border-border h-11 px-2">
        <Input placeholder="Search file..." />
        <AddSourceDialog />
        <!-- <Button variant="ghost" size="icon">
            <IconPlus size={16} />
        </Button> -->
        <!-- <Button variant="ghost" size="icon" on:click={tree.collapseAll}>
            <IconLibraryMinus size={16} />
        </Button> -->
    </div>
    <!-- <ul {...tree.root} class="h-full overflow-x-auto p-2">
        {@render treeItems(tree.children, 0)}
    </ul> -->

    <Tree {items} onSelect={console.log} />
</div>
