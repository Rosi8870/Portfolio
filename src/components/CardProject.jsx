// src/components/CardProject.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ImageOff } from 'lucide-react'; // ImageOff added for placeholder

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  /*
  // Removed: handleDetails function is no longer needed
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  */

  return (
    <div className="group relative w-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg min-h-[150px] flex items-center justify-center">
            {/* Using fallback/placeholder logic from previous suggestion */}
            {Img ? (
                <img
                    src={Img}
                    alt={Title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-500">
                    <div className="text-center p-8">
                        <ImageOff className="w-8 h-8 mx-auto mb-2" />
                        <span className="text-sm">No Image Provided</span>
                    </div>
                </div>
            )}
            
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>
            
            {/* Only Keep Live Demo Link and align it to the left */}
            <div className="pt-4 flex items-center justify-start"> 
              {ProjectLink ? (
                <a
                href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50" // Added background styling for better visibility
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">Demo Not Available</span>
              )}
              
              {/* REMOVED: Details button block goes here */}

            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;