import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type NavDesktopProps = {
  items: string[];
  handleClick: (e: React.MouseEvent<HTMLElement>, targetId: string) => void;
};

const NavDesktop = ({ items, handleClick }: NavDesktopProps) => {
  return (
    <div className="flex items-center justify-between mx-10">
      <h1
        className="text-3xl font-bold text-primary cursor-pointer"
        onClick={(e) => handleClick(e, "hero")}
      >
        JIHRO ABENDANO
      </h1>

      <NavigationMenu>
        <NavigationMenuList className="flex justify-center space-x-6">
          {items.map((item) => {
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
  );
};

export default NavDesktop;
