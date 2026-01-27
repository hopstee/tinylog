<script context="module">
    export type ButtonVariant =
        | "primary"
        | "secondary"
        | "ghost"
        | "destructive";
    export type ButtonSize = "sm" | "md" | "lg" | "icon" | "icon-sm";
</script>

<script lang="ts">
    export let variant: ButtonVariant = "primary";
    export let size: ButtonSize = "md";
    export let loading: boolean = false;
    export let disabled: boolean = false;

    export let href: string | null = null;
    export let type: "button" | "submit" | "reset" = "button";

    const base =
        "inline-flex items-center justify-center rounded-xl font-medium transition-all select-none";

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary:
            "bg-muted text-muted-foreground hover:bg-muted/90 active:bg-muted/80",
        ghost: "bg-transparent text-foreground hover:bg-muted active:bg-muted",
        destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-2.5 text-lg",
        icon: "h-9 w-9 p-1",
        "icon-sm": "h-7 w-7 p-2",
    };

    const isDisabled = disabled || loading;
</script>

{#if href}
    <a
        {href}
        class={`${base} ${variants[variant]} ${sizes[size]} ${isDisabled && "opacity-60 cursor-not-allowed"} `}
        aria-disabled={isDisabled}
    >
        <slot />
    </a>
{:else}
    <button
        {type}
        class={`${base} ${variants[variant]} ${sizes[size]} ${isDisabled && "opacity-60 cursor-not-allowed"} `}
        disabled={isDisabled}
    >
        <slot />
    </button>
{/if}
