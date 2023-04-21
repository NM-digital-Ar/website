import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7DE65]/80 box-border">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>NM Digital</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="services" className="snap-center">
        <Services />
      </section>
      {/*  <section id="portfolio" className="snap-start">
        <Portfolio />
      </section> */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="hidden sticky md:bottom-2 md:w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="text-[#F7DE65] h-7 w-7 animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
