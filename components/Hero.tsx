'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNav } from './ui/navContext'
const Hero = () => {
 
  useGSAP(()=>{

    gsap.to('#hero',{opacity:1, delay:1, y:50})
    gsap.to('#hero-title',{opacity:1, delay:0.5, y:50})
  })
  const handleClick = ()=>{
    const section = document.getElementById('Store');
    section?.scrollIntoView({behavior:'smooth'});
  }
  const [foto1,setFoto1] = useState(false)
  const [foto2,setFoto2] = useState(false)
  const [foto3,setFoto3] = useState(false)
  
  const handlephoto = () => {
    if(767 < window.innerWidth && 1024 > window.innerWidth){
      setFoto1(true)
      setFoto2(false)
      setFoto3(false)
    }else if(1024 <= window.innerWidth && 1536 > window.innerWidth){
      setFoto2(true)
      setFoto1(false)
      setFoto3(false)
    }else if(1536 <= window.innerWidth){
      setFoto2(false)
      setFoto1(false)
      setFoto3(true)
    }else{
      setFoto1(false)
      setFoto2(false)
      setFoto3(false)
    }
  }
  const handleHero = () => {
    if(!openNavigation && window.innerWidth >= 767){
      setOpenNavigation(false)
      console.log("Verifica")
    }
    
  }
  useEffect(()=>{
    handlephoto()
    window.addEventListener('resize',handlephoto);
    window.addEventListener('resize',handleHero)
    return ()=>{
      window.removeEventListener('resize', handlephoto)
      
    }
  },[])
  const {openNavigation, setOpenNavigation} = useNav();
  return (
    <section className={`w-full h-[calc(100vh-60px)] 2xl:bg-[#010102] bg-[#101010] flex flex-col justify-center items-center z-20 ${openNavigation && 'hidden'}`}>
      <div className='flex-col flex justify-center items-center h-5/6'>
        <h1 className={`text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-700 to-white md:from-white-200 md:to-white lg:from-white lg:to-neutral-50 text-center font-sackers font-bold my-5 z-10 2xl:text-7xl 2xl:from-white 2xl:to-neutral-500 opacity-0 -translate-y-[150px]`} id='hero-title'>
          THE ART OF GRINDING
        </h1>
        <button className="animate-shimmer items-center justify-center  border border-yellow-700 bg-[linear-gradient(110deg,#ca8a04_45%,#eab308_50%,#ca8a04_55%)] bg-[length:200%_100%] px-[8px] py-[8px] font-semibold text-xs text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-700 z-10 opacity-0 md:hidden" onClick={handleClick} id='hero'>
          PROGRAMMI
        </button>
        
        <button className={`animate-shimmer items-center justify-center  border border-gray-700 bg-[linear-gradient(110deg,#C1C2D3_45%,#f3f4f6_50%,#C1C2D3_55%)] bg-[length:200%_100%] px-[10px] py-[10px] font-bold text-xs text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-700 z-10 opacity-0 ${!foto1 ? 'hidden' : ""} `} onClick={handleClick} id='hero'>
          PROGRAMMI
        </button>
        <button className={`animate-shimmer items-center justify-center  border border-gray-400 bg-[linear-gradient(110deg,#e5e5e5_45%,#FFF_50%,#e5e5e5_55%)] bg-[length:200%_100%] px-[10px] py-[10px] font-bold text-xs text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 z-10 opacity-0 ${!foto2 ? 'hidden' : ""} `} onClick={handleClick} id='hero'>
          PROGRAMMI
        </button>
        <button className={`animate-shimmer items-center justify-center  border border-gray-400 bg-[linear-gradient(110deg,#e5e5e5_45%,#FFF_50%,#e5e5e5_55%)] bg-[length:200%_100%] px-[10px] py-[10px] font-bold text-xs text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 z-10 ${!foto3 ? 'hidden' : ""} opacity-0`} onClick={handleClick} id='hero'>
          PROGRAMMI
        </button>
       <img className='absolute w-full top-0 md:hidden  h-[calc(100vh-60px)]' src='/4.jpg'/>
       <img className={`absolute top-0 left-0 right-0 w-full h-[95vh] lg:hidden  ${!foto1 ? 'hidden' : ""}`} src='2.jpg'/>
       <img className={`absolute inset-0 w-full h-[95vh] ${!foto2 ? 'hidden' : ""}`} src='/6.jpg'/>
       <img className={`absolute  ${!foto3 ? 'hidden' : ""}`} src='/8.jpg'/>
      </div>
    </section>
  )
}

export default Hero

