import Image from "next/image";
import cocina1 from "@/assets/images/cocina-1.jpg";
import cocina2 from "@/assets/images/cocina-2.jpg";
import cocina3 from "@/assets/images/cocina-3.jpg";
import cocina4 from "@/assets/images/cocina-4.jpg";
import cocina5 from "@/assets/images/cocina-5.jpg";
import cocina6 from "@/assets/images/cocina-6.jpg";

export function Kitchen() {
  return (
    <section className="section">
      <p className="text-15 mt-14 mb-18.5 ml-10.5 w-26 font-bold">
        Cocina de testeo
      </p>

      <div className="flex">
        <Image
          alt=""
          src={cocina1}
          quality={100}
          placeholder="blur"
          className="w-23"
        />
        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="w-23"
        />

        <p className="text-7 ml-7.5 w-25">
          Nuestra cocina está equipada para el desarrollo de productos propios
          como, dashi, conservas y enlatados.
        </p>
      </div>

      <div className="ml-26 flex">
        <Image
          alt=""
          src={cocina5}
          quality={100}
          placeholder="blur"
          className="w-23"
        />
        <Image
          alt=""
          src={cocina6}
          quality={100}
          placeholder="blur"
          className="w-23"
        />
      </div>

      <div className="ml-26 flex">
        <Image
          alt=""
          src={cocina3}
          quality={100}
          placeholder="blur"
          className="w-23"
        />
        <Image
          alt=""
          src={cocina4}
          quality={100}
          placeholder="blur"
          className="w-23"
        />
      </div>

      <p className="text-7 mt-7.5 ml-26 w-29">
        Próximamente van a poder encontrar todos los productos online
      </p>
    </section>
  );
}
