import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Github, Linkedin } from "lucide-react";

const Nav = () => {
  const navItems = ["About", "Experience", "Projects"];
  const navIcons = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jihro-abendano",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/jiyero", label: "GitHub" },
  ];

  const handleScrollOnClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bg-secondary py-4 sticky top-0 z-50">
      <div className="hidden md:block">
        <NavDesktop
          items={navItems}
          icons={navIcons}
          handleClick={handleScrollOnClick}
        />
      </div>

      <div className="block md:hidden">
        <NavMobile
          items={navItems}
          icons={navIcons}
          handleClick={handleScrollOnClick}
        />
      </div>
    </nav>
  );
};

export default Nav;
