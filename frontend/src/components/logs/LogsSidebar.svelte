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
        IconServer2,
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
            icon: IconDisc,
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
            icon: IconServer2,
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

    let selectedItem: string = "";
</script>

<div class="flex flex-col w-56 h-full overflow-hidden border-r border-border">
    <div class="flex items-center gap-2 border-b border-border h-11 px-2">
        <Input placeholder="Search file..." />
        <AddSourceDialog />
        <!-- <Button variant="ghost" size="icon" on:click={tree.collapseAll}>
            <IconLibraryMinus size={16} />
        </Button> -->
    </div>

    <div class="flex-1 h-full overflow-auto p-2">
        <Tree
            {items}
            onSelect={(id) => (selectedItem = id)}
            selected={selectedItem}
        />
    </div>
</div>
