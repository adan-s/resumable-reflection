import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Claim Tool Kit",
    description: "Advanced AI-powered claim processing system with NLP capabilities, vector databases, and intelligent automation using LangChain and OpenAI.",
    technologies: ["Next.js", "NLP", "OpenAI", "LLMs", "Vector DB", "NoSQL", "Flask", "LangChain"],
    category: "AI/ML"
  },
  {
    title: "Humanity Neurotech",
    description: "Full-stack healthcare technology platform built with modern frameworks for neurological health monitoring and analysis.",
    technologies: ["Next.js", "NestJS", "TypeScript", "API Integration"],
    category: "Healthcare"
  },
  {
    title: "AI Driven Blog Platform",
    description: "Intelligent content management system that leverages AI for automated content generation, SEO optimization, and user engagement.",
    technologies: ["OpenAI", "Python", "Next.js", "Content Management"],
    category: "AI/Content"
  },
  {
    title: "Maximum Impact",
    description: "Enterprise-level application designed for maximum performance and scalability using cutting-edge full-stack technologies.",
    technologies: ["Next.js", "NestJS", "Database Design", "Performance Optimization"],
    category: "Enterprise"
  },
  {
    title: "Custom GPT Solutions",
    description: "Suite of specialized AI agents for social media platforms (Instagram, LinkedIn, etc.) with custom training and integration capabilities.",
    technologies: ["Python", "Next.js", "OpenAI", "AI Agents", "Social Media APIs"],
    category: "AI/Social"
  },
  {
    title: "Weather Intelligence GPT",
    description: "Intelligent weather prediction and analysis system with real-time data processing and AI-powered insights.",
    technologies: ["Flask", "OpenAI", "Weather APIs", "Data Analysis"],
    category: "AI/Data"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 section-gradient">
      <div className="container max-w-6xl mx-auto">
        <header className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Showcasing my expertise in AI, full-stack development, and modern web technologies
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full card-shadow hover:glow-shadow transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0" aria-label="View on GitHub">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0" aria-label="View live demo">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}