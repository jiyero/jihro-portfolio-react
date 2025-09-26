import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const navItems = ["About", "Experience", "Projects", "Hobbies"];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
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
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((items) => {
          const targetId = items.toLocaleLowerCase();
          return (
            <NavigationMenuItem key={items}>
              <NavigationMenuLink
                href={`#${targetId}`}
                onClick={(e) => handleClick(e, targetId)}
              >
                {items}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
