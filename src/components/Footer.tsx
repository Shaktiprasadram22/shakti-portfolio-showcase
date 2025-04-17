
import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

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
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certificates', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    className="text-gray-300 hover:text-portfolio-teal transition-colors cursor-pointer"
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
              <p>Email: contact@shakti.dev</p>
              <p>Phone: +91 12345 67890</p>
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
            className="mt-4 md:mt-0 text-gray-400 hover:text-white cursor-pointer flex items-center"
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
