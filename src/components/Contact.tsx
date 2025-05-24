import Image from "next/image";
import logoWhite from "@/assets/images/logo-white.png";

export function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="flex flex-1 flex-col items-center justify-center gap-25 bg-[#CCCDCE]">
        <Image
          alt=""
          src={logoWhite}
          quality={100}
          placeholder="blur"
          className="w-35"
        />

        <div className="text-10 mx-auto w-50 text-center font-light text-white">
          <p className="font-medium">Contacto</p>
          <p className="normal-case!">+541153473948</p>
          <p className="normal-case!">info@nareproductosdemar.com</p>

          <br />

          <p className="font-medium">Ubicación</p>
          <p className="normal-case!">Villa Ortuzar, Buenos Aires</p>

          <br />

          <p className="font-medium">Horarios de atención</p>
          <p className="normal-case!">Con cita previa de lunes a sábados</p>
        </div>
      </div>
    </section>
  );
}
