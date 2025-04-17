import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Camera,
  Coffee,
  Book,
  Brain,
  Wrench,
  Lightbulb,
} from "lucide-react";
import UpcomingProjects from "./UpcomingProjects"; // Import the Upcoming Projects component

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Personal Image */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal shadow-xl hover-scale cursor-pointer">
            <img
              src="/lovable-uploads/DP.jpg" // Use the correct path to the image stored locally
              alt="Shakti Prasad Ram"
              className="w-full h-full object-cover"
              onClick={() => handleImageClick("/lovable-uploads/DP.jpg")} // Trigger to open image modal
            />
            <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue/60 to-transparent"></div>
          </div>
        </div>

        {/* About Text */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-portfolio-blue animate-fade-in">
            Web Developer & Problem Solver
          </h3>

          <p
            className="text-gray-700 mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            I'm Shakti Prasad Ram, a passionate web developer with a strong
            foundation in full-stack development. My journey in tech began with
            a curiosity about how websites work, which evolved into a dedicated
            career path in web development.
          </p>

          <p
            className="text-gray-700 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            With experience in building responsive web applications using modern
            technologies like React, Node.js, and various frameworks, I enjoy
            turning complex problems into simple, beautiful, and intuitive
            designs. When I'm not coding, you'll find me exploring photography,
            solving algorithmic challenges, or learning about new technologies.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <Card className="bg-portfolio-pale-blue hover-scale">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="text-portfolio-blue text-2xl font-bold">
                  350+
                </div>
                <div className="text-sm text-gray-600">Problems Solved</div>
              </CardContent>
            </Card>

            <Card className="bg-portfolio-pale-blue hover-scale">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="text-portfolio-blue text-2xl font-bold">
                  4-Star
                </div>
                <div className="text-sm text-gray-600">Coder Rating</div>
              </CardContent>
            </Card>

            <Card className="bg-portfolio-pale-blue hover-scale">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="text-portfolio-blue text-2xl font-bold">
                  Top 10
                </div>
                <div className="text-sm text-gray-600">Web-ka Thon</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Techy and Non-tech Things */}
      <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h3 className="text-2xl font-bold text-center mb-8 text-portfolio-blue"></h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech Things */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code className="text-portfolio-teal" />
              Techy Passions
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-portfolio-pale-blue p-2 rounded-full animate-pulse">
                  <Brain className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h5 className="font-medium">
                    Exploring the world of code and AI 🤖
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I love diving into new coding challenges and discovering the
                    latest in AI technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-portfolio-pale-blue p-2 rounded-full animate-pulse">
                  <Lightbulb className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h5 className="font-medium">Solving complex problems 🧠</h5>
                  <p className="text-gray-600 text-sm">
                    There's nothing more satisfying than solving a difficult
                    technical problem after hours of deep thinking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-portfolio-pale-blue p-2 rounded-full animate-pulse">
                  <Wrench className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h5 className="font-medium">
                    Building things that matter 🔧
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I'm passionate about creating applications that make a real
                    difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Non-tech Things */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Camera className="text-portfolio-teal" />
              Beyond Coding
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-portfolio-pale-blue p-2 rounded-full animate-pulse">
                  <Camera className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h5 className="font-medium">
                    Photography to capture life's moments 📸
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I enjoy capturing beautiful moments through photography,
                    finding the perfect angle to tell a story.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-portfolio-pale-blue p-2 rounded-full animate-pulse">
                  <Book className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h5 className="font-medium">
                    Reading about new ideas and technologies 📚
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I'm always expanding my knowledge through books and articles
                    about tech trends and innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-portfolio-pale-blue p-2 rounded-full animate-pulse">
                  <Coffee className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h5 className="font-medium">
                    Enjoying a good cup of coffee while brainstorming ideas ☕
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Some of my best ideas come while relaxing with a cup of
                    coffee and letting my mind wander.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Projects Section */}
      {/* Add the Upcoming Projects section here */}
    </section>
  );
};

export default About;
//aita
