
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, School } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University",
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
    <section id="education" className="section-container bg-gray-50">
      <h2 className="section-title">Education</h2>
      
      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        {educationData.map((item, index) => (
          <Card 
            key={index}
            className="overflow-hidden border-l-4 border-portfolio-teal hover:shadow-lg transition-all duration-300 animate-fade-in"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-6 bg-gray-100 p-4 rounded-full">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-1">{item.institution}</h3>
                  <p className="text-gray-700 font-medium mb-2">{item.degree}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-portfolio-pale-blue text-portfolio-blue rounded-full">
                    <span className="font-medium">CGPA: {item.cgpa}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
