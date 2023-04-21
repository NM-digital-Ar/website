import React, { useState } from "react";
import ModalService from "./ModalService";

type Props = {};

export default function Services({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <div className="h-screen relative flex flex-col  max-w-full px-5 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-gray-500 text-2xl text-center">
        Nuestros Servicios
      </h3>
      <div className="w-full flex flex-col text-center  space-y-10 text-5xl  mt-5">
        <div>
          <button
            className="hover:text-[#F7AB0A]"
            onClick={() => setShowModal(true)}
          >
            Landing Page
          </button>
          <ModalService
            visible={showModal}
            onClick={() => setShowModal(false)}
            text="✔  Genera leads 
        ✔ Aumenta las conversiones 
        ✔ Mejora el rendimiento de las campañas  
        ✔ Facilita la segmentación de la audiencia"
          />
        </div>
        <div>
          <button
            className="hover:text-[#F7AB0A]"
            onClick={() => setShowModal2(true)}
          >
            E-commerce
          </button>
          <ModalService
            visible={showModal2}
            onClick={() => setShowModal2(false)}
            text="✔ Disponibilidad 24/7
            ✔ Comercio global
            ✔ Información analítica
            ✔ Escalable"
          />
        </div>
        <div>
          <button
            className="hover:text-[#F7AB0A]"
            onClick={() => setShowModal3(true)}
          >
            Institucional
          </button>
          <ModalService
            visible={showModal3}
            onClick={() => setShowModal3(false)}
            text="✔ Mejora el posicionamiento
            ✔ Mayor visibilidad
            ✔ Captación de nuevos clientes
            ✔ Aporta seriedad y confiabilidad"
          />
        </div>
      </div>
    </div>
  );
}
