import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PayPalCheckout from '@/components/pagament';
import Store from '@/components/Store';
import Support from '@/components/Support';
import { PaymentProvider } from '@/components/ui/PaymentContext';
import React from 'react'

export default function Home() {
  return (
  
    <main className="relative bg-black flex justify-center ">
      <div className=" w-full">
        <Navbar />
        <Hero />
        <Store />
        <Support />
        <Footer />
      </div>
    </main>
    
  );
}
  