import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Nav = () => {
  const navItems = ["About", "Experience", "Projects", "Hobbies"];

  const handleScrollOnClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bg-secondary py-4">
      <div className="hidden md:block">
        <NavDesktop items={navItems} handleClick={handleScrollOnClick} />
      </div>

      <div className="block md:hidden">
        <NavMobile items={navItems} handleClick={handleScrollOnClick} />
      </div>
    </nav>
  );
};

export default Nav;
