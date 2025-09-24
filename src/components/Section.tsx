import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section
      className={`flex justify-center items-center h-screen ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
