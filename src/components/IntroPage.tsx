import Menu from "./Menu/Menu";
import { motion } from "framer-motion";
import { descriptionVar } from "./UI/Info";

const imgVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
};

const TITLE = "LE SSERAFIM";

export default function IntroPage() {
  return (
    <>
      <div className="relative">
        <Menu />
      </div>
      <div className="relative h-screen max-w-[1700px] mx-auto">
        <div className="-rotate-90 mainTitle absolute top-28 right-full translate-x-7/12 lg:top-64">
          <h1 className="text-8xl lg:text-9xl font-clash-semibold">
            {TITLE.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="absolute px-4 top-9/12 w-sm lg:w-lg left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:top-6/12 lg:translate-x-0">
          <motion.div variants={imgVar} initial="hidden" animate="visible">
            <img src="./images/LOGO.png" alt="Lesserafim logo" />
          </motion.div>
          <motion.div
            className="mt-8 text-left min-w-sm font-clash-regular mb-16 lg:mb-0"
            variants={descriptionVar}
            initial="hidden"
            animate="visible"
          >
            <p>
              LE SSERAFIM is a K-pop girl group produced by Source Music, an
              affiliate of HYBE, a global music label.
            </p>
            <p>
              LE SSERAFIM, girls who honestly and confidently make their way,
              talks about their true self that is undisturbed from the prejudice
              in the world and, with this story, the spirit and attitude of LE
              SSERAFIM are defined as a sentence, I'M FEARLESS.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
