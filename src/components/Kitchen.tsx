import Image from "next/image";
import cocina1 from "@/assets/images/cocina-1.jpg";
import cocina2 from "@/assets/images/cocina-2.jpg";
import cocina3 from "@/assets/images/cocina-3.jpg";
import cocina4 from "@/assets/images/cocina-4.jpg";
import cocina5 from "@/assets/images/cocina-5.jpg";
import cocina6 from "@/assets/images/cocina-6.jpg";

export function Kitchen() {
  return (
    <section id="cocina" className="section sm:justify-between">
      <div className="flex items-center justify-between">
        <p className="text-15 sm:text-20 md:text-26 mt-[8vh] mb-[10.57vh] ml-[10.76vw] w-26 font-bold sm:my-0 sm:w-36">
          Cocina de testeo
        </p>

        <div className="hidden sm:flex">
          <Image
            alt=""
            src={cocina3}
            quality={100}
            placeholder="blur"
            className="sm:w-[21vw]"
          />

          <Image
            alt=""
            src={cocina4}
            quality={100}
            placeholder="blur"
            className="sm:w-[21vw]"
          />
        </div>
      </div>

      <div className="flex sm:items-center">
        <Image
          alt=""
          src={cocina1}
          quality={100}
          placeholder="blur"
          className="w-[23.58vw] sm:hidden"
        />

        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="w-[23.58vw] sm:hidden"
        />

        <Image
          alt=""
          src={cocina5}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw]"
        />

        <Image
          alt=""
          src={cocina6}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw]"
        />

        <p className="text-7 sm:text-12 md:text-14 ml-7.5 w-25 sm:ml-17 sm:w-54">
          Nuestra cocina está equipada para el desarrollo de productos propios
          como, dashi, conservas y enlatados.
        </p>
      </div>

      <div className="ml-[26.66vw] flex sm:mr-[5.25vw] sm:ml-0 sm:items-center sm:justify-end">
        <Image
          alt=""
          src={cocina5}
          quality={100}
          placeholder="blur"
          className="w-[23.58vw] sm:hidden"
        />

        <Image
          alt=""
          src={cocina6}
          quality={100}
          placeholder="blur"
          className="w-[23.58vw] sm:hidden"
        />

        <p className="sm:text-10 md:text-11 hidden sm:mr-17 sm:block sm:w-45">
          Próximamente van a poder encontrar todos los productos online
        </p>

        <Image
          alt=""
          src={cocina1}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw]"
        />

        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw]"
        />
      </div>

      <div className="ml-[26.66vw] flex sm:hidden">
        <Image
          alt=""
          src={cocina3}
          quality={100}
          placeholder="blur"
          className="w-[23.58vw]"
        />

        <Image
          alt=""
          src={cocina4}
          quality={100}
          placeholder="blur"
          className="w-[23.58vw]"
        />
      </div>

      <p className="text-7 mt-7.5 ml-[26.66vw] w-29 sm:hidden">
        Próximamente van a poder encontrar todos los productos online
      </p>
    </section>
  );
}
