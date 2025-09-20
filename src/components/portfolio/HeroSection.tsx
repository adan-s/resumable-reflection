import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export function HeroSection() {
  return (
    <section className="min-h-screen section-gradient flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <img
              src={profilePhoto}
              alt="Adan Salman - Software Engineer"
              className="w-full h-full object-cover rounded-full card-shadow glow-shadow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Adan Salman
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
            Associate Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer specializing in AI-driven solutions, 
            modern web technologies, and scalable applications. Building the future 
            with Next.js, Python, and cutting-edge AI tools.
          </p>
        </div>

        {/* <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="hero-gradient text-primary-foreground">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View Projects
          </Button>
        </div> */}

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <a href="mailto:adansalman0987@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            adansalman0987@gmail.com
          </a>
          
          <a href="tel:03007675900" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            03007675900
          </a>
          
          <a href="https://github.com/adan-s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          
          <a href="https://linkedin.com/in/adan-salman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}