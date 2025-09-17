import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i16xhyr",  // Replace with your EmailJS Service ID
        "template_k8o7qok",  // Replace with your EmailJS Template ID
        form.current,
        "2KATZq2a35arwDWa0"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12 px-2 md:px-8 lg:px-16 min-h-[40vh] font-sans bg-transparent"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">CONTACT</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00ff99] mx-auto mt-2 rounded-full animate-gradient-rotate"></div>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full max-w-md bg-[#18132a]/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-[#8245ec40]">
        <h3 className="text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text text-center mb-2 animate-gradient-x">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>
        <form ref={form} onSubmit={sendEmail} className="mt-2 flex flex-col space-y-3">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-[#131025] text-white border border-[#8245ec40] focus:outline-none focus:border-[#8245ec] shadow-sm"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-[#131025] text-white border border-[#8245ec40] focus:outline-none focus:border-[#8245ec] shadow-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-xl bg-[#131025] text-white border border-[#8245ec40] focus:outline-none focus:border-[#8245ec] shadow-sm"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-xl bg-[#131025] text-white border border-[#8245ec40] focus:outline-none focus:border-[#8245ec] shadow-sm"
          />
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8245ec] to-[#ff00cc] py-3 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
