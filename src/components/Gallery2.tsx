import Image from "next/image";
import exhibicion1 from "@/assets/images/exhibicion-1.jpg";
import exhibicion2 from "@/assets/images/exhibicion-2.jpg";
import exhibicion3 from "@/assets/images/exhibicion-3.jpg";
import exhibicion4 from "@/assets/images/exhibicion-4.jpg";
import exhibicion5 from "@/assets/images/exhibicion-5.jpg";

export function Gallery2() {
  return (
    <section id="galeria2" className="section sm:justify-center">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:mx-auto sm:flex sm:flex-col sm:gap-10">
          <p className="text-8 sm:text-12 md:text-16 my-[8.57vh] ml-[9.74vw] w-50 sm:my-0 sm:ml-0 sm:w-90">
            En la planta tenemos un salón para presentar productos, recibir
            clientes y también para disfrutar de colaboraciones con cocineros
            amigos.
          </p>

          <a
            href="#contacto"
            className="sm:text-6 hidden sm:block sm:w-25 sm:rounded-full sm:bg-[#CCCDCE] sm:py-1.5 sm:text-center"
          >
            Contactar
          </a>
        </div>

        <Image
          alt=""
          src={exhibicion1}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[23vw]"
        />
      </div>

      <div className="hidden sm:flex">
        <Image
          alt=""
          src={exhibicion4}
          quality={100}
          placeholder="blur"
          className="sm:w-2/4"
        />
        <Image
          alt=""
          src={exhibicion3}
          quality={100}
          placeholder="blur"
          className="sm:w-1/4"
        />
        <Image
          alt=""
          src={exhibicion2}
          quality={100}
          placeholder="blur"
          className="sm:w-1/4"
        />
      </div>

      <div className="flex sm:hidden">
        <Image
          alt=""
          src={exhibicion3}
          quality={100}
          placeholder="blur"
          className="w-1/3"
        />
        <Image
          alt=""
          src={exhibicion2}
          quality={100}
          placeholder="blur"
          className="w-1/3"
        />
        <Image
          alt=""
          src={exhibicion1}
          quality={100}
          placeholder="blur"
          className="w-1/3"
        />
      </div>

      <div className="flex sm:hidden">
        <Image
          alt=""
          src={exhibicion4}
          quality={100}
          placeholder="blur"
          className="w-1/2"
        />
        <Image
          alt=""
          src={exhibicion5}
          quality={100}
          placeholder="blur"
          className="w-1/2"
        />
      </div>

      <div className="flex flex-1 items-center justify-center sm:hidden">
        <a
          href="#contacto"
          className="text-6 w-25 rounded-full bg-[#CCCDCE] py-1.5 text-center"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
