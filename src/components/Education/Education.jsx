import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 px-2 md:px-8 lg:px-16 font-sans bg-transparent min-h-[40vh] flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">EDUCATION</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00ff99] mx-auto mt-2 rounded-full animate-gradient-rotate"></div>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Cards with vertical wire */}
      <div className="w-full max-w-2xl relative flex flex-col gap-6 items-center justify-center">
        {/* Vertical wire */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8245ec] via-[#ff00cc] to-[#00ff99] rounded-full z-0"></div>
        {education.map((edu, idx) => (
          <div
            key={edu.id}
            className="w-full bg-[#18132a]/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-[#8245ec40] flex flex-col sm:flex-row items-center gap-4 hover:scale-105 transition-transform duration-300 relative z-10"
            style={{ marginLeft: '0', marginRight: '0' }}
          >
            {/* Wire dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-4 h-4 bg-gradient-to-br from-[#8245ec] to-[#ff00cc] rounded-full border-2 border-white z-10"></div>
            {/* School Logo/Image */}
            <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-[#8245ec40]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Details */}
            <div className="flex flex-col justify-center flex-1 text-left">
              <h3 className="text-base md:text-lg font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text animate-gradient-x mb-1">
                {edu.degree}
              </h3>
              <h4 className="text-xs md:text-sm text-gray-300 mb-1">
                {edu.school}
              </h4>
              <p className="text-xs text-gray-500 mb-1">{edu.date}</p>
              <p className="text-xs text-gray-400 font-bold mb-1">Grade: {edu.grade}</p>
              <p className="text-xs text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
