import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Card({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="rounded-full w-32 h-32  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="./logo-nm.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-bold">Nombre de la Empresa</h4>

        <p className="uppercase py-5 text-gray-300">Mes y Año de Creación</p>
        <p>Descripción de la web</p>
        <Link href="#">Sitio Web</Link>
      </div>
    </article>
  );
}

export default Card;
