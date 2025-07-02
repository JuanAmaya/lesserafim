import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type InfoProps = {
  title: string;
  description: string;
};

export const titleVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(20px)",
    transition: {
      duration: 0.2,
    },
  },
};

export const descriptionVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function Info({ title, description }: InfoProps) {
  const [krnFont, setKrnFont] = useState(false);

  useEffect(() => {
    if (title === "BRAND" || title === "MEMBERS" || title === "WORK") {
      setKrnFont(false);
    } else {
      setKrnFont(true);
    }
  }, [title]);

  return (
    <div className="pt-30 flex items-center flex-col pb-12 overflow-hidden">
      <motion.h2
        aria-hidden
        aria-label={title}
        className={`${
          krnFont ? "font-hanna" : "font-clash-semibold"
        } text-7xl lg:text-[10rem] lg:w-full lg:relative lg:left-0`}
        initial="hidden"
        animate="visible"
        key={title}
        transition={{ staggerChildren: 0.1 }}
      >
        {title.split("").map((char, index) => (
          <motion.span variants={titleVar} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="lg:w-full lg:relative -right-2/4"
        variants={descriptionVar}
        initial="hidden"
        animate="visible"
      >
        <p className="w-sm text-center lg:w-xl">{description}</p>
      </motion.div>
    </div>
  );
}
