"use client";
import React from "react";
import { navLists } from "@/constants";
import MenuSvg from "./ui/MenuSvg";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useNav } from "./ui/navContext";
import { BackgroundBeams } from "./ui/background";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
const Navbar = () => {
  const { openNavigation, toggleNavigation, setOpenNavigation } = useNav();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = React.useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });
 
  const handleClick = ()=>{
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <AnimatePresence mode="wait">
      <div className="flex justify-center items-center">
      <motion.div
        className={`w-full flex justify-center items-center py-5 z-10
          `}
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 100 : 0, opacity: visible ? 1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full justify-center hidden md:flex z-10">
          <a className="cursor-pointer px-[40px] lg:px-[50px] 2xl:px-[60px]" href="#Hero">
            <img src="/logo.png" alt="logo" width={25} height={18} />
          </a>
          <div className="flex flex-1 justify-center">
            {navLists.map((nav) => (
              <a className="px-5 text-sm lg:px-8 2xl:px-11 lg:text-base cursor-pointer lg:text-neutral-200 text-gray-400 hover:text-white transition-all" key={nav.id} href={nav.url}>
                {nav.title}
              </a>
            ))}
          </div>
          <div className="flex items-center max-sm:justify-end gap-7 max-sm:flex-1 lg:px-[10px] 2xl:px-[20px]">
            <img src="/bag.svg" width={18} />
          </div>
        </div>
        <div className="flex flex-1 justify-between px-5">
          <button className="md:hidden z-50" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </button>
          <div className={`md:hidden ${openNavigation && "hidden"} z-10`}>
            <img src="/logo.png" alt="logo" width={25} height={18} />
          </div>
          <button className={`md:hidden ${openNavigation && "hidden"} z-10`}>
            <img src="/bag.svg" width={18} />
          </button>
        </div>
        <div className={`${openNavigation ? "flex" : "hidden"} md:hidden w-full justify-center items-center`}>
          <nav className="fixed top-0 bottom-0 left-0 right-0">
            <div className="relative  flex flex-col items-center justify-center m-auto h-screen z-40">
              {navLists.map((item) => (
                <a key={item.id} href={item.url} className="text-gray-400 hover:text-white py-[30px] text-xl transition-all" onClick={handleClick}>
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>
        </div>
      </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;



export const HamburgerMenu = () => {
  return (
    <div className='absolute -top-40 left-0 right-0 bottom-0  pointer-events-none md:hidden z-30 bg-neutral-950'>
      <div className='absolute inset-0 opacity-[0.3]'>
        <img src="/4.jpg" className="w-full h-full object-cover"/>
      </div>
    </div>
  )
}
