
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="lg:order-2">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="border-gray-300 focus:border-portfolio-teal focus:ring-portfolio-teal transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-portfolio-teal focus:ring-portfolio-teal transition-all" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can I help you?"
                    className="border-gray-300 focus:border-portfolio-teal focus:ring-portfolio-teal transition-all" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..."
                    rows={6}
                    className="border-gray-300 focus:border-portfolio-teal focus:ring-portfolio-teal resize-none transition-all" 
                  />
                </div>
                
                <Button className="w-full bg-portfolio-teal hover:bg-portfolio-teal/80 transition-all">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:order-1">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center group hover-scale">
                <div className="mr-4 bg-portfolio-pale-blue p-3 rounded-full group-hover:bg-portfolio-teal group-hover:text-white transition-all">
                  <Mail className="text-portfolio-blue group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:shaktiram.lucifer@gmail.com" 
                    className="text-gray-600 hover:text-portfolio-teal transition-colors"
                  >
                    shaktiram.lucifer@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group hover-scale">
                <div className="mr-4 bg-portfolio-pale-blue p-3 rounded-full group-hover:bg-portfolio-teal group-hover:text-white transition-all">
                  <Phone className="text-portfolio-blue group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+918917583070" 
                    className="text-gray-600 hover:text-portfolio-teal transition-colors"
                  >
                    +91 8917583070
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group hover-scale">
                <div className="mr-4 bg-portfolio-pale-blue p-3 rounded-full group-hover:bg-portfolio-teal group-hover:text-white transition-all">
                  <MapPin className="text-portfolio-blue group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Shaktiprasadram22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/Shaktiram22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://leetcode.com/Shaktiprasadram22/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-all hover:scale-110"
                >
                  <Code size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
