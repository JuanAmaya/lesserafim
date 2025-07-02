import Info, { titleVar } from "../UI/Info";
import { AnimatePresence, motion } from "framer-motion";
import { membersVar } from "./Members";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import { useEffect, useState } from "react";

const ALBUMS = [
  {
    id: "A1",
    title: "FEARLESS",
    year: 2022,
    length: "14:12",
    trackList: [
      "The World Is My Oyster",
      "FEARLESS",
      "Blue Flame",
      "The Great Mermaid",
      "Sour Grapes",
    ],
    coverImg: "./images/covers/Fearless.jpg",
    bannerImg: "./images/banners/fearless.jpg",
  },
  {
    id: "A2",
    title: "ANTIFRAGILE",
    year: 2022,
    length: "13:26",
    trackList: [
      "The Hydra",
      "ANTIFRAGILE",
      "Impurities",
      "No Celestial",
      "Good Parts (when the quality is bad but I am)",
    ],
    coverImg: "./images/covers/Antifragile.jpg",
    bannerImg: "./images/banners/antifragile.jpg",
  },
  {
    id: "A3",
    title: "UNFORGIVEN",
    year: 2023,
    length: "37:43",
    trackList: [
      "The World Is My Oyster (2023 Ver.)",
      "FEARLESS (2023 Ver.)",
      "Blue Flame (2023 Ver.)",
      "The Hydra",
      "ANTIFRAGILE",
      "Impurities",
      "Burn the Bridge",
      "UNFORGIVEN",
      "No-Return (Into the unknown)",
      "Eve, Psyche & The Bluebeard's wife",
      "FEARNOT (Between you, me and the lamppost)",
      "Flash Forward",
      "Fire in the belly",
    ],
    coverImg: "./images/covers/Unforgiven.jpg",
    bannerImg: "./images/banners/unforgiven.jpg",
  },
  {
    id: "A4",
    title: "EASY",
    year: 2024,
    length: "13:34",
    trackList: ["Good Bones", "EASY", "Swan Song", "Smart", "We got so much"],
    coverImg: "./images/covers/Easy.jpg",
    bannerImg: "./images/banners/easy.jpg",
  },
  {
    id: "A5",
    title: "CRAZY",
    year: 2024,
    length: "14:52",
    trackList: [
      "Chasing Lightning",
      "CRAZY",
      "Pierrot",
      "1-800-hot-n-fun",
      "Crazier",
    ],
    coverImg: "./images/covers/Crazy.jpg",
    bannerImg: "./images/banners/crazy.jpg",
  },
  {
    id: "A6",
    title: "HOT",
    year: 2025,
    length: "12:48",
    trackList: ["Born Fire", "HOT", "Come Over", "Ash", "So Cynical (Badum)"],
    coverImg: "./images/covers/Hot.jpg",
    bannerImg: "./images/banners/hot.jpg",
  },
];

export default function Work() {
  const { width } = useWindowDimensions();
  const [largeScreen, setLargeScreen] = useState(false);
  const [BGBanner, setBGBanner] = useState("");
  const [hoverNameAlbum, setHoverNameAlbum] = useState("");

  useEffect(() => {
    if (width > 1024) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
      setBGBanner("");
    }
  }, [width]);

  return (
    <div className="relative lg:overflow-hidden lg:h-screen">
      <div
        className={`${
          BGBanner ? "opacity-0 blur-xl" : "opacity-100"
        } transition-all duration-400`}
      >
        <Info title="WORK" description="" />
      </div>
      {!largeScreen && (
        <motion.ul
          className="grid grid-cols-1 max-w-screen-md mx-auto gap-8 pb-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {ALBUMS.map((album) => (
            <WorkCards
              album={album}
              hoverNameAlbum={hoverNameAlbum}
              setHoverNameAlbum={setHoverNameAlbum}
            />
          ))}
        </motion.ul>
      )}
      {largeScreen && (
        <WorkBGBanner BGBanner={BGBanner} setBGBanner={setBGBanner} />
      )}
    </div>
  );
}

export type AlbumType = {
  id: string;
  title: string;
  year: number;
  coverImg: string;
  bannerImg: string;
  length: string;
  trackList: string[];
};

type WorkCardProps = {
  album: {
    id: string;
    title: string;
    year: number;
    coverImg: string;
    bannerImg: string;
    length: string;
    trackList: string[];
  };
  setHoverNameAlbum: (name: string) => void;
  hoverNameAlbum: string;
};

