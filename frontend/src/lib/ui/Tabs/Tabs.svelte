<script lang="ts">
    import { Tabs } from "bits-ui";

    export let value: string;
    export let onValueChange: (v: string) => void;
</script>

<Tabs.Root {value} {onValueChange}>
    <slot />
</Tabs.Root>
