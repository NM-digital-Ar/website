import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>NM Digital</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="services" className="snap-center">
        <Services />
      </section>
      <section id="portfolio" className="snap-center">
        <Portfolio />
      </section>
    </div>
  );
};

export default Home;
