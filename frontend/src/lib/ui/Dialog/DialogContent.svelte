<script>
    import { Dialog } from "bits-ui";
    import { fade, fly } from "svelte/transition";
</script>

<Dialog.Portal>
    <Dialog.Overlay forceMount>
        {#snippet child({ props, open })}
            {#if open}
                <div
                    {...props}
                    class="fixed inset-0 bg-black/10 backdrop-blur-xs"
                    transition:fade={{ duration: 150 }}
                ></div>
            {/if}
        {/snippet}
    </Dialog.Overlay>
    <Dialog.Content
        class="
            rounded-3xl bg-background shadow-popover data-[state=open]:animate-in
            data-[state=closed]:animate-out data-[state=closed]:fade-out-0
            data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
            data-[state=open]:zoom-in-95 outline-hidden p-5
            sm:max-w-122 md:w-full
        "
        forceMount
    >
        {#snippet child({ props, open })}
            {#if open}
                <div class="fixed inset-0 grid place-items-center">
                    <div
                        {...props}
                        transition:fly={{ y: 20, opacity: 0, duration: 150 }}
                    >
                        <slot />
                    </div>
                </div>
            {/if}
        {/snippet}
    </Dialog.Content>
</Dialog.Portal>