const workCardVar = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "fit-content",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export function WorkCards({
  album,
  setHoverNameAlbum,
  hoverNameAlbum,
}: WorkCardProps) {
  const [openAlbum, setOpenAlbum] = useState(false);

  return (
    <motion.li
      key={album.id}
      className="justify-center relative mx-6 cursor-pointer"
      variants={membersVar}
      onMouseEnter={() => setHoverNameAlbum(album.title)}
      onMouseLeave={() => setHoverNameAlbum("")}
      onClick={() => setOpenAlbum((prev) => !prev)}
    >
      <div className="overflow-hidden relative">
        <img
          src={album.bannerImg}
          alt={`${album.title} banner`}
          className={`${
            hoverNameAlbum == album.title ? "" : "blur-sm"
          } max-h-40 w-full object-cover transition-all duration-300`}
        />
        <div className="hover:opacity-0 transition-all duration-300">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 w-full h-full"></div>
          <span className="absolute z-10 left-1/2 top-1/2 text-5xl font-clash-semibold text-white transform -translate-x-1/2 -translate-y-1/2">
            {album.title}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {openAlbum && (
          <motion.div
            className="bg-white p-4 flex flex-col gap-4"
            variants={workCardVar}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AlbumDescription
              title="Release date"
              desc={album.year.toString()}
              styles="text-black text-3xl"
            />
            <AlbumDescription
              title="Tracklist"
              desc={album.trackList}
              styles="text-black text-3xl"
            />
            <AlbumDescription
              title="Length"
              desc={album.length}
              styles="text-black text-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

type AlbumDescriptionProps = {
  title: string;
  desc: string | string[];
  styles?: string;
};

export const albumDescVar = {
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

export const trackListVar = {
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
  },
};

export function AlbumDescription({
  title,
  desc,
  styles,
}: AlbumDescriptionProps) {
  return (
    <div className={`${styles} flex flex-col `}>
      <motion.h3
        className="capitalize font-clash-regular"
        initial="hidden"
        animate="visible"
        exit={"exit"}
        transition={{ staggerChildren: 0.1 }}
      >
        {title.split("").map((char, index) => (
          <motion.span variants={titleVar} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.h3>
      {/* <span className="capitalize font-clash-regular">{title}</span> */}
      {!Array.isArray(desc) && (
        <motion.span className="font-clash-semibold" variants={albumDescVar}>
          {desc}
        </motion.span>
      )}
      {Array.isArray(desc) && (
        <motion.ul
          initial="hidden"
          animate="visible"
          exit={"exit"}
          transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
        >
          {desc.map((song, index) => (
            <motion.li
              key={index}
              className="font-clash-semibold"
              variants={trackListVar}
            >
              - {song}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

type WorkBGBannerProps = {
  setBGBanner: (banner: string) => void;
  BGBanner: string;
};

export const bannerVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 0.8,
    filter: "blur(5px)",
    transition: {
      duration: 0.4,
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

const albumCoverVar = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
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

export function WorkBGBanner({ BGBanner, setBGBanner }: WorkBGBannerProps) {
  const [openAlbum, setOpenAlbum] = useState<AlbumType | undefined>();

  return (
    <>
      <AnimatePresence>
        {BGBanner && (
          <motion.div
            className="shadowBorders absolute top-0 left-0 -z-10"
            variants={bannerVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={BGBanner}
          >
            <img src={BGBanner} className="w-screen h-screen object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.ul
        className="mt-20 ml-30"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {ALBUMS.map((album) => (
          <motion.li
            className={`${
              openAlbum?.title === album.title ? "workOptionActive" : ""
            } font-clash-semibold text-6xl w-fit cursor-pointer workOption`}
            key={album.id}
            onMouseEnter={() => setBGBanner(album.bannerImg)}
            onMouseLeave={() => {
              if (openAlbum === undefined) setBGBanner("");
            }}
            onClick={() => {
              setOpenAlbum(album), setBGBanner(album.bannerImg);
            }}
            variants={titleVar}
          >
            {album.title}
          </motion.li>
        ))}
      </motion.ul>

      {openAlbum?.title && (
        <AnimatePresence>
          <div className="absolute top-30 right-0 w-lg" key={openAlbum.title}>
            <motion.div
              className="flex gap-4 mr-6"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src={openAlbum.coverImg}
                alt={`${openAlbum.title} cover`}
                className="w-64 h-64"
                variants={albumCoverVar}
              />
              <div className="flex flex-col justify-between">
                <AlbumDescription
                  title="Release Date"
                  desc={openAlbum.year.toString()}
                  styles="text-white text-4xl"
                />
                <AlbumDescription
                  title="Length"
                  desc={openAlbum.length}
                  styles="text-white text-4xl"
                />
              </div>
            </motion.div>
            <div
              className={`${
                openAlbum.title === "UNFORGIVEN"
                  ? "overflow-y-scroll h-[30rem] different-scrollbar"
                  : ""
              } mt-4`}
            >
              <AlbumDescription
                title="Tracklist"
                desc={openAlbum.trackList}
                styles="text-white text-4xl"
              />
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
