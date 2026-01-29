<script lang="ts">
    import { IconCheck } from "@tabler/icons-svelte";
    import { Select, type WithoutChildren } from "bits-ui";
    import { fly } from "svelte/transition";

    type Props = WithoutChildren<Select.RootProps> & {
        placeholder?: string;
        items: { value: string; label: string; disabled?: boolean }[];
        contentProps?: WithoutChildren<Select.ContentProps>;
    };

    let {
        value = $bindable(),
        items,
        contentProps,
        placeholder,
        ...restProps
    }: Props = $props();

    const selectedLabel = $derived(
        items.find((item) => item.value === value)?.label,
    );
</script>

<Select.Root bind:value={value as never} {...restProps}>
    <Select.Trigger
        class="
            px-2 py-1.5 rounded-xl
            border border-border
            bg-background text-foreground
            placeholder:text-muted-foreground
            focus:outline-none focus:ring-2 focus:ring-ring
            disabled:opacity-50 disabled:cursor-not-allowed
            text-sm
        "
    >
        {selectedLabel ? selectedLabel : placeholder}
    </Select.Trigger>
    <Select.Portal>
        <Select.Content
            {...contentProps}
            class="p-1 border border-border bg-background shadow-md rounded-xl"
            forceMount
            align="center"
            sideOffset={8}
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
                            <Select.ScrollUpButton>up</Select.ScrollUpButton>
                            <Select.Viewport>
                                {#each items as { value, label, disabled } (value)}
                                    <Select.Item
                                        {value}
                                        {label}
                                        {disabled}
                                        class="flex items-center gap-1 hover:bg-muted px-2 py-1 transition-all rounded-lg"
                                    >
                                        {#snippet children({ selected })}
                                            {#if selected}
                                                <IconCheck class="size-4" />
                                            {:else}
                                                <span class="size-4"></span>
                                            {/if}
                                            {label}
                                        {/snippet}
                                    </Select.Item>
                                {/each}
                            </Select.Viewport>
                            <Select.ScrollDownButton
                                >down</Select.ScrollDownButton
                            >
                        </div>
                    </div>
                {/if}
            {/snippet}
        </Select.Content>
    </Select.Portal>
</Select.Root>
