<script>
    import { Dialog } from "bits-ui";
</script>

<Dialog.Trigger
    class="
        rounded-input bg-dark text-background shadow-mini hover:bg-dark/95
        focus-visible:ring-foreground focus-visible:ring-offset-background
        focus-visible:outline-hidden inline-flex h-12 items-center justify-center
        whitespace-nowrap px-5 text-[15px] font-semibold transition-colors
        focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]
    "
>
    <slot />
</Dialog.Trigger>
