'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Support = () => {
  useEffect(() => {
    gsap.to('#support-title', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#support-title',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 85%',
      }
    });
    gsap.to('#fade-in', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#support-title',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 85%',
      },
      ease: 'power2.inOut',
      duration: 1
    });
  }, []);

  return (
    <section className='h-[155vh] md:h-[170vh] w-full relative overflow-hidden px-5 sm:py-32 py-20 sm:px-10'>
      <div className='screen-max-width' id='Support'>
        <div className='w-full'>
          <h1 className='text-[#86868b] lg:text-6xl md:text-5xl text-3xl font-medium translate-y-20 lg:px-7 opacity-0' id='support-title'>
            Dettagli della Programmazione.
          </h1>
          <div className='mt-10 md:mt-20 mb-14'>
            <div className='relative h-full flex justify-center items-center'>
              <div className='overflow-hidden'>
               <img src='/frame.png' className='bg-transparent relative z-10'/>
              </div>
              <div className='absolute w-[95%] h-[95%] rounded-[56px] overflow-hidden z-0'>
            <video className='pointer-events-none' playsInline preload='none' muted autoPlay loop>
              <source src='supporto.mov'/>
            </video>
          </div>
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-center items-center gap-24'>
            <div className='flex flex-1 justify-center flex-col'>
              <p className='text-[#86868b] text-xl font-normal md:font-semibold my-2 opacity-1 translate-y-[100px]' id='fade-in'>
              Qualora nella vostra palestra non fossero disponibili le attrezzature indicate nella scheda, {' '} <span className='text-white'>provvederò ad adattare </span> la programmazione in base agli strumenti a vostra disposizione.
              </p>
              <p className='text-[#86868b] text-xl font-normal md:font-semibold opacity-1 translate-y-[100px] my-2' id='fade-in'>
              Le programmazioni prevedono {' '} <span className='text-white'>cinque giornate </span> di allenamento per il livello avanzato,<span className='text-white'> quattro giornate </span>per il livello intermedio e <span className='text-white'>tre giornate  </span>per il livello principiante.
              </p>
            </div>
            <div className='flex-1 flex justify-center flex-col opacity-1 translate-y-[100px]' id='fade-in'>
              
              <p className='text-[#86868b] text-xl font-normal md:font-semibold my-2'>
              L&apos;acquisto di una programmazione include una {' '} <span className='text-white'>consulenza su WhatsApp </span>, durante la quale spiegherò la metodica di allenamento e risponderò a qualsiasi dubbio sulla programmazione.
              </p>
              <p className='text-[#86868b] text-xl font-normal md:font-semibold my-2'>
              
              Per ogni esercizio sarà disponibile un {' '} <span className='text-white'>link ad un video </span>che mostra l&apos;esecuzione corretta dell&apos;esercizio.
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default Support;
