"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent-primary)] text-white",
        secondary:
          "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]",
        outline:
          "border border-[var(--border)] text-[var(--text-secondary)]",
        ghost:
          "bg-[var(--bg-glass)] text-[var(--text-secondary)]",
        success:
          "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
        warning:
          "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        error:
          "bg-red-500/20 text-red-400 border border-red-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
