import React, { useState, createContext } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar/Navbar";
import Samrat from "./components/Samrat";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // PWA install prompt logic
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallBtn(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "bg-[#050414]" : "bg-[#f7f7fa]"}>
        <SpeedInsights />
        <BlurBlob position={{ top: '40%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Certificate />
          <Contact />
          <Samrat />
          <Footer />
        </div>
        {showInstallBtn && (
          <button
            onClick={handleInstallClick}
            className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 0 16px #8245ec80, 0 0 32px #ff00cc40' }}
          >
            Download App
          </button>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
