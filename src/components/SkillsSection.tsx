
import { useEffect, useState, useRef } from "react";
import { Smartphone, Database, Code, Brain, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
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

  const skills = [
    {
      icon: Smartphone,
      name: "Flutter",
      level: 90,
      color: "bg-blue-500"
    },
    {
      icon: Database,
      name: "Firebase",
      level: 85,
      color: "bg-yellow-500"
    },
    {
      icon: Code,
      name: "TypeScript",
      level: 80,
      color: "bg-blue-600"
    },
    {
      icon: Layers,
      name: "Dart",
      level: 85,
      color: "bg-cyan-500"
    },
    {
      icon: Brain,
      name: "AI Integration",
      level: 95,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isVisible ? "opacity-100 animate-fade-in" : "opacity-0")}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Specialized expertise in these key technologies that power my projects and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={cn(
                "glass p-6 border-primary/10 hover:border-primary/30 transition-all duration-300",
                isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${skill.color}/20 mr-4`}>
                  <skill.icon className={`h-6 w-6 ${skill.color} text-foreground`} />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-secondary/50 rounded-full h-2.5">
                <div 
                  className={`${skill.color} h-2.5 rounded-full`}
                  style={{ 
                    width: `${skill.level}%`,
                    transition: "width 1s ease-in-out",
                    transitionDelay: isVisible ? `${0.5 + index * 0.1}s` : "0s"
                  }}
                ></div>
              </div>
              
              <div className="mt-2 text-right text-sm text-foreground/70">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
