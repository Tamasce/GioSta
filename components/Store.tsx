'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { HeroParallax } from './ui/hero-parallax'
import { programmi, programmi2, programmi3 } from '@/constants'
import { ProductProvider } from './ui/ProductContex'
import { PaymentProvider } from './ui/PaymentContext'
import PayPalCheckout from './pagament'

const Store = () => {
  useGSAP(()=>{
    gsap.to('#store-title',{y:0, opacity:1, scrollTrigger: { trigger: '#store-title', toggleActions: 'restart reverse restart reverse', start: 'top 100%'}})
  })
  return (
    
    <ProductProvider>
      <HeroParallax products1={programmi} products2={programmi2} products3={programmi3} />
    </ProductProvider>
    
  )
}

export default Store