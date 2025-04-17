
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Camera, Coffee, Book, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Personal Image */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Shakti Prasad Ram" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue/60 to-transparent"></div>
          </div>
        </div>
        
        {/* About Text */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-portfolio-blue">
            Web Developer & Problem Solver
          </h3>
          
          <p className="text-gray-700 mb-4">
            I'm Shakti Prasad Ram, a passionate web developer with a strong foundation in full-stack development.
            My journey in tech began with a curiosity about how websites work, which evolved into a dedicated
            career path in web development.
          </p>
          
          <p className="text-gray-700 mb-6">
            With experience in building responsive web applications using modern technologies like React,
            Node.js, and various frameworks, I enjoy turning complex problems into simple, beautiful, and
            intuitive designs. When I'm not coding, you'll find me exploring photography, solving algorithmic
            challenges, or learning about new technologies.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <Card className="bg-portfolio-pale-blue">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="text-portfolio-blue text-2xl font-bold">350+</div>
                <div className="text-sm text-gray-600">Problems Solved</div>
              </CardContent>
            </Card>
            
            <Card className="bg-portfolio-pale-blue">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="text-portfolio-blue text-2xl font-bold">4-Star</div>
                <div className="text-sm text-gray-600">Coder Rating</div>
              </CardContent>
            </Card>
            
            <Card className="bg-portfolio-pale-blue">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="text-portfolio-blue text-2xl font-bold">Top 10</div>
                <div className="text-sm text-gray-600">Web-ka Thon</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Fun Facts Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-portfolio-blue">Things I Love</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: <Code size={24} />, label: "Coding" },
            { icon: <Camera size={24} />, label: "Photography" },
            { icon: <Coffee size={24} />, label: "Coffee" },
            { icon: <Book size={24} />, label: "Learning" },
            { icon: <Award size={24} />, label: "Challenges" },
            { icon: <Users size={24} />, label: "Teamwork" },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-4 py-6">
                <div className="text-portfolio-teal mb-2">{item.icon}</div>
                <div className="text-sm font-medium">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
