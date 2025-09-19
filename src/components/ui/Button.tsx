"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 disabled:opacity-50",
    {
        variants: {
            variant: {
                solid: "bg-brand-600 hover:bg-brand-500 text-white shadow-glow",
                outline: "border border-brand-600/50 hover:bg-brand-600/10",
            },
            size: {
                sm: "h-8 px-3",
                md: "h-10 px-4",
                lg: "h-12 px-6 text-base",
            },
        },
        defaultVariants: { variant: "solid", size: "md" },
    }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof button>;

export function Button({ className, variant, size, ...props }: Props) {
    return <button className={cn(button({ variant, size }), className)} {...props} />;
}
