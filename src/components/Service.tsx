import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Service({ directionLeft }: Props) {
  return (
    <div className="cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="filter hover:text-[#F7DE65]/40 transition duration-300 ease-in-out"
      >
        <p>Landing Page</p>
        <p>E-commerce</p>
        <p>Blog</p>
        <p>Proyecto Personalizado</p>
      </motion.div>
    </div>
  );
}

export default Service;
