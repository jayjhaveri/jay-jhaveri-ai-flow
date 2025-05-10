
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: "0.1s" }}>
              <span className="text-primary inline-block mb-2">Hi, I'm</span>
            </div>
            
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: "0.3s" }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Jay Jhaveri
              </h1>
            </div>
            
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
                Senior Software Engineer | <span className="text-gradient">AI Integration Specialist</span>
              </h2>
            </div>
            
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: "0.7s" }}>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
                I engineer intelligent systems that automate workflows, power user experiences, and leverage AI innovation.
                <span className="block mt-2 text-primary/90">Transforming ideas into AI-powered applications.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                <a href="#projects" className="flex items-center">
                  View TiramAI Project <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View Beta Apps on Play Store <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative glass border-2 border-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold opacity-50 text-gradient">JJ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
