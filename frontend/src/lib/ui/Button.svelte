<script module>
    export type ButtonVariant =
        | "primary"
        | "secondary"
        | "ghost"
        | "destructive";
    export type ButtonSize = "sm" | "md" | "lg" | "icon" | "icon-sm";

    export type Props = ButtonRootProps & {
        variant?: ButtonVariant;
        size?: ButtonSize;
        loading?: boolean;
        children?: Snippet;
    };
</script>

<script lang="ts">
    import { Button, type ButtonRootProps } from "bits-ui";
    import type { Snippet } from "svelte";

    let {
        variant = "primary",
        size = "md",
        loading = false,
        disabled = false,
        children,
        ...rest
    }: Props = $props();

    const base =
        "flex gap-1 items-center justify-center rounded-xl font-medium transition-all select-none text-sm";

    const variants: Record<ButtonVariant, string> = {
        primary:
            "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary:
            "bg-muted text-muted-foreground hover:bg-muted/90 active:bg-muted/80",
        ghost: "bg-transparent text-foreground hover:bg-muted active:bg-muted",
        destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
    };

    const sizes: Record<ButtonSize, string> = {
        sm: "px-2 h-6 text-xs",
        md: "px-3 h-8 text-sm",
        lg: "px-4 h-10 text-md",
        icon: "flex items-center justify-center size-8 text-sm",
        "icon-sm": "flex items-center justify-center size-6 text-xs",
    };

    const isDisabled = $derived(disabled || loading);

    const disabledClass = $derived(
        isDisabled ? "opacity-60 cursor-not-allowed" : "",
    );

    const className = $derived(
        `${base} ${variants[variant]} ${sizes[size]} ${disabledClass}`,
    );
</script>

<Button.Root {...rest} class={className} disabled={isDisabled}>
    {@render children?.()}
</Button.Root>
