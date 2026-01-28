<script lang="ts">
    import { Tooltip } from "bits-ui";
    import { type Snippet } from "svelte";
    import { fly } from "svelte/transition";

    type Props = Tooltip.RootProps & {
        trigger: Snippet;
        triggerProps?: Tooltip.TriggerProps;
    };

    let {
        open = $bindable(false),
        children,
        trigger,
        triggerProps = {},
        delayDuration = 500,
        ...restProps
    }: Props = $props();
</script>

<Tooltip.Root bind:open {...restProps} {delayDuration}>
    <Tooltip.Trigger {...triggerProps}>
        {@render trigger()}
    </Tooltip.Trigger>
    <Tooltip.Portal>
        <Tooltip.Content sideOffset={8} forceMount>
            {#snippet child({ wrapperProps, props, open })}
                {#if open}
                    <div {...wrapperProps}>
                        <div
                            {...props}
                            transition:fly={{
                                y: 10,
                                opacity: 0,
                                duration: 150,
                            }}
                        >
                            <!-- <Tooltip.Arrow class="text-border" /> -->
                            <div
                                class="
                                    rounded-xl border-border bg-background shadow-sm
                                    outline-hidden z-0 flex items-center justify-center border
                                    px-3 py-1.5 text-xs font-medium
                                "
                            >
                                {@render children?.()}
                            </div>
                        </div>
                    </div>
                {/if}
            {/snippet}
        </Tooltip.Content>
    </Tooltip.Portal>
</Tooltip.Root>
