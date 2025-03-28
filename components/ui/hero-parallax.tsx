"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/constants/useOutsideClick";
import { AnimatePresence } from "framer-motion";
import { useProductContext } from "./ProductContex";
export const HeroParallax = ({
  products1, products2, products3,
}: {
  products1: {
    title: string;
    subtitle: string;
    thumbnail: string;
    content: () => React.JSX.Element;
  }[],
  products2:{
    title: string;
    subtitle: string;
    thumbnail: string;
    content: () => React.JSX.Element;
  }[],products3:{
    title: string;
    subtitle: string;
    thumbnail: string;
    content: () => React.JSX.Element;
  }[];
}) => {
  const firstRow = products1.slice(0);
  const secondRow = products2.slice(0);
  const thirdRow = products3.slice(0);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 300]),
    springConfig
  );
  const translateX2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-300, 300]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-150, -1000]),
    springConfig
  ); 
  const translateX_md = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, 1000]),
    springConfig
  );
  const translateX2_md = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, 600]),
    springConfig
  );
  const translateXReverse_md = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -700]),
    springConfig
  );
  const translateX_lg = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 500]),
    springConfig
  );
  const translateX2_lg = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 200]),
    springConfig
  );
  
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  const useMediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState(false);
  
    React.useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }, [matches, query]);
  
    return matches;
  };
  const isMediumScreen = useMediaQuery('(min-width: 767px)');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const { active, setActive, setIsVisible } = useProductContext();
  const [isSmall] = useState(false);
  
  return (
    
    <div className="bg-[#101010]">
    <AnimatePresence>
    {active && typeof active === "object" ? (
      <div className={`fixed  grid  z-[100] overflow-hidden ${isSmall ? "top-0 left-1/2 transform -translate-x-1/2 translate-y-0" : "top-0 left-1/2 transform -translate-x-1/2 translate-y-0"  } w-[90vw] h-[90vh] relative  md:w-[600px]`}>
        <motion.button
          key={`button-${active.title}`}
          layout
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.05,
            },
          }}
          className="flex absolute top-2 right-2  items-center justify-center bg-white rounded-full h-6 w-6 z-[101]"
          onClick={() => {
            setActive(null);
            setIsVisible(true); // Mostra la navbar al clic del pulsante chiudi
          }}
        >
          <CloseIcon />
        </motion.button>
        <motion.div
          layoutId={`card-${active.title}`}
          ref={ref}
          className="w-full h-full md:w-[600px] flex flex-col bg-gradient-to-b from-white to-neutral-400 rounded-3xl "
        >
          <div className="h-full flex flex-col relative">
            <div className="flex justify-center items-center p-4">
            
              <div>
                <motion.h3
                  layoutId={`title-${active.title}`}
                  className="font-medium text-neutral-700 dark:text-neutral-200 text-base z-[101]"
                >
                  {active.subtitle}
                </motion.h3>
                
              </div>

              
            </div>
            <div className="py-4 px-4 h-full">
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm h-full  pb-10 flex flex-col  gap-4 "
              >
                {typeof active.content === "function"
                  ? active.content()
                  : active.content}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    ) : null}
  </AnimatePresence>
    <div
      ref={ref}
      className="md:h-[350vh] h-[350vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#101010]" id="Store"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={isLargeScreen ? translateX_lg : isMediumScreen ? translateX_md: translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={isMediumScreen ? translateXReverse_md : translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={isLargeScreen ? translateX2_lg:isMediumScreen ? translateX2_md : translateX2}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      
    </div>
    </div>
   
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
      Trasforma il tuo <br /> corpo e la tua vita
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
      Scegli il programma di allenamento perfetto per te tra principiante, intermedio o avanzato. 
      Ogni percorso è studiato per aiutarti a raggiungere i tuoi obiettivi di forma fisica, 
      indipendentemente dal tuo livello di esperienza.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    subtitle: string;
    thumbnail: string;
    content: () => React.JSX.Element;
  };
  translate: MotionValue<number>;
}) => {
  const { active, setActive, ref, setIsVisible } = useProductContext();
  
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
        setIsVisible(true); // Mostra la navbar quando viene chiuso il dettaglio
      }
    }
    
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      window.scrollTo({
        top: window.innerHeight, // Scroll di 100vh
        behavior: "smooth", // Scroll con animazione fluida
      }); // Scorri fino all'inizio dello schermo
      setIsVisible(false); // Nascondi la navbar quando viene aperta una card
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(true); // Mostra la navbar quando non c'è nessuna card attiva
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setIsVisible]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => {
    setActive(null);
    setIsVisible(true); // Mostra la navbar quando si clicca fuori
  });
  return (
    
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 cursor-pointer"
      onClick={() => {
        setActive(product);
        setIsVisible(false); // Nascondi la navbar al clic su una card
      }}
    >
      
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-1 group-hover/product:opacity-100 text-white text-center">
  {product.title}
</h2>

      
    </motion.div>
  );
};
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
