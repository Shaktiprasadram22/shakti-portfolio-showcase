
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Code, Star, Award, Target } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-10 h-10 text-amber-500" />,
    title: "Top 10 in Web-ka Thon",
    description: "Secured a position in the top 10 developers in the national-level web development hackathon organized by Tech Innovators.",
  },
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    title: "350+ Coding Problems Solved",
    description: "Successfully solved more than 350 algorithmic problems across platforms like LeetCode, HackerRank, and GeeksforGeeks.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "4-Star Coder Rating",
    description: "Achieved and maintained a 4-star rating on competitive coding platforms, placing in the top 15% of all developers.",
  },
  {
    icon: <Award className="w-10 h-10 text-green-500" />,
    title: "Best UI/UX Design Award",
    description: "Received recognition for exceptional user interface design in the University Tech Showcase competition.",
  },
  {
    icon: <Target className="w-10 h-10 text-red-500" />,
    title: "Open Source Contributor",
    description: "Active contributor to open source projects with over 50 accepted pull requests to various repositories.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container bg-white">
      <h2 className="section-title">Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {achievements.map((achievement, index) => (
          <Card 
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-portfolio-teal"
          >
            <CardContent className="pt-6 pb-4 px-5">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="mb-4 p-3 rounded-full bg-gray-100">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Testimonials Section (Optional) */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-8">What People Say</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-50 border-none">
            <CardContent className="p-6">
              <p className="italic text-gray-700 mb-4">
                "Shakti has an exceptional ability to translate complex requirements into elegant, functional code.
                His attention to detail and problem-solving skills make him an invaluable team member."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-medium-blue flex items-center justify-center text-white font-bold">
                  AR
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Amit Rao</h4>
                  <p className="text-sm text-gray-500">Project Manager, Tech Innovations</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-none">
            <CardContent className="p-6">
              <p className="italic text-gray-700 mb-4">
                "Working with Shakti was a pleasure. He consistently delivered high-quality code ahead of schedule
                and was always willing to help team members overcome technical challenges."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-medium-blue flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Priya Singh</h4>
                  <p className="text-sm text-gray-500">Senior Developer, WebSolutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
