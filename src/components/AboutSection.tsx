
import { useEffect, useState, useRef } from "react";
import { Brain, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AboutSection = () => {
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

  const features = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Specializing in merging AI capabilities into software systems, enhancing functionality and user experience.",
      delay: "0.3s",
    },
    {
      icon: Code,
      title: "Mobile Development",
      description: "Expert in Flutter, Firebase and creating cross-platform applications that deliver native performance.",
      delay: "0.5s",
    },
    {
      icon: Rocket,
      title: "Automated Workflows",
      description: "Building systems that automate app development lifecycle from concept to deployment and beyond.",
      delay: "0.7s",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isVisible ? "opacity-100 animate-fade-in" : "opacity-0")}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            As a Senior Software Engineer specializing in AI integration, I focus on developing intelligent systems 
            that revolutionize mobile workflows and application development. My passion lies in empowering businesses 
            with AI-driven mobile app solutions — from concept to creation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className={cn(
              "glass border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: feature.delay }}>
              <CardContent className="p-6">
                <div className="rounded-full p-3 bg-primary/10 w-fit mb-5">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 glass p-6 border border-primary/10",
          isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: "0.9s" }}>
          <p className="text-center text-lg italic text-foreground/80">
            "Empowering businesses with AI-driven mobile app solutions — from concept to creation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
