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
      className={`flex flex-col justify-center items-center min-h-screen ${className}`}
      id={id}
    >
      <h2 className="text-6xl font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
