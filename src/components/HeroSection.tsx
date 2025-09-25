import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const HeroSection = ({ title, children, className = "" }: HeroSectionProps) => {
  return (
    <section className={className}>
      {children}
      <h1>{title}</h1>
    </section>
  );
};

export default HeroSection;
