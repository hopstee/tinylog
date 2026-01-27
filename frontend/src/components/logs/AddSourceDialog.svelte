<script lang="ts">
    // import { Dialog } from "melt/builders";
    import Button from "$lib/ui/Button.svelte";
    import Input from "$lib/ui/Input.svelte";
    // import { Tabs } from "melt/builders";
    import { IconLock, IconPlane, IconPlus, IconX } from "@tabler/icons-svelte";
    import { Dialog, Label, Separator, Tabs } from "bits-ui";

    // const dialog = new Dialog();

    type ConnectionType = "local" | "ssh";

    const tabsList = ["local", "ssh"];
    let selectedTab = tabsList[0];
    const onChangeTab = (tab: string) => {
        selectedTab = tab;
    };

    // const tabs = new Tabs({ value: selectedTab, onValueChange: onChangeTab });

    // SSH
    let name = "";
    let host = "";
    let port = 22;
    let user = "";

    // Log
    let logPath = "";
    let logLabel = "";

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
</script>

<Dialog.Root>
    <Dialog.Trigger
        class="
            rounded-input bg-dark text-background shadow-mini hover:bg-dark/95
            focus-visible:ring-foreground focus-visible:ring-offset-background
            focus-visible:outline-hidden inline-flex h-12 items-center justify-center
            whitespace-nowrap px-5 text-[15px] font-semibold transition-colors
            focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]
        "
    >
        Add log source
    </Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Overlay
            class="
                data-[state=open]:animate-in data-[state=closed]:animate-out
                data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                fixed inset-0 z-50 bg-black/80
            "
        />
        <Dialog.Content
            class="
                rounded-xl bg-background shadow-popover data-[state=open]:animate-in
                data-[state=closed]:animate-out data-[state=closed]:fade-out-0
                data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
                data-[state=open]:zoom-in-95 outline-hidden fixed
                left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)]
                translate-x-[-50%] translate-y-[-50%] border p-5
                sm:max-w-122 md:w-full"
        >
            <Dialog.Title class="text-lg font-semibold mb-4">
                Add log source
            </Dialog.Title>

            <Tabs.Root
                value="local"
                class="bg-background-alt shadow-card w-full"
            >
                <Tabs.List
                    class="
                        grid w-full grid-cols-2 gap-1 p-1 text-sm font-semibold
                        border border-border rounded-lg
                    "
                >
                    <Tabs.Trigger
                        value="local"
                        class="
                            dark:data-[state=active]:bg-muted text-sm
                            h-8 rounded-md bg-transparent py-1 data-[state=active]:bg-white
                        "
                    >
                        Local
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="ssh"
                        class="
                            data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted
                            h-8 rounded-md bg-transparent py-1 data-[state=active]:bg-white
                        "
                    >
                        SSH
                    </Tabs.Trigger>
                </Tabs.List>
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
                        <Input
                            placeholder="Connection name"
                            bind:value={name}
                        />
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
                    <Separator.Root
                        class="bg-muted -mx-5 mb-6 mt-5 block h-px"
                    />
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

            <!-- <div class="flex flex-col items-start gap-1 pb-11 pt-7">
                <div class="mb-4">
                    <label class="text-sm font-medium mb-1 block">Connection</label>
                    <div {...tabs.triggerList}>
                        {#each tabsList as tab}
                            <button
                                {...tabs.getTrigger(tab)}
                                class="px-3 py-1 rounded-lg"
                                class:bg-primary={selectedTab === tab}
                                class:text-primary-foreground={selectedTab === tab}
                                on:click={() => (selectedTab = tab)}
                            >
                                {tab}
                            </button>
                        {/each}
                    </div>
                </div>

                {#if selectedTab === "ssh"}
                    <div class="space-y-2 mb-4">
                        <Input placeholder="Connection name" bind:value={name} />
                        <Input placeholder="Host" bind:value={host} />
                        <div class="flex gap-2">
                            <Input placeholder="User" bind:value={user} />
                            <Input type="number" placeholder="Port" bind:value={port} />
                        </div>
                    </div>
                {/if}

                <hr class="my-4 opacity-30" />

                <div class="space-y-2">
                    <Input placeholder="/var/log/app.log" bind:value={logPath} />
                    <Input
                        placeholder="Display name (optional)"
                        bind:value={logLabel}
                    />
                </div>
            </div> -->

            <Dialog.Close>
                <Button variant="secondary">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close>
                <Button>Add</Button>
            </Dialog.Close>
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>

<!-- <button {...dialog.trigger}> <IconPlus size={16} /> </button>

<div {...dialog.overlay}></div>

<dialog
    {...dialog.content}
    class="
    w-full max-w-md rounded-xl
    bg-background border border-border
    shadow-xl
    top-1/2 left-1/2
    -translate-1/2
"
>
    <div class="p-4 space-y-4">
        <h2 class="text-lg font-semibold mb-4">Add log source</h2>

        <div class="mb-4">
            <label class="text-sm font-medium mb-1 block">Connection</label>
            <div {...tabs.triggerList}>
                {#each tabsList as tab}
                    <button
                        {...tabs.getTrigger(tab)}
                        class="px-3 py-1 rounded-lg"
                        class:bg-primary={selectedTab === tab}
                        class:text-primary-foreground={selectedTab === tab}
                        on:click={() => (selectedTab = tab)}
                    >
                        {tab}
                    </button>
                {/each}
            </div>
        </div>

        {#if selectedTab === "ssh"}
            <div class="space-y-2 mb-4">
                <Input placeholder="Connection name" bind:value={name} />
                <Input placeholder="Host" bind:value={host} />
                <div class="flex gap-2">
                    <Input placeholder="User" bind:value={user} />
                    <Input type="number" placeholder="Port" bind:value={port} />
                </div>
            </div>
        {/if}

        <hr class="my-4 opacity-30" />

        <div class="space-y-2">
            <Input placeholder="/var/log/app.log" bind:value={logPath} />
            <Input
                placeholder="Display name (optional)"
                bind:value={logLabel}
            />
        </div>

        <div class="mt-6 flex justify-end gap-2">
            <Button variant="ghost" on:click={() => (dialog.open = false)}
                >Cancel</Button
            >
            <Button on:click={submit}>Add</Button>
        </div>
    </div>
</dialog> -->

<style>
    dialog {
        width: 24rem;
        background: white;
        opacity: 0;
        scale: 0.95;
        transition: ease 300ms;
    }

    dialog::backdrop {
        display: none;
    }

    dialog[data-open] {
        opacity: 1;
        scale: 1;
    }

    [data-melt-dialog-overlay] {
        position: fixed;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0;
        transition: ease 300ms;
    }

    [data-melt-dialog-overlay][data-open] {
        opacity: 0.1;
    }
</style>
