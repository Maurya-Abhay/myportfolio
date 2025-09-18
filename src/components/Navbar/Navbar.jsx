import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/profile2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificate" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center items-center px-1 py-0">
      <div className={`w-full max-w-5xl flex items-center justify-between ${theme === "dark" ? "bg-[#18132a]/80" : "bg-white/80"} backdrop-blur-lg rounded-2xl shadow-2xl border border-gradient-to-r from-[#8245ec] via-pink-500 to-[#18132a] px-2 py-0 mt-2 mx-auto transition-all duration-300 ${isScrolled ? 'shadow-purple-500/40' : ''}`}>
        {/* Profile Image & Logo */}
        <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#ff00cc] via-[#00ff99] to-[#8245ec] animate-gradient-rotate"></span>
              <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border-2 border-transparent shadow-xl z-10" />
            </div>
            <div className="text-3xl font-extrabold tracking-wide flex items-center gap-2">
              <span className="text-[#8245ec] drop-shadow-lg animate-bounce">&lt;</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-[#ff00cc] animate-bounce">Abhay</span>
              <span className="text-[#8245ec] drop-shadow-lg animate-bounce">&gt;</span>
            </div>
        </div>

        {/* Desktop Menu */}
  <ul className={`hidden md:flex gap-3 font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer px-3 py-1 rounded-lg hover:bg-[#8245ec22] hover:text-[#8245ec] transition-all duration-200 ${
                activeSection === item.id ? "bg-[#8245ec22] text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-2 px-2 py-0.5 rounded-md font-bold border border-[#8245ec40] shadow-sm transition-all duration-300 text-sm ${theme === "dark" ? "bg-[#18132a] text-white hover:bg-[#8245ec]" : "bg-white text-[#8245ec] hover:bg-[#8245ec] hover:text-white"}`}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* Social Icons */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://github.com/Maurya-Abhay"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === "dark" ? "text-gray-300 hover:text-[#8245ec]" : "text-gray-700 hover:text-[#8245ec]"}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-prasad-84b46a297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === "dark" ? "text-gray-300 hover:text-[#8245ec]" : "text-gray-700 hover:text-[#8245ec]"}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className={`absolute top-16 right-2 w-auto min-w-[140px] ${theme === "dark" ? "bg-[#18132a]/95" : "bg-white/95"} backdrop-blur-lg z-50 rounded-xl shadow-xl border border-[#8245ec40]`}>
          <ul className={`flex flex-col items-start space-y-1 py-2 px-2 font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer px-2 py-1 rounded-lg hover:bg-[#8245ec22] hover:text-[#8245ec] transition-all duration-200 ${
                  activeSection === item.id ? "bg-[#8245ec22] text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)} className="text-left w-full pl-0">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
