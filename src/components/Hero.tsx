import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-portfolio-blue transition-all duration-700 ease-in-out"
    >
      {/* Background gradient with smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-blue via-portfolio-light-blue to-portfolio-medium-blue opacity-80 transition-all duration-1000"></div>

      {/* Animated background pattern with subtle animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="animate-fade-in text-white text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-portfolio-teal">Shakti Prasad Ram</span>
        </h1>
        <div className="animate-fade-in animation-delay-300 text-xl md:text-2xl text-portfolio-pale-blue mb-8">
          <p>
            A passionate web developer with a love for problem-solving and clean
            design.
          </p>
          <p>
            Specialized in JavaScript, React, Node.js, and modern web
            technologies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in animation-delay-500 flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-portfolio-teal hover:bg-portfolio-teal/80 text-white px-8 transform transition-transform hover:scale-105"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full h-full"
            >
              View My Work
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-portfolio-teal hover:bg-portfolio-teal/80 text-white px-8 transform transition-transform hover:scale-105"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full h-full"
            >
              Get In Touch
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in animation-delay-700 flex justify-center gap-6 mb-16">
          <a
            href="https://github.com/Shaktiprasadram22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-portfolio-teal transition-colors transform hover:scale-125"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaktiram22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-portfolio-teal transition-colors transform hover:scale-125"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:shaktiram.lucifer@gmail.com"
            className="text-white hover:text-portfolio-teal transition-colors transform hover:scale-125"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer hover:text-portfolio-teal transition-colors"
        >
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
