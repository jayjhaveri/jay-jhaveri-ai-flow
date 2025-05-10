
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isVisible ? "opacity-100 animate-fade-in" : "opacity-0")}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={cn(
            "glass border border-primary/10 rounded-xl overflow-hidden shadow-xl",
            isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">Tiram.AI</span>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-accent hover:bg-accent/80">Featured</Badge>
              </div>
            </div>
          </div>
          
          <div className={cn(
            isVisible ? "opacity-100 animate-fade-right" : "opacity-0"
          )} style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tiram.AI — From Concept to Creation
            </h3>
            
            <p className="text-foreground/80 mb-6">
              Tiram.AI generates complete Flutter applications from natural language prompts with self-healing capabilities.
              The platform streamlines the entire app development process from idea to deployment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Code className="w-5 h-5 text-primary mr-3 mt-1" />
                <p className="text-foreground/70">
                  Engineering mobile workflows for automated app generation
                </p>
              </div>
              
              <div className="flex items-start">
                <Cloud className="w-5 h-5 text-primary mr-3 mt-1" />
                <p className="text-foreground/70">
                  Seamless deployment to Play Store and App Store
                </p>
              </div>
              
              <div className="flex items-start">
                <Smartphone className="w-5 h-5 text-primary mr-3 mt-1" />
                <p className="text-foreground/70">
                  20+ production-ready applications shipped
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View Beta Apps <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
                <a href="#" className="flex items-center">
                  Learn More About Tiram.AI <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
