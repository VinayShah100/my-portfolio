import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";

const SkillCard = ({ icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gray-800/50 group-hover:scale-110 transition-transform duration-300">
          <i className={`${icon} w-8 h-8 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <i className={`${skill.icon} text-${skill.color} w-4 h-4`} />
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: "fas fa-code",
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "HTML", icon: "fab fa-html5", color: "text-orange-500" },
        { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-600" },
        { name: "Tailwind", icon: "fas fa-wind", color: "text-teal-400" },
        { name: "React", icon: "fab fa-react", color: "text-blue-500" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
        { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
      ],
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Science & Analytics",
      color: "text-green-400",
      skills: [
        { name: "Python", icon: "fab fa-python", color: "text-yellow-500" },
        { name: "Pandas", icon: "fas fa-database", color: "text-blue-400" },
        { name: "NumPy", icon: "fas fa-square-root-alt", color: "text-green-500" },
        { name: "TensorFlow", icon: "fab fa-tensorflow", color: "text-orange-500" },
        { name: "SQL", icon: "fas fa-database", color: "text-gray-400" },
        { name: "Power BI", icon: "fas fa-chart-bar", color: "text-yellow-600" },
      ],
    },
    {
      icon: "fas fa-tools",
      title: "Tools",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: "fab fa-git", color: "text-red-500" },
        { name: "GitHub", icon: "fab fa-github", color: "text-gray-500" },
        { name: "Docker", icon: "fab fa-docker", color: "text-blue-400" },
        { name: "JIRA", icon: "fas fa-tasks", color: "text-blue-500" },
        { name: "Azure DevOps", icon: "fab fa-microsoft", color: "text-blue-700" },
      ],
    },
    {
      icon: "fas fa-language",
      title: "Programing Language",
      color: "text-orange-400",
      skills: [
        { name: "c++", icon: "fab fa-c++", color: "text-red-500" },
        { name: "Java", icon: "fab fa-java", color: "text-gray-500" },
        { name: "Python", icon: "fab fa-python", color: "text-blue-400" },
        { name: "Javascript", icon: "fas fa-js", color: "text-blue-500" },
       
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen">
      <section className="container mx-auto px-4 py-11">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
