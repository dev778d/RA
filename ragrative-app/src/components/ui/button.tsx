"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-[var(--accent)] text-[var(--bg-deep)] hover:bg-[var(--accent-hover)] shadow-[var(--shadow-glow)]",
        secondary: "bg-transparent border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        ghost: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface)]",
        orange: "bg-[#FF5C00] text-white hover:bg-[#E55400] shadow-[0_0_30px_rgba(255,92,0,0.3)]",
        glow: "bg-[var(--accent)] text-[var(--bg-deep)] hover:bg-[var(--accent-hover)] shadow-[var(--shadow-glow)] animate-pulse-glow",
        outline: "bg-transparent border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-surface)] hover:border-[var(--accent)]",
        outlineAccent: "bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-deep)]",
        link: "bg-transparent text-[var(--accent)] hover:text-[var(--accent-hover)] underline-offset-4 hover:underline",
        destructive: "bg-[var(--error)] text-white hover:bg-[var(--error)]/90",
        dark: "bg-[var(--bg-deep)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-card)] hover:border-[var(--accent)]",
        light: "bg-white text-[var(--bg-deep)] hover:bg-white/90",
        gradient: "bg-gradient-to-r from-[var(--accent)] to-[var(--emerald)] text-[var(--bg-deep)] hover:opacity-90",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        md: "h-11 px-6 text-sm rounded-xl",
        lg: "h-14 px-8 text-base rounded-xl",
        xl: "h-16 px-10 text-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showArrow?: boolean;
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, showArrow = false, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), loading && "opacity-70")}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            <span>{children}</span>
            {showArrow && !loading && (
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
