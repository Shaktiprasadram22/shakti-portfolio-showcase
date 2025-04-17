
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const certificates = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "2024",
    image: "public/lovable-uploads/9824ed48-15fe-4564-8e55-c94feb5a95bd.png",
    verifyLink: "https://media.geeksforgeeks.org/certificates/802960bf28443f99668fa7aae804aa4.pdf"
  },
  {
    id: 2,
    title: "Programming in C++",
    issuer: "Coursera - Codio",
    date: "Nov 2023",
    image: "public/lovable-uploads/beadc239-bcd9-4b69-9634-a141a3ef23b3.png",
    verifyLink: "https://coursera.org/verify/J8PKCZ97MNX"
  },
  {
    id: 3,
    title: "Server-side JavaScript with Node.js",
    issuer: "NIIT - Coursera",
    date: "May 2024",
    image: "public/lovable-uploads/d78427b7-fab0-4b0d-a964-d56c0cfea9ab.png",
    verifyLink: "https://coursera.org/verify/MGLN4AGKX22"
  },
  {
    id: 4,
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University",
    date: "May 2024",
    image: "public/lovable-uploads/6d3d04a7-64d7-4bf7-a903-4230ac24a607.png",
    verifyLink: "coursera.org/verify/LG9M9F2SHP7U"
  },
  {
    id: 5,
    title: "Cloud Computing",
    issuer: "NPTEL - IIT Kharagpur",
    date: "Oct 2024",
    image: "public/lovable-uploads/3161371f-3823-4991-91c0-d346e9edd4df.png",
    verifyLink: "https://nptel.ac.in/verify"
  }
];

const Certificates = () => {
  const [currentCertificate, setCurrentCertificate] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="section-container bg-gray-50">
      <h2 className="section-title">Certifications & Education</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certificates.map((certificate) => (
          <Card key={certificate.id} className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setCurrentCertificate(certificate)}>
            <div className="h-48 overflow-hidden relative">
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <Button variant="ghost" className="text-white border border-white hover:bg-white/20">
                  View Certificate
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1">{certificate.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">{certificate.issuer}</span>
                <span className="text-gray-500 text-xs">{certificate.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Education Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Education</h3>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="border-l-4 border-portfolio-teal pl-4 py-2 mb-6">
            <h4 className="text-xl font-bold">Bachelor of Technology in Computer Science</h4>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">University Institute of Technology</p>
              <p className="text-gray-500 text-sm">2018 - 2022</p>
            </div>
            <p className="text-gray-700 mt-2">
              Graduated with distinction in Computer Science Engineering, focusing on algorithms, 
              data structures, and web development technologies.
            </p>
          </div>
          <div className="border-l-4 border-portfolio-sky-blue pl-4 py-2">
            <h4 className="text-xl font-bold">Higher Secondary Education</h4>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Central Board of Secondary Education</p>
              <p className="text-gray-500 text-sm">2016 - 2018</p>
            </div>
            <p className="text-gray-700 mt-2">
              Completed with major subjects in Physics, Chemistry, and Mathematics,
              achieving top grades in the science stream.
            </p>
          </div>
        </div>
      </div>
      
      {/* Certificate Modal */}
      {currentCertificate && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-xl">{currentCertificate.title}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setCurrentCertificate(null)}
              >
                <X size={20} />
              </Button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <img 
                src={currentCertificate.image} 
                alt={currentCertificate.title} 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-4 border-t flex justify-between items-center">
              <div>
                <p className="font-medium">{currentCertificate.issuer}</p>
                <p className="text-sm text-gray-500">Issued: {currentCertificate.date}</p>
              </div>
              <Button asChild>
                <a 
                  href={currentCertificate.verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Verify Certificate
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
