import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  id: string;
};

const Section = ({ title, children, id, className = "" }: SectionProps) => {
  return (
    <section
      className={`flex flex-col md:flex-row justify-center items-center max-h-screen ${className}`}
      id={id}
    >
      <h1 className="text-6xl font-bold">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
