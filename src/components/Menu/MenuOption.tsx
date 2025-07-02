import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { titleVar } from "../UI/Info";

type optionType = {
  name: string;
  path: string;
  location: string;
};

export default function MenuOption({ name, path, location }: optionType) {
  return (
    <motion.li
      variants={titleVar}
      className={`${
        location === "/" + name.toLocaleLowerCase()
          ? "pointer-events-none text-zinc-300"
          : location === "/" && name === "ABOUT"
          ? "pointer-events-none text-zinc-300"
          : "menuOption text-black"
      } font-clash-bold text-7xl pl-8 lg:text-8xl`}
    >
      <Link to={path}>{name}</Link>
    </motion.li>
  );
}
