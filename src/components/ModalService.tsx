import React, { MouseEventHandler } from "react";

type Props = {
  visible: boolean;
  text: string;
  onClick: MouseEventHandler;
};

function ModalService({ visible, text, onClick }: Props) {
  if (!visible) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white opacity-80 p-2 rounded text-black text-base flex flex-col items-center tracking-wide">
          <h1 className="text-2xl text-semibold mb-2">Ventajas</h1>
          {text}
          <button
            className="mt-3 bg-[#F7DE65] w-[50%] rounded text-bold"
            onClick={onClick}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalService;
