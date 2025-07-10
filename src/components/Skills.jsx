import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "JavaScript", icon: "🟨" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Python", icon: "🐍" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Postman", icon: "📬" },
        { name: "Swagger", icon: "📋" },
      ],
    },
    {
      title: "Design",
      skills: [{ name: "Figma", icon: "🎨" }],
    },
  ];

  return (
    <div className="mt-8 opacity-100 transition-opacity duration-500">
      <h1 className="text-2xl font-bold mb-4 transform translate-x-0 opacity-100 transition-all duration-500">
        Skills & Technologies:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="border p-4 rounded shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform translate-y-0 opacity-100"
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <h3 className="text-lg font-bold text-primary-color mb-3">
              {category.title}
            </h3>

            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-sm darkerText"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
