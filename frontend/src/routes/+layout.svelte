<script>
    import { Tooltip } from "bits-ui";
    import "../app.css";
</script>

<div class="h-screen bg-background">
    <Tooltip.Provider>
        <slot />
    </Tooltip.Provider>
</div>
