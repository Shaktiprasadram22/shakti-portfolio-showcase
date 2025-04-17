
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, School } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University, Phagwara, Punjab",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Jul 2022 – Present",
    cgpa: "7.59",
    icon: <GraduationCap className="w-8 h-8 text-portfolio-teal" />
  },
  {
    institution: "Odisha Adarsh Vidyalaya, Salapada, Odisha",
    degree: "12th in Science",
    duration: "May 2020 – June 2022",
    cgpa: "6.9",
    icon: <School className="w-8 h-8 text-portfolio-blue" />
  },
  {
    institution: "Shree Gurukul Public School, Ghatagaon, Odisha",
    degree: "High School",
    duration: "Apr 2019 – Mar 2020",
    cgpa: "8.0",
    icon: <School className="w-8 h-8 text-portfolio-blue" />
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container bg-gradient-to-b from-gray-50 to-white transition-all duration-500 ease-in-out relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-portfolio-teal"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                opacity: Math.random() * 0.3,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateY(${Math.random() * 100}px)`
              }}
            />
          ))}
        </div>
      </div>

      <h2 className="section-title">Education</h2>
      
      <div className="max-w-4xl mx-auto mt-12 space-y-8 relative z-10">
        {educationData.map((item, index) => (
          <Card 
            key={index}
            className="overflow-hidden border-l-4 border-portfolio-teal hover:shadow-lg transition-all duration-300 animate-fade-in hover:translate-x-2"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-6 bg-gray-100 p-4 rounded-full hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-1">{item.institution}</h3>
                  <p className="text-gray-700 font-medium mb-2">{item.degree}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-portfolio-pale-blue text-portfolio-blue rounded-full animate-pulse">
                    <span className="font-medium">CGPA: {item.cgpa}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add keyframe animation at the component level */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Education;
