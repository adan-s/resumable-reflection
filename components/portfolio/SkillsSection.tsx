import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Brain, 
  Server, 
  Smartphone, 
  Globe,
  Cpu,
  Award
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
    color: "text-blue-500"
  },
  {
    title: "Backend Development", 
    icon: Server,
    skills: ["NestJS", "Node.js", "Express.js", "Flask", "Python", "RESTful APIs", "Microservices"],
    color: "text-green-500"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["OpenAI", "LangChain", "Vector Databases", "NLP", "AI Agents", "GPT Integration", "LLMs"],
    color: "text-primary"
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MongoDB", "NoSQL", "Vector DB", "Database Design", "Performance Optimization", "Scalability"],
    color: "text-purple-500"
  },
  {
    title: "Development Tools",
    icon: Code2,
    skills: ["Git", "VS Code", "Docker", "npm/yarn", "Webpack", "Vite", "Testing"],
    color: "text-orange-500"
  },
  {
    title: "Soft Skills",
    icon: Award,
    skills: ["Leadership", "Teaching", "Team Collaboration", "Problem Solving", "Project Management", "Mentoring"],
    color: "text-teal-500"
  }
];

const achievements = [
  { title: "Dean's List", count: "4x", description: "Consistent academic excellence" },
  { title: "Silver Medal", count: "1x", description: "2nd position in university competition" },
  { title: "Leadership Role", count: "2x", description: "Vice Chair & Event Head positions" },
  { title: "CGPA", count: "3.58", description: "Computer Science degree" }
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <header className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Technical proficiencies and achievements across various domains
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-shadow hover:glow-shadow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8">Academic & Professional Achievements</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center card-shadow hover:glow-shadow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.count}
                  </div>
                  <div className="font-medium mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 animate-slide-up">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Cpu className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">Bachelor's in Computer Science</h4>
                  <p className="text-muted-foreground">Fast-Nuces, Chiniot-Faisalabad</p>
                  <p className="text-sm text-muted-foreground mt-1">Sep 2020 - Jun 2024</p>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">3.58</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}