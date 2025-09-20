import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Code District",
    location: "Lahore",
    duration: "July 2024 - Present",
    type: "Full-time",
    description: [
      "Developed and maintained full-stack applications using Next.js, NestJS, Python, and Flask",
      "Built AI agents leveraging OpenAI, LangChain, and vector stores",
      "Optimized backend services for scalability and efficiency"
    ],
    skills: ["Next.js", "NestJS", "Python", "Flask", "OpenAI", "LangChain", "Vector Stores"]
  },
  {
    title: "Coding Instructor",
    company: "WeePro-Coders",
    location: "Remote",
    duration: "Jun 2023 - July 2024",
    type: "Part-time",
    description: [
      "Taught Scratch programming to 8-12-year-olds, fostering creativity and logical thinking",
      "Led interactive coding projects, encouraging teamwork and problem-solving",
      "Provided constructive feedback to help students enhance their coding skills"
    ],
    skills: ["Scratch Programming", "Teaching", "Project Management", "Mentoring"]
  },
  {
    title: "Web Development Intern",
    company: "FastDev",
    location: "Lahore",
    duration: "Jul 2023 - Sep 2023",
    type: "Internship",
    description: [
      "Built web applications using the MERN stack",
      "Developed responsive UIs with React.js and integrated APIs with Node.js/Express.js",
      "Managed databases with MongoDB for optimized performance"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    title: "Technical Intern",
    company: "WeTeck",
    location: "Faisalabad",
    duration: "Jul 2022 - Sep 2022",
    type: "Internship",
    description: [
      "Collaborated with the team to optimize workflows and solve technical challenges",
      "Assisted in projects by leveraging strong analytical and problem-solving skills",
      "Received training in Web Development, covering HTML, CSS, and Next.js"
    ],
    skills: ["HTML", "CSS", "Next.js", "Problem Solving", "Team Collaboration"]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            My journey from intern to Associate Software Engineer
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow hover:glow-shadow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}