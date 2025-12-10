import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

const HeroSection = ({
  title,
  children,
  id,
  className = "",
}: HeroSectionProps) => {
  return (
    <section className={className} id={id}>
      {children}
      <h1 className="text-7xl font-bold">{title}</h1>
    </section>
  );
};

export default HeroSection;
