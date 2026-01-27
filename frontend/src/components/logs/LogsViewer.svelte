<script>
    import LogDetails from "./LogDetails.svelte";
    import LogsSidebar from "./LogsSidebar.svelte";
    import LogsStream from "./LogsStream.svelte";
    import LogsTopbar from "./LogsTopbar.svelte";
</script>

<div class="h-full w-full flex bg-background text-foreground">
    <LogsSidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
        <LogsTopbar />
        <div class="flex-1 flex flex-col overflow-hidden">
            <LogsStream />
            <!-- <LogDetails /> -->
        </div>
    </div>
</div>
