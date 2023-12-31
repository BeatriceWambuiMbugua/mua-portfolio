"use client";

import { Divider } from "@nextui-org/react";
import AboutMe from "./components/AboutMe";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="bg-white">

     <Navbar />
      <section className="bg-[url(/hero.jpg)]  bg-center h-screen bg-no-repeat bg-cover -mt-[100px]">
        <div
          className="w-full h-full
            bg-black/50 backdrop-brightness-75"
        >
          <Hero />
        </div>
       
        <Divider className=" bg-light-salmon-pink w-[85px] mx-auto rotate-90 md:block hidden"/>
      </section>
      <AboutMe />
      <Services />
      <Prices />
      <Portfolio/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
