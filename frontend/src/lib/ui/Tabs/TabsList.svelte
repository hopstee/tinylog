<script lang="ts">
    import { Tabs } from "bits-ui";
</script>

<Tabs.List
    class="
        flex gap-1 w-fit
        p-1 text-xs font-semibold
        border border-border rounded-xl
    "
>
    <slot />
</Tabs.List>
