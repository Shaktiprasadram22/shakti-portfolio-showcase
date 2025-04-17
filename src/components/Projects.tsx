
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Photography Website",
    description: "A responsive photography portfolio website built with React and Tailwind CSS, featuring dynamic galleries and contact forms.",
    image: "public/lovable-uploads/89e94900-2753-4fa5-8c41-d71b9f03bdf6.png",
    category: "web",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    details: "Created a professional photography portfolio with responsive image galleries, pricing packages, and contact forms. Implemented user authentication for client access to private galleries."
  },
  {
    id: 2,
    title: "Trading Tracker",
    description: "A stock market tracking application built with React, Node.js, and financial APIs to monitor investments and analyze market trends.",
    image: "public/lovable-uploads/1b19caf6-6b20-4ea7-9cef-3156716b2bcd.png",
    category: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Financial APIs"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    details: "Developed a comprehensive trading tracker with real-time market data, personalized watchlists, and trade logging features. Integrated with financial news APIs to provide latest market insights."
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for organizing tasks and managing projects with collaborative features.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "mobile",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    details: "Built a full-featured task management application with features like task categorization, due dates, priority levels, and team collaboration tools."
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with product catalog, cart system, and payment integration.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "web",
    technologies: ["Next.js", "MongoDB", "Stripe", "Redux"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    details: "Created a responsive e-commerce platform with product search, filtering, user accounts, wishlist functionality, and secure payment processing."
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="section-container bg-white">
      <h2 className="section-title">My Projects</h2>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="web">Web Apps</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="project-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue/80 to-transparent flex items-end justify-between p-4">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-white hover:bg-white/20 rounded-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Info size={20} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-blue hover:text-portfolio-teal"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-blue hover:text-portfolio-teal"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Project Details Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="relative h-56 md:h-64">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue/80 to-transparent"></div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Project Details:</h4>
                <p className="text-gray-600">{selectedProject.details}</p>
              </div>
              <div className="flex gap-4 mt-6">
                <Button asChild className="bg-portfolio-blue hover:bg-portfolio-medium-blue">
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" /> View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
