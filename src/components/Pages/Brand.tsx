import Info from "../UI/Info";
import Marquee from "../UI/Marquee";
import { motion } from "framer-motion";

export const contentVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 3,
    },
  },
};

export default function Brand() {
  return (
    <>
      <Info
        title="BRAND"
        description="As an anagram of 'I'M FEARLESS', the brand name
            represents freedom, a conviction of solid ego, and a desire to
            achieve."
      />

      <motion.div
        className="shadowBorders"
        variants={contentVar}
        initial="hidden"
        animate="visible"
      >
        <Marquee slideAnim="animRightToLeftSlow" />
        <Marquee slideAnim="animLeftToRightFast" />
        <Marquee slideAnim="animRightToLeftFast" />
        <Marquee slideAnim="animLeftToRightSlow" />
      </motion.div>
    </>
  );
}
