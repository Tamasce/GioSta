'use client'
import React, { useEffect } from 'react'
import MagicButton from './ui/Magicbutton'
import { socialMedia } from '@/constants'
import { TextGenerateEffect } from './ui/TextGenerateText'
import gsap from 'gsap';
const Footer = () => {
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
    gsap.to('#footer', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#footer',
        
        start: 'top 85%',
      },
      ease: 'power2.inOut',
      duration: 1,
      delay: 2
    });
  }, []);
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10 px-5 sm:py-32 py-20 sm:px-10' id="Contact">
      <div className='flex flex-col items-center'>
        <TextGenerateEffect className='lg:text-6xl md:text-5xl text-3xl font-medium  lg:px-7 opacity-1 text-center' words='Pronto a portare i tuoi allenamenti su un altro livello?'/>
      
        <p className='text-white-200 md:mt-10 my-5 text-center text-xs md:text-base opacity-0' id='footer'>
        Contattami oggi stesso per chiarire qualsiasi dubbio e scoprire come posso aiutarti a raggiungere i tuoi obiettivi.
        </p>
        <a href='https://wa.me/393313839647' target='_blank' rel='noopener noreferrer' className='opacity-0' id='footer'>
          <MagicButton title='Contattami su WhatsApp' icon='/contact.svg' position='right'/>
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center opacity-0' id='footer'>
        <p className='md:txt-base text-sm md:font-normal font-light text-white'> 
          Copyright © 2025 Giovanni Stancampiano
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}  // Assumi che "profile.href" contenga il link
              target="_blank"      // Apre il link in una nuova scheda
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} key={profile.id} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
