import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface GestureStepProps {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
  delay?: number;
  children?: React.ReactNode;
}

export function GestureStep({ 
  step, 
  title, 
  description, 
  isActive, 
  delay = 0,
  children 
}: GestureStepProps) {
  return (
    <Card 
      className={cn(
        "relative p-6 border-border/20 bg-card/50 backdrop-blur-sm transition-all duration-500",
        "hover:border-primary/30 hover:bg-card/70",
        isActive && "border-primary/50 tech-glow-blue scale-105",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div 
          className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-300",
            isActive 
              ? "border-primary bg-primary text-primary-foreground tech-glow-blue" 
              : "border-muted-foreground/30 text-muted-foreground"
          )}
        >
          {step.toString().padStart(2, '0')}
        </div>
        
        <div className="flex-1">
          <h3 className={cn(
            "text-xl font-semibold mb-2 transition-colors duration-300",
            isActive ? "text-primary" : "text-foreground"
          )}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {isActive && (
        <div className="absolute inset-0 rounded-lg scan-line pointer-events-none" />
      )}
    </Card>
  );
}