import React from "react";
import profileImage from "../assets/images/unnamed (2).jpg";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! 
           
            I'm a passionate Frontend Developer and Data Science Enthusiast with a strong foundation in building interactive web applications and extracting insights from data. My expertise lies in crafting seamless user experiences with HTML, CSS, JavaScript, React, and Tailwind, while also exploring the power of Python, SQL, and data-driven solutions.

            I enjoy solving complex problems, optimizing performance, and continuously learning new technologies. Whether it's designing intuitive interfaces or analyzing data for meaningful insights, I love turning ideas into impactful solutions.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
