import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PayPalCheckoutA = () => {
  const [showPayPal, setShowPayPal] = useState(false);
  const pdfUrl = "/Scheda Allenamento Avanzato.pdf"; // Sostituisci con il percorso corretto del PDF

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Scheda_Allenamento_Avanzato.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {!showPayPal ? (
        <button
          onClick={() => setShowPayPal(true)}
          className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
        >
          Procedi al Pagamento
        </button>
      ) : (
        <PayPalScriptProvider options={{ clientId: "AS3EjFLFvd5kalwrVP9dohepKQpN4ie79iCEk2Hc6YGXZ2eo8uKePGeZZqwQE7JbX_HyS_WOgHr4sRAk",
          currency: "EUR"
         }}>
          <PayPalButtons
            fundingSource="paypal"
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      currency_code: "EUR",
                      value: "14.99",
                    },
                    description: "Scheda Allenamento Personalizzata",
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              if (!actions?.order) {
                console.error("Errore: actions.order è undefined.");
                return Promise.reject(new Error("Impossibile completare il pagamento."));
              }

              return actions.order.capture().then((details) => {
                const payerName = details.payer?.name?.given_name ?? "utente";
                alert(`Pagamento completato con successo! Grazie, ${payerName}.`);
                handleDownload(); // Scarica il PDF automaticamente
              });
            }}
            onError={(err) => {
              console.error("Errore nel pagamento:", err);
              alert("Si è verificato un errore durante il pagamento.");
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default PayPalCheckoutA;