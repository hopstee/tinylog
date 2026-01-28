<script lang="ts">
    import { IconCheck, IconMinus } from "@tabler/icons-svelte";
    import {
        Checkbox,
        Label,
        useId,
        type WithoutChildrenOrChild,
    } from "bits-ui";

    let {
        id = useId(),
        checked = $bindable(false),
        ref = $bindable(null),
        labelRef = $bindable(null),
        ...restProps
    }: WithoutChildrenOrChild<Checkbox.RootProps> & {
        labelText: string;
        labelRef?: HTMLLabelElement | null;
    } = $props();
</script>

<Checkbox.Root
    {id}
    bind:checked
    bind:ref
    {...restProps}
    class="border-muted bg-foreground data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40 peer inline-flex size-4 items-center justify-center rounded-md border transition-all duration-150 ease-in-out active:scale-[0.98]"
>
    {#snippet children({ checked, indeterminate })}
        <div class="text-background inline-flex items-center justify-center">
            {#if indeterminate}
                <IconMinus class="size-3" />
            {:else if checked}
                <IconCheck class="size-3" />
            {/if}
        </div>
    {/snippet}
</Checkbox.Root>
