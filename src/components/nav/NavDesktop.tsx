import type { NavIcon } from "@/types/IconType";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type NavDesktopProps = {
  items: string[];
  icons: NavIcon[];
  handleClick: (e: React.MouseEvent<HTMLElement>, targetId: string) => void;
};

const NavDesktop = ({ items, icons, handleClick }: NavDesktopProps) => {
  return (
    <div className="flex items-center justify-between mx-10">
      <h1
        className="text-3xl font-bold text-background cursor-pointer"
        onClick={(e) => handleClick(e, "top")}
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
                  className="text-lg font-medium cursor-pointer"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        {icons.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <Icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavDesktop;
