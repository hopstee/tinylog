<script>
    import LogDetails from "./LogDetails.svelte";
    import LogsSidebar from "./LogsSidebar.svelte";
    import LogsStream from "./LogsStream.svelte";
    import LogsTopbar from "./LogsTopbar.svelte";
</script>

<div class="h-full w-full flex flex-col bg-background text-foreground">
    <LogsTopbar />

    <div class="flex flex-1 overflow-hidden">
        <LogsSidebar />

        <div class="flex-1 flex flex-col overflow-hidden">
            <LogsStream />
            <LogDetails />
        </div>
    </div>
</div>
