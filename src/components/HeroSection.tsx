import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const HeroSection = ({ title, children, className }: HeroSectionProps) => {
  return <section>{children}</section>;
};

export default HeroSection;
