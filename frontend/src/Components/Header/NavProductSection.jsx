import React from 'react';
import { MapPin, Building, Users, Calendar } from 'lucide-react';

const ProjectCard = ({ 
  image, 
  title, 
  nature, 
  agency, 
  size, 
  duration,
  description,
  className = "",
  onClick 
}) => {
  return (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Project Details */}
        <div className="space-y-3">
          {/* Nature */}
          {nature && (
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-teal-600">Nature: </span>
                <span className="text-gray-700 text-sm leading-relaxed">{nature}</span>
              </div>
            </div>
          )}

          {/* Agency */}
          {agency && (
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-teal-600">Agency: </span>
                <span className="text-gray-700 text-sm">{agency}</span>
              </div>
            </div>
          )}

          {/* Size */}
          {size && (
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-teal-600">Size: </span>
                <span className="text-gray-700 text-sm">{size}</span>
              </div>
            </div>
          )}

          {/* Duration */}
          {duration && (
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-teal-600">Duration: </span>
                <span className="text-gray-700 text-sm">{duration}</span>
              </div>
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-gray-700 text-sm leading-relaxed">{description}</span>
              </div>
            </div>
          )}
        </div>

        {/* Hover indicator */}
        <div className="mt-4 text-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm font-medium">View Details →</span>
        </div>
      </div>

      {/* Card border effect on hover */}
      <div className="absolute inset-0 border-2 border-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

// Example usage component showing different ways to use the ProjectCard
const ProjectShow = () => {
  const sampleProjects = [ 
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Showcasing our commitment to sustainable development and innovative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {sampleProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Single card example */}
      <div className="max-w-md mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          
        </h2>
        <ProjectCard 
          image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&h=300&fit=crop"
          title="Green Crematorium"
          nature="Technical vetting of the system designed to improve air quality around the crematorium"
          agency="Jhansi Nagar Nigam"
          size="2 Acre"
          duration="8 months"
          description="Environmental impact assessment and sustainable design implementation"
          onClick={() => alert("Single card clicked!")}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectShow;