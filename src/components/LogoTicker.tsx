'use client'
import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import apexLogo from "../assets/images/apex.png";
import celestialLogo from "../assets/images/celestial.png";
import echoLogo from "../assets/images/echo.png";
import pulseLogo from "../assets/images/pulse.png";
import quantumLogo from "../assets/images/quantum.png";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const FADE_MASK =
  "before:bg-[linear-gradient(to_right,#000,transparent)] after:bg-[linear-gradient(to_left,#000,transparent)]";

const FADE_POSITION =
  "before:left-0 before:top-0 after:right-0 after:top-0";

const FADE_SIZE =
  "before:h-full before:w-20 after:h-full after:w-20";

const FADE_SETUP =
  "before:content-[''] after:content-[''] before:absolute after:absolute before:z-10 after:z-10";

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h1 className="text-xl text-white/70 text-center">
          Trusted by the world&apos;s most innovative teams
        </h1>

        <div
          className={[
            "relative overflow-hidden mt-9 flex",
            FADE_SETUP,
            FADE_SIZE,
            FADE_POSITION,
            FADE_MASK,
          ].join(" ")}
        >
          <motion.div
            className="flex gap-16 flex-none pr-16"
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...images, ...images].map((img, index) => (
              <Image
                key={`${img.alt}-${index}`}
                src={img.src}
                alt={img.alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};