import PayPalCheckoutP from "@/components/pagament";
import PayPalCheckoutI from "@/components/ui/pagamentI";
import PayPalCheckoutA from "@/components/ui/pagamentA";
const handleDownloadP = () => {
  const link = document.createElement('a');
  link.href = '/ANTEPRIMA.pdf'; 
  link.download = 'Anteprima_Scheda_Generale.pdf';
  link.click();
};
const handleDownloadI = () => {
  const link = document.createElement('a');
  link.href = '/ANTEPRIMA.pdf'; 
  link.download = 'Anteprima_Scheda_Generale.pdf';
  link.click();
};
const handleDownloadA = () => {
  const link = document.createElement('a');
  link.href = '/ANTEPRIMA.pdf'; 
  link.download = 'Anteprima_Scheda_Generale.pdf';
  link.click();
};

export const navLists = [{
  id:"0",
  title:"Store",
  url:"#Store"
},{
  id:"1",
  title:"Support",
  url:"#Support"
},{
  id:"2",
  title:"Contact",
  url:"#Contact"
}
];
export const programmi = [
  {
    title: 'PRINCIPIANTE',
    subtitle: "SCHEDA PRINCIPIANTE",
    thumbnail:
      "/10.jpg",
    content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
           <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadP}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutP />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in tre giorni settimanali: 
            <strong> spinta (petto, spalle e tricipiti), tirata (dorsali e bicipiti) e gambe</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong>, utile per comprendere al meglio la tecnica e ridurre il rischio di infortuni.
          </li>
          
          <li className="my-2">
            Il programma è strutturato per garantire un <strong>equilibrio ottimale tra forza e ipertrofia</strong>, migliorando progressivamente le tue performance.

          </li>
          
          <li className="my-2 ml-2">
            <strong>Perfetto per principianti:</strong> la scheda di allenamento è perfetta per chi ha appena iniziato o per chi ha pochi mesi di esperienza.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14,99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
            
          </div>
        
        );
      }
      
  },{
    title: 'AVANZATO',
    subtitle: "SCHEDA AVANZATO",
    thumbnail:
      "/12.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
           <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadA}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutA />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in cinque giorni settimanali: 
            <strong> petto e spalle, dorsali femorali e glutei, spalle e braccia, petto e dorsali, quadricipiti e braccia</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong> per perfezionare la tecnica e ridurre il rischio di infortuni.
          </li>
          
          <li className="my-2">
            Il programma è progettato per ottimizzare <strong>forza, ipertrofia e resistenza muscolare</strong>, con carichi progressivi e periodizzazione avanzata.
          </li>
          
          <li className="my-2 ml-2">
            <strong>Ideale per atleti avanzati:</strong> questa scheda è pensata per chi si allena da almeno un anno e vuole massimizzare la propria performance.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14.99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
            
          </div>
        
        );
      }
  },
  {
    title: 'INTERMEDIO',
    subtitle: "SCHEDA INTERMEDIO",
    thumbnail:
      "/11.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
            <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadI}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutI />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in quattro giorni settimanali: 
            <strong> petto e tricipiti, dorsali e bicipiti, gambe, spalle e braccia</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong>, utile per affinare la tecnica e massimizzare i risultati.
          </li>
          
          <li className="my-2">
            Il programma è strutturato per garantire un <strong>equilibrio ottimale tra forza e ipertrofia</strong>, con progressioni mirate per migliorare le tue performance.
          </li>
          
          <li className="my-2 ml-2">
            <strong>Ideale per atleti intermedi:</strong> la scheda è pensata per chi si allena da almeno 6 mesi e desidera un programma più strutturato e sfidante.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14.99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
           
          </div>
        
        );
      }
  }
]
export const programmi2 = [
  {
    title: 'PRINCIPIANTE',
    subtitle: "SCHEDA PRINCIPIANTE",
    thumbnail:
      "/10.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
           <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadP}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutP />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in tre giorni settimanali: 
            <strong> spinta (petto, spalle e tricipiti), tirata (dorsali e bicipiti) e gambe</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong>, utile per comprendere al meglio la tecnica e ridurre il rischio di infortuni.
          </li>
          
          <li className="my-2">
            Il programma è strutturato per garantire un <strong>equilibrio ottimale tra forza e ipertrofia</strong>, migliorando progressivamente le tue performance.

          </li>
          
          <li className="my-2 ml-2">
            <strong>Perfetto per principianti:</strong> la scheda di allenamento è perfetta per chi ha appena iniziato o per chi ha pochi mesi di esperienza.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14,99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
            
          </div>
        
        );
      }
  },{
    title: 'INTERMEDIO',
    subtitle: "SCHEDA INTERMEDIO",
    thumbnail:
      "/11.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
            <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadI}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutI />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in quattro giorni settimanali: 
            <strong> petto e tricipiti, dorsali e bicipiti, gambe, spalle e braccia</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong>, utile per affinare la tecnica e massimizzare i risultati.
          </li>
          
          <li className="my-2">
            Il programma è strutturato per garantire un <strong>equilibrio ottimale tra forza e ipertrofia</strong>, con progressioni mirate per migliorare le tue performance.
          </li>
          
          <li className="my-2 ml-2">
            <strong>Ideale per atleti intermedi:</strong> la scheda è pensata per chi si allena da almeno 6 mesi e desidera un programma più strutturato e sfidante.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14.99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
           
          </div>
        
        );
      }
  },
  {
    title: 'AVANZATO',
    subtitle: "SCHEDA AVANZATO",
    thumbnail:
      "/12.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
           <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadA}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutA />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in cinque giorni settimanali: 
            <strong> petto e spalle, dorsali femorali e glutei, spalle e braccia, petto e dorsali, quadricipiti e braccia</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong> per perfezionare la tecnica e ridurre il rischio di infortuni.
          </li>
          
          <li className="my-2">
            Il programma è progettato per ottimizzare <strong>forza, ipertrofia e resistenza muscolare</strong>, con carichi progressivi e periodizzazione avanzata.
          </li>
          
          <li className="my-2 ml-2">
            <strong>Ideale per atleti avanzati:</strong> questa scheda è pensata per chi si allena da almeno un anno e vuole massimizzare la propria performance.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14.99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
            
          </div>
        
        );
      }
  }
]
export const programmi3 = [
  {
    title: 'AVANZATO',
    subtitle: "SCHEDA AVANZATO",
    thumbnail:
      "/12.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
           <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadA}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutA />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in cinque giorni settimanali: 
            <strong> petto e spalle, dorsali femorali e glutei, spalle e braccia, petto e dorsali, quadricipiti e braccia</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong> per perfezionare la tecnica e ridurre il rischio di infortuni.
          </li>
          
          <li className="my-2">
            Il programma è progettato per ottimizzare <strong>forza, ipertrofia e resistenza muscolare</strong>, con carichi progressivi e periodizzazione avanzata.
          </li>
          
          <li className="my-2 ml-2">
            <strong>Ideale per atleti avanzati:</strong> questa scheda è pensata per chi si allena da almeno un anno e vuole massimizzare la propria performance.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14.99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
            
          </div>
        
        );
      }
  },{
    title: 'PRINCIPIANTE',
    subtitle: "SCHEDA PRINCIPIANTE",
    thumbnail:
      "/10.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
           <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadP}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutP />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in tre giorni settimanali: 
            <strong> spinta (petto, spalle e tricipiti), tirata (dorsali e bicipiti) e gambe</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong>, utile per comprendere al meglio la tecnica e ridurre il rischio di infortuni.
          </li>
          
          <li className="my-2">
            Il programma è strutturato per garantire un <strong>equilibrio ottimale tra forza e ipertrofia</strong>, migliorando progressivamente le tue performance.

          </li>
          
          <li className="my-2 ml-2">
            <strong>Perfetto per principianti:</strong> la scheda di allenamento è perfetta per chi ha appena iniziato o per chi ha pochi mesi di esperienza.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14,99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
            
          </div>
        
        );
      }
  },
  {
    title: 'INTERMEDIO',
    subtitle: "SCHEDA INTERMEDIO",
    thumbnail:
      "/11.jpg",
      content: () => {
      
        return (
          
          <div className="flex flex-col items-center justify-center    rounded-lg  h-full">
            <div className="w-full relative">
            <div className="relative flex flex-row justify-between items-center">
            <button
            className="px-[8px] py-[8px] rounded-md bg-[#101010] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-[2px] border-transparent hover:border-[#101010]"
            onClick={handleDownloadI}
          >
            Anteprima
          </button>

            <div className="">
              <div className="absolute top-0 right-0">
                <PayPalCheckoutI />
              </div>
            </div>
              </div>

            </div>
            <div className="w-full flex ">
              <ul className="custom-bullet-list space-y-10 text-lg  text-neutral-700">
              <li className="my-2">
            La programmazione sarà suddivisa in quattro giorni settimanali: 
            <strong> petto e tricipiti, dorsali e bicipiti, gambe, spalle e braccia</strong>. 
          </li>
          
          <li className="my-2">
            Per ogni esercizio troverai un <strong>video dimostrativo</strong>, utile per affinare la tecnica e massimizzare i risultati.
          </li>
          
          <li className="my-2">
            Il programma è strutturato per garantire un <strong>equilibrio ottimale tra forza e ipertrofia</strong>, con progressioni mirate per migliorare le tue performance.
          </li>
          
          <li className="my-2 ml-2">
            <strong>Ideale per atleti intermedi:</strong> la scheda è pensata per chi si allena da almeno 6 mesi e desidera un programma più strutturato e sfidante.
          </li>
          <li className="my-2">
          Dopo il pagamento con PayPal di 14.99€ (che comprende programmazione e consulenza su WhatsApp), <strong>il download della scheda di allenamento sarà automatico</strong>. All'interno della scheda e nella sezione contatti troverete il mio numero di telefono: contattatemi e daremo inizio alla nostra consulenza!
          </li>
              </ul>
            </div>
           
          </div>
        
        );
      }
  }
]
export const socialMedia = [
  {
    id: 1,
    img: "/tiktok.svg",
    url: 'https://www.tiktok.com/@giovannistancampiano?_t=ZN-8uLZPXmdClS&_r=1'
  },
  {
    id: 2,
    img: "/instagram.svg",
    url: 'https://www.instagram.com/giovanni_stancampiano'
  },
];
