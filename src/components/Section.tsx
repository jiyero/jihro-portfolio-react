import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ title, children, className = "" }: SectionProps) => {
  return (
    <section
      className={`flex justify-center items-center h-screen ${className}`}
    >
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
