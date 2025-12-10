import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const navItems = ["About", "Experience", "Projects", "Hobbies"];

  const handleClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
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
    <nav className="sticky top-0 z-50 bg-secondary py-4">
      <div className="flex items-center justify-between mx-15">
        <h1
          className="text-3xl font-bold text-primary cursor-pointer"
          onClick={(e) => handleClick(e, "hero")}
        >
          JIHRO ABENDANO
        </h1>

        <NavigationMenu>
          <NavigationMenuList className="flex justify-center space-x-6">
            {navItems.map((item) => {
              const targetId = item.toLowerCase();
              return (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    onClick={(e) => handleClick(e, targetId)}
                    className="text-lg font-medium cursor-pointer "
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div> github , linkedin </div>
      </div>
    </nav>
  );
};

export default Nav;
