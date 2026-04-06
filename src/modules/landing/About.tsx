import Section from "../../components/Section";
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiReact,
  SiSpring,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  const MarqueeIcons = [
    {
      label: "JavaScript",
      icon: SiJavascript,
    },
    {
      label: "TypeScript",
      icon: SiTypescript,
    },
    {
      label: "NextJS",
      icon: RiNextjsFill,
    },
    {
      label: "MySQL",
      icon: SiMysql,
    },
    {
      label: "React",
      icon: SiReact,
    },
    {
      label: "Spring",
      icon: SiSpring,
    },
    {
      label: "Java",
      icon: FaJava,
    },
  ];

  return (
    <Section title="" className="gap-16 bg-accent" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 text-center w-5/6">
        <h2 className="text-6xl font-bold">About</h2>
        <p className="max-w-xl text-lg">
          Hi! I'm Jihro Abendano, a frontend developer from the Philippines who
          enjoys creating clean and interactive web experiences using React. I
          have two years of experience—one year professionally and another
          during my final year in college—where I honed my skills in building
          responsive and user-friendly applications.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden w-5/6 max-w-4xl ">
        <div className="animate-marquee py-12 whitespace-nowrap">
          {MarqueeIcons.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 mx-6">
              <Icon size={40} aria-hidden="true" />
              <span>{label}</span>
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 py-12 whitespace-nowrap">
          {MarqueeIcons.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 mx-6">
              <Icon size={40} />
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
