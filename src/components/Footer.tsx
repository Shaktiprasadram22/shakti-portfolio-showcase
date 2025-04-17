
import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronUp, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shakti<span className="text-portfolio-teal">.dev</span></h3>
            <p className="text-gray-300 mb-4">
              A passionate web developer specializing in creating responsive, user-friendly applications
              with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Shaktiprasadram22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 inline-block"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaktiram22/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 inline-block"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://leetcode.com/u/Shaktiprasadram22/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 inline-block"
              >
                <Code size={20} />
              </a>
              <a 
                href="mailto:shaktiram.lucifer@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 inline-block"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Education', 'Certificates', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    className="text-gray-300 hover:text-portfolio-teal transition-colors cursor-pointer story-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Bangalore, India</p>
              <p>Email: shaktiram.lucifer@gmail.com</p>
              <p>Phone: +91 8917583070</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Shakti Prasad Ram. All rights reserved.
          </p>
          <Link 
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="mt-4 md:mt-0 text-gray-400 hover:text-white cursor-pointer flex items-center hover-scale"
          >
            <span className="mr-2">Back to top</span>
            <ChevronUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
