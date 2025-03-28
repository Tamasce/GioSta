import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Store from '@/components/Store';
import Support from '@/components/Support';
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
  
