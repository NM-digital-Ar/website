import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Diseño Web", "Responsive", "Profesional"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <Image
        className="relative rounded-full  mx-auto object-cover"
        src="/logo-nm.png"
        alt=""
        width={150}
        height={150}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] mb-4 ">
          NM Digital
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 mt-8">
          <Link href="#about">
            <button className="heroButton">Nosotros</button>
          </Link>
          <Link href="#services">
            <button className="heroButton">Nuestros Servicios</button>
          </Link>
          {/* <Link href="#portfolio">
            <button className="heroButton">Portfolio</button>
          </Link> */}
          <Link href="https://www.nm-digital.com.ar/#contact">
            <button className="heroButton">Contacto</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
