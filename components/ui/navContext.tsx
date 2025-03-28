"use client";
import { createContext, useContext, useState } from "react";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";

interface NavContextType {
  openNavigation: boolean;
  toggleNavigation: () => void;
  setOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <NavContext.Provider value={{ openNavigation, toggleNavigation, setOpenNavigation }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
