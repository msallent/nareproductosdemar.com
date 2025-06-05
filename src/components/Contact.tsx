import Image from "next/image";
import logo from "@/assets/images/logo.png";

export function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="flex flex-1 flex-col items-center justify-center gap-25 bg-[#CCCDCE] sm:gap-20 lg:gap-22.5 2xl:gap-30">
        <Image
          alt=""
          src={logo}
          quality={100}
          placeholder="blur"
          className="w-35 sm:w-45 lg:w-55 2xl:w-65"
        />

        <div className="text-10 sm:text-12 lg:text-16 2xl:text-20 mx-auto w-50 text-center font-light text-white sm:w-60 lg:w-80 2xl:w-100">
          <p className="font-medium">Contacto</p>
          <p className="normal-case!">+541153473948</p>
          <p className="normal-case!">info@nareproductosdemar.com</p>

          <br />

          <p className="font-medium">Ubicación</p>
          <p className="normal-case!">Villa Ortúzar, Buenos Aires</p>

          <br />

          <p className="font-medium">Horarios de atención</p>
          <p className="normal-case!">Con cita previa de lunes a sábados</p>
        </div>
      </div>
    </section>
  );
}
