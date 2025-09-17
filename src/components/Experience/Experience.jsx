import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 px-2 md:px-8 lg:px-16 font-sans bg-transparent min-h-[40vh] flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">EXPERIENCE</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00ff99] mx-auto mt-2 rounded-full animate-gradient-rotate"></div>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>
      {/* Experience Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#18132a]/80 via-[#8245ec20] to-[#ff00cc20] backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-[#8245ec60] flex flex-col items-center hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 min-w-[340px]"
          >
            <div className="w-48 h-48 bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#8245ec40] mb-4 flex items-center justify-center">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xs md:text-sm font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text animate-gradient-x mb-1 text-center">
              {exp.role}
            </h3>
            <p className="text-xs text-gray-300 mb-1 text-center">{exp.company}</p>
            <p className="text-xs text-gray-500 text-center mb-2">{exp.date}</p>
            <p className="text-xs text-gray-400 text-center mb-2">{exp.desc}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {exp.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-[#8245ec] to-[#ff00cc] text-xs font-semibold text-white rounded-full px-2 py-1 border border-[#8245ec40] shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
