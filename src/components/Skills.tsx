
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Handshake, 
  Lightbulb, 
  Brain, 
  Rocket,
  Code,
  Camera,
  Book,
  Coffee,
  Wrench
} from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 80 },
      { name: "C++", level: 85 },
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Next.js", level: 75 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Jest", level: 80 },
      { name: "Figma", level: 75 },
    ]
  },
];

const softSkills = [
  {
    name: "Team Player 🤝",
    icon: <Handshake className="h-6 w-6" />,
    description: "Collaborated effectively in group projects at university and hackathons. Led a team of 4 in developing a full-stack web application for the Web-Ka Thon competition.",
    examples: "Led a team of 4 developers during the Web-Ka Thon hackathon, where we placed in the top 10. Coordinated tasks, managed timelines, and encouraged team participation to ensure project success."
  },
  {
    name: "Problem Solver 💡",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Solved 350+ DSA questions on LeetCode and GeeksforGeeks. Implemented creative solutions to complex challenges in my Trading Tracker and Photography Website projects.",
    examples: "Optimized database queries in the Trading Tracker app that reduced load time by 40%. Solved a critical rendering issue in the Photography Website that was causing memory leaks."
  },
  {
    name: "Critical Thinker 🧠",
    icon: <Brain className="h-6 w-6" />,
    description: "Applied analytical thinking to optimize database queries and improve application performance. Conducted thorough code reviews to identify potential issues and suggest improvements.",
    examples: "Analyzed user flow in the Portfolio Website and redesigned navigation to improve user experience. Reviewed peers' code during hackathons to identify potential security vulnerabilities."
  },
  {
    name: "Quick Learner 🚀",
    icon: <Rocket className="h-6 w-6" />,
    description: "Rapidly adapted to new technologies like React, Node.js, and AWS. Self-taught Docker and cloud computing concepts to enhance project deployment workflows.",
    examples: "Mastered Tailwind CSS in just two weeks to redesign the Portfolio Website. Learned MongoDB and implemented it in the Trading Tracker app within a month, despite having no prior NoSQL experience."
  },
];

const thingsILove = [
  {
    name: "Exploring Code & AI 🤖",
    icon: <Code className="h-6 w-6 text-portfolio-blue" />,
    description: "Diving into new programming languages and experimenting with AI tools to build smarter applications."
  },
  {
    name: "Solving Complex Problems 🧠",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    description: "Tackling challenging algorithms and designing elegant solutions that optimize performance."
  },
  {
    name: "Building Things That Matter 🔧",
    icon: <Wrench className="h-6 w-6 text-gray-600" />,
    description: "Creating applications that solve real-world problems and enhance people's lives."
  },
  {
    name: "Photography 📸",
    icon: <Camera className="h-6 w-6 text-amber-500" />,
    description: "Capturing life's special moments and finding beauty in everyday scenes."
  },
  {
    name: "Reading 📚",
    icon: <Book className="h-6 w-6 text-emerald-600" />,
    description: "Expanding my knowledge through books about technology, science, and innovation."
  },
  {
    name: "Coffee & Brainstorming ☕",
    icon: <Coffee className="h-6 w-6 text-amber-800" />,
    description: "Enjoying a perfect brew while ideating on the next big project or solution."
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openSkillDetails = (skill) => {
    setSelectedSkill(skill);
    setIsDialogOpen(true);
  };

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-white to-gray-50 transition-all duration-500 ease-in-out relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,245,212,0.05)_0%,rgba(15,160,206,0.05)_25%,transparent_50%)]"></div>
        
        {/* Animated floating shapes */}
        {Array(15).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-portfolio-teal/5 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-animation-${i % 3} ${Math.random() * 20 + 15}s infinite alternate`,
              opacity: Math.random() * 0.7
            }}
          />
        ))}
      </div>

      <h2 className="section-title relative z-10">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12 relative z-10">
        {skills.map((category, index) => (
          <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-portfolio-blue">
              {category.category}
            </h3>
            
            <div className="space-y-6">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress bg-gradient-to-r from-portfolio-teal to-portfolio-neon" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Soft Skills */}
      <div className="mt-16 relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-portfolio-blue">Soft Skills</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-4 text-center hover:bg-portfolio-teal hover:text-white transition-colors duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openSkillDetails(skill)}
            >
              <div className="flex flex-col items-center gap-2">
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Things I Love */}
      <div className="mt-16 relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-portfolio-blue">Things I Love</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {thingsILove.map((thing, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-gray-50 rounded-full">
                  {thing.icon}
                </div>
                <h4 className="font-bold text-lg">{thing.name}</h4>
                <p className="text-gray-600 text-sm">{thing.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for soft skill details */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedSkill?.icon}
              <span>{selectedSkill?.name}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 text-gray-700">
            <p className="mb-4">{selectedSkill?.description}</p>
            <div className="mt-4 border-t pt-4">
              <h4 className="font-semibold text-portfolio-blue mb-2">Where I Used This Skill:</h4>
              <p>{selectedSkill?.examples}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float-animation-0 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-30px, -30px) rotate(5deg); }
        }
        @keyframes float-animation-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, -20px) rotate(-5deg); }
        }
        @keyframes float-animation-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-20px, 40px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
