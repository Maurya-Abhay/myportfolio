import React, { useState, useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../App";

const faq = [
  // Greetings
  { q: /hello|hi|hey/i, a: "Hello! How can I help you today?" },
  { q: /how are you/i, a: "I'm just code, but I'm here to help!" },
  // About me (portfolio owner)
  { q: /who is the portfolio owner|about you|about abhay|about the owner/i, a: "I am Abhay Maurya, a passionate developer and the owner of this portfolio." },
  // Skills
  { q: /skills|what can you do|your skills/i, a: "I am skilled in React, JavaScript, HTML, CSS, Tailwind, Node.js, and more!" },
  // Experience
  { q: /experience|work experience|your experience/i, a: "I have experience working with IBM and other companies, building web applications and solutions." },
  // Education
  { q: /education|your education|where did you study/i, a: "I studied at MDU and BSA, and have completed various certifications in web development and DSA." },
  // Contact info
  { q: /contact|how to contact|contact info|email/i, a: "You can contact me via the contact form on this portfolio or email me at abhayprasad.maurya@gmail.com." },
  // Project FAQs
  { q: /project (\d+) details|tell me about project (\d+)/i, a: (m) => `Project ${m[1]} is a showcase of my skills in web development. Ask for more details!` },
  { q: /what projects have you done|your projects/i, a: "I have completed several projects including portfolio websites, chatbots, and web apps for various clients." },
  // Calculator
  { q: /add (\d+) and (\d+)/i, a: (m) => `The sum is ${Number(m[1]) + Number(m[2])}.` },
  { q: /subtract (\d+) from (\d+)/i, a: (m) => `The difference is ${Number(m[2]) - Number(m[1])}.` },
  { q: /multiply (\d+) and (\d+)/i, a: (m) => `The product is ${Number(m[1]) * Number(m[2])}.` },
  { q: /divide (\d+) by (\d+)/i, a: (m) => Number(m[2]) !== 0 ? `The result is ${Number(m[1]) / Number(m[2])}.` : "Cannot divide by zero." },
  // Time & Date
  { q: /what time is it|current time/i, a: () => `It's ${new Date().toLocaleTimeString()}` },
  { q: /what is the date|current date/i, a: () => `Today's date is ${new Date().toLocaleDateString()}` },
  // Simple Text Analysis
  { q: /sentiment of (.+)/i, a: (m) => {
    const text = m[1].toLowerCase();
    if (text.includes("good") || text.includes("great") || text.includes("happy")) return "Sentiment: Positive";
    if (text.includes("bad") || text.includes("sad") || text.includes("angry")) return "Sentiment: Negative";
    return "Sentiment: Neutral";
  }},
  { q: /keywords? in (.+)/i, a: (m) => {
    const words = m[1].split(/\s+/).filter(w => w.length > 4);
    return `Keywords: ${words.join(", ") || "None found"}`;
  }},
  // Project Showcase Helper
  { q: /explain project (\d+)/i, a: (m) => `Project ${m[1]} demonstrates advanced web development skills. Want to know more?` },
  { q: /navigate to (skills|experience|education|contact|work|certificate)/i, a: (m) => `Navigating to ${m[1]} section. Please check the menu or scroll.` },
  // Form Filling Assistant
  { q: /help me fill the contact form|suggest message for contact form/i, a: "Sure! You can write a message like: 'Hello Abhay, I am interested in your work and would like to connect regarding a project.'" },
  { q: /suggest subject for contact form/i, a: "Suggested subject: 'Collaboration Opportunity' or 'Project Inquiry'" },
  // Joke and fallback
  { q: /tell me a joke/i, a: "Why did the developer go broke? Because he used up all his cache!" },
  { q: /what is react/i, a: "React is a popular JavaScript library for building user interfaces." },
];

function getBotResponse(text) {
  // Map number input to feature queries
  const numberMap = {
    "1": "hello",
    "2": "add 2 and 3",
    "3": "your projects",
    "4": "sentiment of happy",
    "5": "help me fill the contact form"
  };
  const trimmed = text.trim();
  if (numberMap[trimmed]) {
    return getBotResponse(numberMap[trimmed]);
  }
  for (const item of faq) {
    const match = text.match(item.q);
    if (match) {
      if (typeof item.a === "function") return item.a(match);
      return item.a;
    }
  }
  return "Sorry, I don’t understand. Could you please rephrase?";
}

const SamratChatbot = () => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [botThinking, setBotThinking] = useState(false);
  const featureOptions = [
    { label: "Q&A", query: "hello" },
    { label: "Calculator", query: "add 2 and 3" },
    { label: "Projects", query: "your projects" },
    { label: "Text Analysis", query: "sentiment of happy" },
    { label: "Form Helper", query: "help me fill the contact form" },
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (customInput) => {
    const sendText = typeof customInput === "string" ? customInput : input;
    if (!sendText.trim()) return;
    const userMsg = { sender: "user", text: sendText };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setBotThinking(true);
    setTimeout(() => {
      const botText = getBotResponse(userMsg.text);
      setMessages((msgs) => [...msgs, { sender: "bot", text: botText }]);
      setBotThinking(false);
    }, 700);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleOpen = () => {
    setOpen(true);
    setMessages([]);
    setInput("");
    setBotThinking(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#8245ec] via-pink-500 to-[#00ff99] shadow-lg flex items-center justify-center border-4 border-white hover:scale-110 transition-all duration-300"
        style={{ boxShadow: '0 0 16px #8245ec80, 0 0 32px #ff00cc40' }}
        aria-label="Open Samrat Chatbot"
      >
  <span className="w-10 h-10 flex items-center justify-center text-3xl">🤖</span>
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 z-50 flex items-end justify-end" style={{ width: '50vw', height: '40vh', maxWidth: '340px', maxHeight: '420px' }}>
          <div
            className={`w-full h-full rounded-2xl shadow-2xl border flex flex-col items-center relative animate-fade-in transition-transform duration-300 ${theme === "dark" ? "bg-[#18132a] border-[#8245ec]" : "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-100 border-purple-300"}`}
            style={{ minWidth: '220px', minHeight: '220px' }}
          >
            <button
              onClick={handleClose}
              className={`absolute top-3 right-3 text-xl rounded-full px-2 py-1 shadow transition ${theme === "dark" ? "text-[#ff00cc] bg-[#18132a] hover:bg-[#8245ec] hover:text-white" : "text-pink-600 bg-pink-100 hover:bg-pink-200"}`}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className={`text-lg font-bold mt-4 mb-1 drop-shadow ${theme === "dark" ? "text-[#ff00cc]" : "text-pink-600"}`}>Samrat Chatbot</h2>
            {/* Features List - Next Level Design */}
            <div className="w-full flex flex-col items-center mb-1">
              <div className={`rounded-xl px-2 py-1 shadow text-xs font-semibold mb-1 border animate-fade-in w-full flex flex-row flex-wrap justify-center items-center gap-2 ${theme === "dark" ? "bg-[#18132a] border-[#8245ec] text-[#ff00cc]" : "bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-pink-200 text-pink-600"}`}>
                <span className={`block font-bold mb-1 ${theme === "dark" ? "text-[#ff00cc]" : "text-pink-600"}`}>Features:</span>
                {featureOptions.map((opt, idx) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSend(opt.query)}
                    className={`rounded px-2 py-1 text-[10px] font-semibold shadow flex items-center gap-1 transition-all duration-200 ${theme === "dark" ? "bg-[#18132a] border border-[#8245ec] text-[#ff00cc] hover:bg-[#8245ec] hover:text-white" : "bg-white border border-pink-200 text-pink-600 hover:bg-pink-100"}`}
                    style={{ minWidth: '40px' }}
                  >
                    <span className={`font-bold ${theme === "dark" ? "text-[#8245ec]" : "text-purple-500"}`}>{idx + 1}.</span> {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full flex items-center justify-center mb-1 px-0">
              <div className="relative w-4/5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className={`w-full pl-8 pr-10 py-2 rounded-full border text-xs shadow-sm placeholder:text-pink-400 ${theme === "dark" ? "border-[#8245ec] text-[#ff00cc] bg-[#18132a] focus:border-[#ff00cc] placeholder:text-[#8245ec]" : "border-pink-300 text-pink-700 bg-gradient-to-r from-purple-50 to-pink-100 focus:border-pink-400"}`}
                  placeholder="Type your message..."
                  disabled={botThinking}
                  style={{ minWidth: '100px', maxWidth: '180px' }}
                />
                <span className={`absolute left-2 top-1/2 -translate-y-1/2 text-lg ${theme === "dark" ? "text-[#8245ec]" : "text-pink-400"}`}>💬</span>
                <button
                  onClick={handleSend}
                  disabled={botThinking}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full font-semibold shadow transition-all duration-300 text-xs ${theme === "dark" ? "bg-[#8245ec] text-white hover:bg-[#ff00cc]" : "bg-gradient-to-r from-pink-500 to-purple-400 text-white hover:scale-105"}`}
                >
                  ➤
                </button>
              </div>
            </div>
            <div className="w-full flex-1 overflow-y-auto px-0 pb-2 pt-1" style={{ maxHeight: '90px' }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex mb-1 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-1 rounded-2xl max-w-xs text-xs shadow ${msg.sender === "user" ? (theme === "dark" ? "bg-[#8245ec] text-white" : "bg-pink-500 text-white") : (theme === "dark" ? "bg-[#18132a] text-[#ff00cc]" : "bg-pink-100 text-pink-700 animate-fade-in")}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {botThinking && (
                <div className="flex justify-start mb-1">
                  <div className={`px-3 py-1 rounded-2xl max-w-xs text-xs shadow animate-pulse ${theme === "dark" ? "bg-[#18132a] text-[#ff00cc]" : "bg-pink-100 text-pink-700"}`}>Samrat is thinking...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SamratChatbot;
