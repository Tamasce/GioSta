// src/context/ProductContext.tsx
"use client";
import React, { createContext, useContext, useState, useRef, ReactNode } from "react";
import { programmi } from "@/constants";
import { useNavbarContext } from "./NavbarContext";
type ActiveType = (typeof programmi)[number] | boolean | null;

interface ProductContextProps {
  active: ActiveType;
  setActive: React.Dispatch<React.SetStateAction<ActiveType>>;
  ref: any;
  setIsVisible: (value: boolean) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<ActiveType>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { setIsVisible } = useNavbarContext();

  return (
    <ProductContext.Provider value={{ active, setActive, ref, setIsVisible }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext deve essere usato all'interno di ProductProvider");
  }
  return context;
};
