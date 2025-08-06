import { Card } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import { 
  Zap, 
  Shield, 
  Cpu, 
  Wifi, 
  Target, 
  Smartphone,
  Monitor,
  Volume2,
  Play,
  RotateCcw
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Ultra-low latency gesture recognition with response times under 50ms for seamless interaction.",
    badge: "Performance"
  },
  {
    icon: Target,
    title: "High Precision",
    description: "Sub-pixel accuracy tracking with 95%+ gesture recognition rate for reliable control.",
    badge: "Accuracy"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens locally on your device. No data is sent to external servers.",
    badge: "Security"
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Advanced machine learning models trained on millions of gesture patterns.",
    badge: "Intelligence"
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description: "Works seamlessly with Windows, macOS, and Linux systems.",
    badge: "Compatibility"
  },
  {
    icon: Smartphone,
    title: "Multi-Device",
    description: "Control PCs, smart TVs, and other connected devices with the same gestures.",
    badge: "Versatility"
  }
];

const applications = [
  {
    icon: Play,
    title: "Media Control",
    description: "Play, pause, skip, and control volume with simple hand gestures."
  },
  {
    icon: Volume2,
    title: "Presentation Mode",
    description: "Navigate slides and control presentations without touching any device."
  },
  {
    icon: Monitor,
    title: "Smart TV Control",
    description: "Browse content, adjust settings, and control your TV from across the room."
  },
  {
    icon: RotateCcw,
    title: "Accessibility",
    description: "Enables computer interaction for users with limited mobility or dexterity."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Core Features */}
        <div className="text-center mb-16 animate-fade-in">
          <TechBadge variant="accent" className="mb-4">
            Core Features
          </TechBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge AI and computer vision technologies to deliver 
            the most natural and responsive gesture control experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-border/20 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/70 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <TechBadge variant="muted" className="text-xs">
                        {feature.badge}
                      </TechBadge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Applications */}
        <div className="text-center mb-16">
          <TechBadge variant="primary" className="mb-4">
            Applications
          </TechBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Endless <span className="gradient-text">Possibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From entertainment to accessibility, AirNav opens up new ways to interact 
            with your digital world through natural gestures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <Card 
                key={index}
                className="p-8 border-border/20 bg-card/30 backdrop-blur-sm hover:border-accent/30 hover:bg-card/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{app.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}