import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import { Play, Github, ExternalLink } from "lucide-react";
import heroImage from "@/assets/airnav-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
      </div>
      
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 animate-fade-in">
          <TechBadge variant="primary" className="mb-4">
            Open Source Project
          </TechBadge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AirNav</span>
            <br />
            <span className="text-foreground">Gesture Control</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the future of touchless interaction. Control your PC and TV with natural hand gestures using AI-powered recognition technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Button size="lg" className="tech-glow-blue hover:scale-105 transition-transform">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
            <Github className="mr-2 h-5 w-5" />
            View Source
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <TechBadge variant="accent">AI-Powered</TechBadge>
          <TechBadge variant="primary">3-10 Feet Range</TechBadge>
          <TechBadge variant="muted">Real-time Processing</TechBadge>
          <TechBadge variant="accent">Cross-Platform</TechBadge>
        </div>
        
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-muted-foreground mb-2">Created by</p>
          <p className="text-lg font-semibold text-foreground">Neeraj Kumar Ray</p>
          <a 
            href="http://airnav.rf.gd/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors mt-2"
          >
            airnav.rf.gd <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-40 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}