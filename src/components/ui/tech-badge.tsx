import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "muted";
  className?: string;
}

export function TechBadge({ children, variant = "primary", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
        "transition-all duration-300 hover:scale-105",
        {
          "bg-primary/10 text-primary border-primary/30 tech-glow-blue": variant === "primary",
          "bg-accent/10 text-accent border-accent/30 tech-glow-green": variant === "accent", 
          "bg-muted/10 text-muted-foreground border-border": variant === "muted",
        },
        className
      )}
    >
      {children}
    </span>
  );
}