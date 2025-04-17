import React, { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingProjects = [
  {
    title: "Online Ticket Booking App",
    description:
      "A dynamic online ticket booking application that allows users to browse, select, and book tickets for various events. The app supports features like dynamic seat booking, coupon application for discounts, real-time seat availability, and secure payment processing.",
    image: "/lovable-uploads/Online.webp",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    details:
      "This app will enable users to view seating arrangements for events, select their desired seats, and make secure payments through integrated payment gateways. Users can also apply discount coupons during checkout for an enhanced booking experience. It ensures real-time seat availability, so users can be confident that they’re booking the seats that are currently available. Additionally, the app will include a user-friendly interface for event organizers to manage bookings, view seating charts, and issue tickets.",
  },
  {
    title: "Lifter",
    description:
      "Lifter is a ride-sharing app designed to connect people in need of a lift with those who have spare seats in their cars. The app promotes community-driven carpooling by offering secure matching, user ratings, and shared routes, ensuring safe and cost-effective travel options.",
    image: "/lovable-uploads/Lifter.webp",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    details:
      "The Lifter app will let users offer or request a lift, allowing them to share costs, reduce their carbon footprint, and meet new people. With GPS integration, users can view available lifts nearby, and the app will ensure safety through user verification, ratings, and real-time tracking. The app will include features like route optimization, secure payments, and trip history for both drivers and passengers. A social aspect will allow users to build trust by rating each other after every ride.",
  },
  {
    title: "LeetVisualizer",
    description:
      "LeetVisualizer will provide an interactive platform for visualizing complex algorithms and data structures used in coding interviews and competitive programming. Users can interact with the visualizations to better understand how algorithms like sorting, searching, and graph traversal work step by step.",
    image: "/lovable-uploads/LeetVisualizer.webp",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    details:
      "LeetVisualizer aims to make learning algorithms and data structures more accessible by providing dynamic visualizations. It will cover common problems in competitive programming, including sorting, searching, graph traversal, and dynamic programming. Users can step through the algorithm at their own pace, watching how data structures like arrays, stacks, queues, and trees evolve in real-time. This tool will be useful for coding interview preparation and for anyone looking to understand the inner workings of algorithms better.",
  },
  {
    title: "GamesMania",
    description:
      "GamesMania will be an all-in-one gaming hub offering a variety of casual multiplayer games like Bingo, Flames, and more. Players can challenge their friends or compete against random users, track their scores, and collect achievements across different games.",
    image: "/lovable-uploads/GamesMania.webp",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    details:
      "GamesMania will be a go-to platform for casual online gaming, with a diverse selection of games ranging from Bingo to word games like Flames. Players can compete in real-time, track their scores, and challenge others for a place on the leaderboard. The app will support multiplayer modes, allowing users to play with friends or match with other players online. Users can unlock achievements, customize their profiles, and participate in special events to earn rewards. Whether for short breaks or long gaming sessions, GamesMania will offer an engaging experience for all.",
  },
];

const UpcomingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="upcoming-projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-portfolio-teal mb-8">
          Upcoming Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-portfolio-teal mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in">
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
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProject.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-sm rounded-full"
                    >
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
                <Button
                  asChild
                  className="bg-portfolio-blue hover:bg-portfolio-medium-blue"
                >
                  <a
                    href={selectedProject.liveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={selectedProject.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

export default UpcomingProjects;
