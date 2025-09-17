// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-12 px-2 md:px-8 lg:px-16 font-sans bg-transparent flex justify-center items-center min-h-[40vh]"
  >
    {/* Skills Grid with title/description at top of grid */}
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">SKILLS</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00ff99] mx-auto mt-2 rounded-full animate-gradient-rotate"></div>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-medium max-w-xl">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>
      <div className="flex flex-wrap gap-4 py-6 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#18132a]/80 backdrop-blur-lg px-4 sm:px-6 py-6 sm:py-4 mb-8 w-full sm:w-[45%] rounded-2xl border border-[#8245ec40] shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text mb-3 text-center animate-gradient-x">
              {category.title}
            </h3>
            <Tilt
              key={category.title}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={900}
              scale={1.04}
              transitionSpeed={900}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-gradient-to-br from-[#8245ec20] via-[#ff00cc20] to-[#00ff9920] border border-[#8245ec40] rounded-xl py-2 px-2 sm:py-2 sm:px-2 text-center shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 sm:w-9 sm:h-9 mb-1 drop-shadow-[0_2px_8px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-125"
                    />
                    <span className="text-xs sm:text-sm text-gray-200 font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
