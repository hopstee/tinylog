<script lang="ts">
    import { levelFilter } from "$lib/hooks/useLogsStore";
    import type { LogLevel } from "$lib/types/logs";
    import Input from "$lib/ui/Input.svelte";
    import { DropdownMenu } from "bits-ui";

    let search: string = "";

    const levels: LogLevel[] = [
        "trace",
        "debug",
        "info",
        "warn",
        "error",
        "fatal",
    ];

    function setLevel(level: LogLevel, enabled: boolean) {
        levelFilter.update((s) => {
            const next = new Set(s);
            enabled ? next.add(level) : next.delete(level);
            return next;
        });
    }
</script>

<div
    class="h-11 flex items-center gap-3 px-3 border-b border-border"
    style="
        padding-left: calc(var(--titlebar-x) + 12px);
        padding-top: env(safe-area-inset-top);
    "
>
    <Input placeholder="Search logs…" bind:value={search} />

    <div class="flex gap-1">
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>Level</DropdownMenu.Trigger>

            <DropdownMenu.Content>
                <DropdownMenu.CheckboxGroup>
                    {#each levels as lvl}
                        <DropdownMenu.CheckboxItem
                            checked={$levelFilter.has(lvl)}
                        >
                            {lvl.toUpperCase()}
                        </DropdownMenu.CheckboxItem>
                    {/each}
                </DropdownMenu.CheckboxGroup>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
        <!-- <Toggle
                value={$levelFilter.has(lvl)}
                on:valueChange={(e) => setLevel(lvl, e.detail)}
            >
                {#snippet children(toggle)}
                    <button
                        {...toggle.trigger}
                        class="px-2 text-xs rounded-md border transition
                                  {toggle.value
                            ? 'bg-primary/15 text-primary border-primary/30'
                            : 'border-transparent text-muted-foreground'}"
                    >
                        {lvl.toUpperCase()}
                    </button>
                {/snippet}
            </Toggle> -->
    </div>
</div>
