<script lang="ts">
    export let value: string | number = "";
    export let type: string = "text";
    export let placeholder = "";
    export let disabled = false;
</script>

<input
    bind:value
    {type}
    {placeholder}
    {disabled}
    class="
        w-full px-2 py-1.5 rounded-xl
        border border-border
        bg-background text-foreground
        placeholder:text-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-ring
        disabled:opacity-50 disabled:cursor-not-allowed
        text-sm
    "
/>
