import React from "react";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section - Copyright Text */}
        <p className="text-sm text-gray-400">© 2025 Idiot Engineers. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://instagram.com/idiot.engineerss" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://github.com/VinayShah100" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vinayshah100/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:vinayshahmail@gmail.com" className="hover:text-teal-400 transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
