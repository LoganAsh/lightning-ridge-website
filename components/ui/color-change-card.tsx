"use client";

// Adapted from "Color Change Cards" on 21st.dev.
// Changes from the original: cards come in as props instead of hard-coded demo
// content, each card can link somewhere, a dark gradient keeps text readable on
// bright photos, and spaces in the heading keep their width.
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface ColorChangeCardData {
  heading: string;
  description: string;
  imgSrc: string;
  href?: string;
}

export function ColorChangeCards({ cards, className }: { cards: ColorChangeCardData[]; className?: string }) {
  return (
    <div className={cn("grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3", className)}>
      {cards.map((card) => (
        <Card key={card.heading} {...card} />
      ))}
    </div>
  );
}

// --- Card ---
export function Card({ heading, description, imgSrc, href }: ColorChangeCardData) {
  const body = (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-72 w-full cursor-pointer overflow-hidden bg-basin"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-t from-basin/90 via-basin/40 to-basin/10 transition-opacity duration-500 group-hover:opacity-80"
      />
      <div className="relative z-20 flex h-full flex-col justify-between p-6 text-mist transition-colors duration-500 group-hover:text-white">
        <FiArrowRight aria-hidden="true" className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h3 aria-label={heading} className="mb-2">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h3>
          <p className="max-w-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  if (!href) return body;
  return (
    <Link href={href} className="block outline-none focus-visible:ring-4 focus-visible:ring-ridge focus-visible:ring-offset-2">
      {body}
    </Link>
  );
}

// --- AnimatedLetter ---
const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
};

function AnimatedLetter({ letter }: { letter: string }) {
  const char = letter === " " ? "\u00A0" : letter;
  return (
    <span aria-hidden="true" className="inline-block h-[36px] overflow-hidden text-3xl font-bold leading-[36px]">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{char}</span>
        <span>{char}</span>
      </motion.span>
    </span>
  );
}

export default ColorChangeCards;
