<script lang="ts">
    import { Tabs } from "bits-ui";
    export let value: string;
</script>

<Tabs.Trigger
    {value}
    class="
        flex items-center justify-center gap-1
        h-6 px-3 rounded-lg
        bg-transparent
        transition-colors
        data-[state=active]:bg-muted
        dark:data-[state=active]:bg-muted
    "
>
    <slot />
</Tabs.Trigger>
