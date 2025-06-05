import Image from "next/image";
import exhibicion1 from "@/assets/images/exhibicion-1.jpg";
import exhibicion2 from "@/assets/images/exhibicion-2.jpg";
import exhibicion3 from "@/assets/images/exhibicion-3.jpg";
import exhibicion4 from "@/assets/images/exhibicion-4.jpg";
import exhibicion5 from "@/assets/images/exhibicion-5.jpg";

export function Gallery2() {
  return (
    <section
      id="galeria2"
      className="section sm:justify-center lg:overflow-hidden"
    >
      <div className="flex flex-1 items-center sm:grow-0 sm:justify-between">
        <div className="sm:mx-auto sm:flex sm:flex-col sm:gap-10">
          <p className="text-8 sm:text-12 lg:text-16 2xl:text-24 ml-[9.74vw] w-50 sm:ml-0 sm:w-90 lg:mt-10 lg:w-120 xl:w-140 2xl:w-200">
            En la planta tenemos un salón para presentar productos, recibir
            clientes y también para disfrutar de colaboraciones con cocineros
            amigos.
          </p>

          <a
            href="#contacto"
            className="sm:text-11 lg:text-14 hidden sm:block sm:w-35 sm:rounded-full sm:bg-[#CCCDCE] sm:pt-1.5 sm:pb-1.25 sm:text-center lg:w-45 lg:pt-2 lg:pb-1.5"
          >
            Contactar
          </a>
        </div>

        <Image
          alt=""
          src={exhibicion1}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[23vw] xl:w-[19vw]"
        />
      </div>

      <div className="hidden sm:flex">
        <Image
          alt=""
          src={exhibicion5}
          quality={100}
          placeholder="blur"
          className="hidden xl:block xl:w-[32%]"
        />

        <Image
          alt=""
          src={exhibicion4}
          quality={100}
          placeholder="blur"
          className="sm:w-[47%] xl:w-[29.8%]"
        />

        <Image
          alt=""
          src={exhibicion3}
          quality={100}
          placeholder="blur"
          className="sm:w-[26.5%] xl:w-[19.1%]"
        />

        <Image
          alt=""
          src={exhibicion2}
          quality={100}
          placeholder="blur"
          className="sm:w-[26.5%] xl:w-[19.1%]"
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
          className="text-6 w-25 rounded-full bg-[#CCCDCE] pt-1.5 pb-1.25 text-center"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
