import React, { useState } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Computer Engineering",
      school: "ISBM College of Engineering, Pune ",
      mascot: "📘",
      year: "2021-2025",
      achievements: ["CGPA: - 7.14/10"],
      skills: [ "DSA",
        "OS",
        "Computer Networks",
        "DBMS",
        "OOP",
        "Web Development",
        "Cybersecurity",
        "HPC",
        "Cloud Computing",
        "Machine Learning"],
      description:
        "Pursuing Computer Engineering with a focus on core computing principles, software development, and system architecture.",
    },
    {
      degree: "12th (HSC)",
      school: "Central High School, Siwan, Bihar",
      mascot: "📗",
      year: "2018-2020",
      achievements: [" Percentage - 61% ", "Subject: Science"],
      skills: ["Physics", "Chemistry", "Mathematics", "Biology"],
      description:
        "Focused on Physics, Mathematics, and Chemistry, strengthening analytical skills and problem-solving abilities.",
    },
    {
      degree: "10th (SSC) ",
      school: "Central High School, Siwan, Bihar",
      mascot: "📗",
      year: "2017-2018",
      achievements: [" Percentage - 60% ", "Subject: Science"],
      skills: ["Physics", "Chemistry", "Mathematics", "Biology"],
      description:
        "Built a solid foundation in core subjects, enhancing problem-solving, logical reasoning, and academic discipline.",
    },
     
  ];

  return (
    <section className="min-h-screen relative py-40 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* ✅ Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and professional growth.
          </p>
        </motion.div>

        {/* ✅ Cards Container - Ensures cards stay in one line */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap justify-center px-2"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative border rounded-xl p-5 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm 
                ${hoveredIndex === index ? "border-teal-400 scale-[1.02]" : "border-blue-300/20"}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              // ✅ Adjusted width to fit in one row
              style={{
                width: "calc(100% / 3 - 1rem)", // Dynamic width to fit 3 in a row
                maxWidth: "350px", // Prevents oversized cards
              }}
            >
              {/* ✅ Card Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                {/* ✅ Description */}
                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                {/* ✅ Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ Skills Section */}
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
