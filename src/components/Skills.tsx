
import React from 'react';

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

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12">
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
      <div className="mt-16">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-portfolio-blue">Soft Skills</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Problem Solving",
            "Communication",
            "Teamwork",
            "Time Management",
            "Adaptability",
            "Critical Thinking"
          ].map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-4 text-center hover:bg-portfolio-teal hover:text-white transition-colors duration-300"
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
