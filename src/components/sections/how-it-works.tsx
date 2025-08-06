import { useState, useEffect } from "react";
import { GestureStep } from "@/components/ui/gesture-step";
import { TechBadge } from "@/components/ui/tech-badge";
import { Camera, Scan, Brain, ArrowRight, MousePointer } from "lucide-react";
import handDetectionImage from "@/assets/hand-detection.jpg";
import gestureMappingImage from "@/assets/gesture-mapping.jpg";

const steps = [
  {
    id: 1,
    title: "Capture",
    description: "Camera detects hand gestures naturally from 3-10 feet away. Simply raise your hand and AirNav begins tracking your movements in real-time.",
    icon: Camera,
    detail: "Advanced computer vision algorithms process video feed at 30 FPS for smooth tracking.",
    image: null
  },
  {
    id: 2,
    title: "Detect",
    description: "AI identifies key hand landmarks including fingertips, joints, and palm position with sub-pixel accuracy using MediaPipe technology.",
    icon: Scan,
    detail: "21 landmark points are tracked simultaneously for precise gesture recognition.",
    image: handDetectionImage
  },
  {
    id: 3,
    title: "Recognize",
    description: "Machine learning models interpret hand gestures and classify them into actionable commands with 95%+ accuracy.",
    icon: Brain,
    detail: "Supports pointing, clicking, scrolling, and custom gesture patterns.",
    image: null
  },
  {
    id: 4,
    title: "Map",
    description: "Gesture data is converted to device commands through intelligent mapping algorithms that understand spatial relationships.",
    icon: ArrowRight,
    detail: "Real-time coordinate transformation and smoothing for natural cursor movement.",
    image: gestureMappingImage
  },
  {
    id: 5,
    title: "Execute",
    description: "Commands are sent to your PC or TV, enabling seamless touchless control of media, applications, and system functions.",
    icon: MousePointer,
    detail: "Ultra-low latency execution with response times under 50ms.",
    image: null
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 5) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <TechBadge variant="primary" className="mb-4">
            Technology Deep Dive
          </TechBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">AirNav</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the seamless 5-step process that transforms natural hand movements 
            into precise digital control through cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <GestureStep
                key={step.id}
                step={step.id}
                title={step.title}
                description={step.description}
                isActive={activeStep === step.id}
                delay={index * 100}
              >
                <div className="flex items-center gap-3 mt-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
                
                {step.image && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-border/20">
                    <img 
                      src={step.image} 
                      alt={`${step.title} visualization`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}
              </GestureStep>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="relative">
          <div className="flex justify-center items-center gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-500 cursor-pointer ${
                    activeStep === step.id
                      ? 'border-primary bg-primary text-primary-foreground tech-glow-blue scale-110'
                      : 'border-muted-foreground/30 text-muted-foreground hover:border-primary/50'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="mx-2 h-5 w-5 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <TechBadge variant="accent" className="pulse-glow">
              {activeStep < 6 ? `Step ${activeStep}: ${steps[activeStep - 1].title}` : 'Complete Process'}
            </TechBadge>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-border/20 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary mb-2">3-10 ft</div>
            <div className="text-muted-foreground">Working Range</div>
          </div>
          <div className="text-center p-6 border border-border/20 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent mb-2">95%+</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 border border-border/20 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary mb-2">&lt;50ms</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}