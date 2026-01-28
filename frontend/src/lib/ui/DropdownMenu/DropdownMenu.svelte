<script lang="ts">
    import { DropdownMenu, type WithoutChild } from "bits-ui";
    import Button from "$lib/ui/Button.svelte";
    import {
        IconCheckbox,
        IconSquareRounded,
        IconSquareRoundedCheckFilled,
    } from "@tabler/icons-svelte";
    import { fly } from "svelte/transition";
    import Checkbox from "../Checkbox.svelte";

    type Props = DropdownMenu.RootProps & {
        buttonText: string;
        items: string[];
        contentProps?: WithoutChild<DropdownMenu.ContentProps>;
    };

    let {
        open = $bindable(false),
        children,
        buttonText,
        items,
        contentProps,
        ...restProps
    }: Props = $props();

    let selectedItems = $state<string[]>([]);
</script>

<DropdownMenu.Root bind:open {...restProps}>
    <DropdownMenu.Trigger>
        <Button variant="ghost">
            {buttonText}
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
        <DropdownMenu.Content
            {...contentProps}
            class="
                p-1 border border-border bg-background shadow-md rounded-xl
            "
            forceMount
            align="end"
        >
            {#snippet child({ wrapperProps, props, open })}
                {#if open}
                    <div {...wrapperProps}>
                        <div
                            {...props}
                            transition:fly={{
                                y: -10,
                                opacity: 0,
                                duration: 150,
                            }}
                        >
                            <DropdownMenu.CheckboxGroup
                                aria-label={buttonText}
                                bind:value={selectedItems}
                            >
                                {#each items as item}
                                    <DropdownMenu.CheckboxItem
                                        value={item}
                                        closeOnSelect={false}
                                        class="flex items-center gap-1 hover:bg-muted px-2 py-1 transition-all rounded-lg"
                                    >
                                        {#snippet children({ checked })}
                                            <Checkbox
                                                checked={checked === true}
                                                labelText={item}
                                            />
                                            {item}
                                        {/snippet}
                                    </DropdownMenu.CheckboxItem>
                                {/each}
                            </DropdownMenu.CheckboxGroup>
                        </div>
                    </div>
                {/if}
            {/snippet}
        </DropdownMenu.Content>
    </DropdownMenu.Portal>
</DropdownMenu.Root>
