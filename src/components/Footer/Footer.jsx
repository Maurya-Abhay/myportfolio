import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-8 px-2 md:px-8 lg:px-16 bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-blur border-t border-[#8245ec40] flex flex-col items-center justify-center animate-gradient-x">
      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-4">
        {[
          { icon: <FaFacebook />, link: "https://www.facebook.com/people/Abhay-Maurya/pfbid05AzCwzcb7NifiZBVc1JrNhv444BcQyiai3KUPXxqAywq5VeLJjLPWJCEriHbqWL7l/?mibextid=ZbWKwL" },
          { icon: <FaTwitter />, link: "https://x.com/Pr1934163Abhay?s=09" },
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abhay-prasad-84b46a297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/abhay.samrat.04?igsh=MW52MzNiOWt6N2dtYw==" },
          { icon: <FaYoutube />, link: "/" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl rounded-full p-3 bg-white/10 backdrop-blur-md shadow-lg hover:text-[#8245ec] hover:bg-white/20 transition-transform transform hover:scale-110 border border-[#8245ec40]"
          >
            {item.icon}
          </a>
        ))}
      </div>
      {/* Copyright Text */}
      <p className="text-xs text-white text-center drop-shadow-md">
        © 2025 Abhay Prasad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
