import { useState } from "react";
import type { NavIcon } from "@/types/IconType";
import { Menu, X } from "lucide-react";

type NavMobileProps = {
  items: string[];
  icons: NavIcon[];
  handleClick: (e: React.MouseEvent<HTMLElement>, targetId: string) => void;
};

const NavMobile = ({ items, icons, handleClick }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    handleClick(e, targetId);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between mx-6">
      <h1
        className="text-2xl font-bold text-background cursor-pointer"
        onClick={(e) => handleItemClick(e, "top")}
      >
        JIHRO
      </h1>

      <button onClick={() => setIsOpen(true)}>
        <Menu className="w-7 h-7 text-background" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-primary text-background flex flex-col items-center justify-center space-y-8 z-50">
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-7 h-7 text-background" />
            </button>

            {items.map((item) => {
              const targetId = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={(e) => handleItemClick(e, targetId)}
                  className="text-2xl font-semibold text-background"
                >
                  {item}
                </button>
              );
            })}
            <div className="flex flex-row gap-5">
              {icons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavMobile;
