import { useEffect, useState } from "react";
import MenuHamburger from "../../assets/icons/MenuHamburger";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import MenuOption from "./MenuOption";

const MENU_OPTIONS = [
  { name: "ABOUT", path: "/lesserafim/" },
  { name: "BRAND", path: "/lesserafim/brand" },
  { name: "MEMBERS", path: "/lesserafim/members" },
  { name: "WORK", path: "/lesserafim/work" },
];

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  const handleClose = () => {
    setIsMenuOpen(false);
    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
    }, 600);
  };

  return (
    <>
      <div
        className={`${
          isLocked ? "pointer-events-none" : "pointer-events-auto"
        } relative max-w-[1700px] mx-auto z-10`}
      >
        <motion.div
          className={`
           bg-white absolute transition-all right-6 menuBurger`}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <button
            className="w-full flex justify-end"
            onClick={() => setIsMenuOpen(true)}
          >
            <div
              className={`${
                isMenuOpen ? "opacity-0" : "opacity-100"
              } transition-all duration-150`}
            >
              <MenuHamburger />
            </div>
          </button>
          {isMenuOpen && (
            <div className="w-full left-0 flex items-end lg:h-screen absolute top-0 overflow-hidden z-5">
              <button
                className={`${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                } transition-all absolute top-0 right-2 p-8 lg:hidden`}
                onClick={() => handleClose()}
              >
                <p className="text-black text-xl">CLOSE</p>
              </button>
              <motion.ul
                className="pt-20 lg:pt-0 lg:pb-16"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              >
                {MENU_OPTIONS.map((option) => (
                  <MenuOption
                    key={option.name}
                    name={option.name}
                    path={option.path}
                    location={currentPath}
                  />
                ))}
              </motion.ul>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}
