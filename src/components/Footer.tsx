
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gradient">Jay Jhaveri</span>
          </div>
          
          <div className="text-sm text-foreground/60 flex items-center">
            <p>&copy; {currentYear} Jay Jhaveri. All rights reserved.</p>
            <span className="mx-2">•</span>
            <p className="flex items-center">
              Made with <Heart size={14} className="text-red-500 mx-1" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
