import Section from "../../components/Section";

const SkillsItems = [
  {
    name: "JavaScript",
    image: "js.png",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Section title="About" className="gap-20" id="about">
        <p className="w-1/4 text-lg">
          Hey there! I'm Jihro Abendano, I'm currently a Frontend developer from
          the Philippines and I have been developing web designs with React for
          2 years, 1 year professionally and 1 year on my final year in college.{" "}
        </p>
      </Section>
      <div className="relative flex overflow-x-hidden w-screen">
        <div className="animate-marquee py-12 whitespace-nowrap">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>
        <div className="absolute top-0 animate-marquee2 py-12 whitespace-nowrap">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>
      </div>
    </div>
  );
};

export default About;
