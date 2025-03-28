import { createContext, useContext, useState, ReactNode } from "react";

interface PaymentContextType {
  showPayPal: boolean;
  setShowPayPal: (show: boolean) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [showPayPal, setShowPayPal] = useState<boolean>(false);

  return (
    <PaymentContext.Provider value={{ showPayPal, setShowPayPal }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = (): PaymentContextType => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment deve essere usato all'interno di PaymentProvider");
  }
  return context;
};
