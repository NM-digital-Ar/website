import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Nosotros
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 15, 15, 0],
        }}
        src="./mobile.png"
        className=" mt-20 mb-0 flex-shrink-0 "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold tracking-[2px]">
          Convertimos a los visitantes de tu web en{" "}
          <span className="underline decoration-[#F7DE65]">clientes</span>
        </h4>
        <p className="text-base">
          Creamos sitios webs personalizados. Diseñamos páginas adaptables a
          todos los dispositivos. Estamos en cada detalle para posicionarte
          mejor en los motores de búsqueda.
        </p>
      </div>
    </motion.div>
  );
}
