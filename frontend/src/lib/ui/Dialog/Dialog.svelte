<script lang="ts">
    import { Dialog } from "bits-ui";

    let {
        open = $bindable(false),
        children,
        ...rest
    }: Dialog.RootProps = $props();
</script>

<Dialog.Root bind:open>
    {@render children?.()}
</Dialog.Root>
