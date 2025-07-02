import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import Info from "../UI/Info";
import { motion } from "framer-motion";

const MEMBERS = [
  {
    name: "김채원",
    imgSrc: "./images/members/chaewon.jpg",
  },
  {
    name: "사쿠라",
    imgSrc: "./images/members/sakura.jpg",
  },
  {
    name: "허윤진",
    imgSrc: "./images/members/yunjin.jpg",
  },
  {
    name: "카즈하",
    imgSrc: "./images/members/kazuha.jpg",
  },
  {
    name: "홍은채",
    imgSrc: "./images/members/eunchae.jpg",
  },
];

export const membersVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
    },
  },
};

export default function Members() {
  const [largeScreen, setLargeScreen] = useState(false);
  const [memberName, setMemberName] = useState("");
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1024) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  }, [width]);

  return (
    <>
      <Info
        title={memberName ? memberName : "MEMBERS"}
        description="Girls make their own way regardless of the bias and the gaze in the world."
      />
      {!largeScreen && (
        <motion.ul
          className="flex flex-col gap-28 pb-36"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {MEMBERS.map((member, index) => (
            <MemberCard key={index} name={member.name} imgSrc={member.imgSrc} />
          ))}
        </motion.ul>
      )}
      {largeScreen && (
        <motion.ul
          className="flex shadowBorders h-full"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {MEMBERS.map((member, index) => (
            <MemberSlide
              key={index}
              name={member.name}
              imgSrc={member.imgSrc}
              setMemberName={setMemberName}
            />
          ))}
        </motion.ul>
      )}
    </>
  );
}

type MemberProps = {
  name: string;
  imgSrc: string;
  setMemberName?: (name: string) => void;
};

export function MemberCard({ name, imgSrc }: MemberProps) {
  return (
    <motion.li
      className="relative flex flex-col items-center max-w-lg mx-auto"
      key={name}
      variants={membersVar}
    >
      <div className="w-72">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="absolute -bottom-10 -right-7">
        <span className="font-hanna text-7xl">{name}</span>
      </div>
    </motion.li>
  );
}

export function MemberSlide({ name, imgSrc, setMemberName }: MemberProps) {
  return (
    <motion.li
      className="flex-1 hover:flex-2 transition-all duration-300"
      onMouseEnter={() => setMemberName!(name)}
      onMouseLeave={() => setMemberName!("")}
      key={name}
      variants={membersVar}
    >
      <img
        src={imgSrc}
        alt={name}
        className=" h-4/6 w-full object-cover saturate-0 hover:saturate-100 transition-all duration-300"
      />
    </motion.li>
  );
}
