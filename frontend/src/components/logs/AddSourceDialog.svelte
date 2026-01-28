<script lang="ts">
    // import { Dialog } from "melt/builders";
    import Button from "$lib/ui/Button.svelte";
    import DialogClose from "$lib/ui/Dialog/DialogClose.svelte";
    import Dialog from "$lib/ui/Dialog/Dialog.svelte";
    import Input from "$lib/ui/Input.svelte";
    // import { Tabs } from "melt/builders";
    import {
        IconLock,
        IconPlane,
        IconPlus,
        IconX,
        IconDisc,
        IconServer,
        IconTestPipe,
        IconTestPipe2,
        IconLoader,
    } from "@tabler/icons-svelte";
    import { Label, Separator, Tabs } from "bits-ui";
    import DialogTrigger from "$lib/ui/Dialog/DialogTrigger.svelte";
    import DialogContent from "$lib/ui/Dialog/DialogContent.svelte";
    import DialogTitle from "$lib/ui/Dialog/DialogTitle.svelte";
    import Tooltip from "$lib/ui/Tooltip/Tooltip.svelte";

    const tabsList = ["local", "ssh"];
    let selectedTab = tabsList[0];
    const onChangeTab = (tab: string) => {
        selectedTab = tab;
    };

    // SSH
    let name = "";
    let host = "";
    let port = 22;
    let user = "";

    // Log
    let logPath = "";
    let logLabel = "";

    // Test
    let connectionTesting = false;

    function submit() {
        const payload = {
            selectedTab,
            connection:
                selectedTab === "local" ? null : { name, host, port, user },
            log: {
                path: logPath,
                label: logLabel || logPath.split("/").pop(),
            },
        };

        console.log("ADD SOURCE", payload);
        // dialog.open = false;
    }

    function testConnection() {
        if (!connectionTesting) return;
        console.log("test");
        connectionTesting = true;
        setTimeout(() => {
            connectionTesting = false;
        }, 2000);
    }
</script>

<Dialog>
    <DialogTrigger>Add log source</DialogTrigger>
    <DialogContent>
        <DialogTitle>Add log source</DialogTitle>

        <Tabs.Root value={selectedTab} onValueChange={onChangeTab}>
            <div class="flex items-center justify-between">
                <Tabs.List
                    class="
                        flex gap-1 w-fit
                        p-1 text-xs font-semibold
                        border border-border rounded-xl
                    "
                >
                    <Tabs.Trigger
                        value="local"
                        class="
                            flex items-center justify-center gap-1
                            dark:data-[state=active]:bg-muted
                            h-6 rounded-lg px-3
                            bg-transparent data-[state=active]:bg-muted
                        "
                    >
                        <IconDisc size={12} />
                        Local
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="ssh"
                        class="
                            flex items-center justify-center gap-1
                            dark:data-[state=active]:bg-muted
                            h-6 rounded-lg px-3
                            bg-transparent data-[state=active]:bg-muted
                        "
                    >
                        <IconServer size={12} />
                        SSH
                    </Tabs.Trigger>
                </Tabs.List>

                {#if selectedTab === "ssh"}
                    <Tooltip triggerProps={{ onclick: testConnection }}>
                        {#snippet trigger()}
                            <Button variant="ghost" size="icon">
                                {#if connectionTesting}
                                    <IconLoader
                                        size={16}
                                        class="animate-spin"
                                    />
                                {:else}
                                    <IconTestPipe size={16} />
                                {/if}
                            </Button>
                        {/snippet}
                        Test SSH connection
                    </Tooltip>
                {/if}
            </div>
            <Tabs.Content value="local" class="select-none pt-3">
                <div class="space-y-2">
                    <Input
                        placeholder="/var/log/app.log"
                        bind:value={logPath}
                    />
                    <Input
                        placeholder="Display name (optional)"
                        bind:value={logLabel}
                    />
                </div>
            </Tabs.Content>
            <Tabs.Content value="ssh" class="select-none pt-3">
                <div class="space-y-2 mb-4">
                    <Input placeholder="Connection name" bind:value={name} />
                    <Input placeholder="Host" bind:value={host} />
                    <div class="flex gap-2">
                        <Input placeholder="User" bind:value={user} />
                        <Input
                            type="number"
                            placeholder="Port"
                            bind:value={port}
                        />
                    </div>
                </div>
                <Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" />
                <div class="space-y-2">
                    <Input
                        placeholder="/var/log/app.log"
                        bind:value={logPath}
                    />
                    <Input
                        placeholder="Display name (optional)"
                        bind:value={logLabel}
                    />
                </div>
            </Tabs.Content>
        </Tabs.Root>

        <div class="mt-4 flex">
            <div class="ml-auto">
                <DialogClose>
                    <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button>Add</Button>
            </div>
        </div>
    </DialogContent>
</Dialog>
