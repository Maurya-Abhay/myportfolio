import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-6 px-1 md:px-6 lg:px-12 font-sans bg-transparent flex justify-center items-center min-h-[40vh] relative"
    >
      {/* Projects Grid with title/description at top of grid */}
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">PROJECTS</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00ff99] mx-auto mt-2 rounded-full animate-gradient-rotate"></div>
          <p className="text-gray-400 mt-2 text-sm md:text-base font-medium max-w-xl">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="bg-[#18132a]/80 backdrop-blur-lg border border-[#8245ec40] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300 group min-h-[270px] sm:min-h-[220px]"
            >
              {/* Title always at top, then image, then details */}
              <div className="p-3">
                <h3 className="text-base sm:text-lg font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text mb-2 animate-gradient-x text-center">
                  {project.title}
                </h3>
              </div>
              <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8245ec80] via-[#ff00cc40] to-[#00ff9940] opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-gray-400 mb-2 pt-1 text-xs sm:text-sm line-clamp-3 text-center">
                  {project.description}
                </p>
                <div className="mb-1 flex flex-wrap gap-1 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gradient-to-r from-[#8245ec] to-[#ff00cc] text-xs font-semibold text-white rounded-full px-2 py-1 border border-[#8245ec40] shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="bg-[#18132a]/90 rounded-xl shadow-xl w-full max-w-lg sm:max-w-2xl overflow-hidden relative border border-[#8245ec40] backdrop-blur-lg">
            <div className="flex justify-end p-2 sm:p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl sm:text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center px-2 sm:px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl shadow-xl"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text mb-2 sm:mb-3 animate-gradient-x">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-sm">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-[#8245ec] to-[#ff00cc] text-xs font-semibold text-white rounded-full px-2 py-1 border border-[#8245ec40] shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-base font-semibold text-center transition-colors duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-base font-semibold text-center transition-colors duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
