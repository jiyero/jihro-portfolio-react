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
    <section
      className={`flex flex-col md:flex-row-reverse h-screen justify-center items-center ${className} p-16`}
      id={id}
    >
      <h1 className="text-3xl sm:text-7xl font-bold">{title}</h1>
      {children}
    </section>
  );
};

export default HeroSection;
