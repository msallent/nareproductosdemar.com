import Image from "next/image";
import exhibicion1 from "@/assets/images/exhibicion-1.jpg";
import exhibicion2 from "@/assets/images/exhibicion-2.jpg";
import exhibicion3 from "@/assets/images/exhibicion-3.jpg";
import exhibicion4 from "@/assets/images/exhibicion-4.jpg";
import exhibicion5 from "@/assets/images/exhibicion-5.jpg";

export function Gallery2() {
  return (
    <section id="galeria2" className="section">
      <p className="text-8 my-[8.57vh] ml-[9.74vw] w-50">
        En la planta tenemos un salón para presentar productos, recibir clientes
        y también para disfrutar de colaboraciones con cocineros amigos.
      </p>

      <div className="flex">
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

      <div className="flex">
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

      <div className="flex flex-1 items-center justify-center">
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
