<script lang="ts">
    import { Tabs } from "bits-ui";
    export let value: string;
</script>

<Tabs.Content {value} class="select-none pt-3">
    <slot />
</Tabs.Content>
