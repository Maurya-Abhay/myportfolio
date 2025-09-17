import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-2 md:px-8 lg:px-16 font-sans mt-4 md:mt-8 lg:mt-12 flex justify-center items-center min-h-[45vh] bg-transparent"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 bg-[#18132a]/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#8245ec40] p-8 md:p-12">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] rounded-full shadow-2xl border-4 border-gradient-to-r from-[#ff00cc] via-[#00ff99] to-[#8245ec] bg-gradient-to-br from-[#8245ec] via-[#ff00cc] to-[#00ff99] flex items-center justify-center">
            <img
              src={profileImage}
              alt="Abhay Prasad"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_40px_rgba(130,69,236,0.7)] transition-transform duration-500 hover:scale-105"
              style={{ boxShadow: '0 0 40px #8245ec80, 0 0 80px #ff00cc40' }}
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8245ec] text-white text-xs rounded-full shadow-lg animate-bounce">Let's Connect!</span>
          </div>
        </div>
        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">
            Hi, I am
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text mb-4 leading-tight animate-gradient-x flex items-center">
            <span className="inline-flex items-center">
              <ReactTypingEffect
                text={["Abhay Prasad"]}
                speed={120}
                eraseSpeed={80}
                typingDelay={500}
                eraseDelay={1500}
                cursorRenderer={cursor => <span className="text-[#8245ec]">{cursor}</span>}
                displayTextRenderer={(text, i) => (
                  <span style={{ display: 'inline' }}>{text}</span>
                )}
              />
            </span>
          </h2>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer','Frontend Developer','Backend Developer','UI/UX Designer','Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-8 mt-6 leading-relaxed">
            I am a full-stack developer. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1G6pPYL-wMnGp6K3BJzn4SOmFdXYjacBH/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-6 rounded-full mt-4 text-base font-bold transition duration-300 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
