import Section from "../../components/Section";

const Experience = () => {
  const experiences = [
    {
      role: "Junior Frontend Developer",
      company: "QualityTrade Asia · 2025–2026",
      description:
        "Developed and maintained responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated in an Agile/Scrum team environment to deliver feature releases in structured sprints.",
    },
  ];
  return (
    <Section
      title="Experience"
      className="md:flex-row gap-20 py-20 px-16"
      id="experience"
    >
      <div className="flex flex-col gap-6 max-w-xl my-20">
        {experiences.map((exp) => {
          return (
            <div
              key={exp.company}
              className="md:border-l-2 border-primary pl-6"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>

              <p className="text-muted text-sm">{exp.company}</p>

              <p className="mt-4 text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
