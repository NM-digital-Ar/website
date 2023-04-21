import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
/* import { useForm, SubmitHandler } from "react-hook-form"; */
/* import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore"; */

/* type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}; */

type Props = {};

function Contact({}: Props) {
  /* const { register, handleSubmit } = useForm<Inputs>(); */

  /*  const onSubmit: SubmitHandler<Inputs> = (data) => { */
  /*  try {
      const dataCollection = collection(db, "dataForm");

      const docRef = await addDoc(dataCollection, {
        name: data.name,
        email: data.email,
      });
      console.log("Document written with ID: ", docRef.id); */

  /*  toast.success('🦄 Saved the tool successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setTools([...tools,{ id: docRef.id, ...newTool}]);
      setInputData({
        title: '',
        description: '',
        url: ''
      }) */
  /*  } catch (error) {
      console.log(error);
    } */

  /*    window.location.href = `mailto:nm.digital.ar@gmail.com?subject=${data.subject}&body=Mi nombre es ${data.name}, ${data.message} (${data.email})`;
  }; */
  return (
    <div className="h-screen flex relative flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Contacto
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          Tenemos justo lo que necesitas.{" "}
          <span className="underline decoration-[#F7DE65]">Contactanos!</span>
        </h4>

        <div className="space-y-10">
          {/*  <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7DE65] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
 */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7DE65] h-7 w-7 animate-pulse" />
            <p className="text-[20px]">nm.digital.ar@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7DE65] h-7 w-7 animate-pulse" />
            <p className="text-[20px]">Buenos Aires, Argentina</p>
          </div>
        </div>

        {/*      <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nombre"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Correo electrónico"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Asunto"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Mensaje"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7DE65] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Enviar
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
