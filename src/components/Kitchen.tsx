import Image from "next/image";
import cocina1 from "@/assets/images/cocina-1.jpg";
import cocina2 from "@/assets/images/cocina-2.jpg";
import cocina3 from "@/assets/images/cocina-3.jpg";
import cocina4 from "@/assets/images/cocina-4.jpg";
import cocina5 from "@/assets/images/cocina-5.jpg";
import cocina6 from "@/assets/images/cocina-6.jpg";

export function Kitchen() {
  return (
    <section
      id="cocina"
      className="section sm:justify-between 2xl:justify-start"
    >
      <div className="flex items-center justify-between">
        <p className="text-15 sm:text-20 2xl:text-40 lg:text-24 mt-[8vh] mb-[10.57vh] ml-[10.76vw] w-26 font-bold sm:my-0 sm:w-36 lg:w-42 2xl:ml-[7.25vw] 2xl:w-70">
          Cocina de testeo
        </p>

        <div className="hidden sm:flex 2xl:relative">
          <Image
            alt=""
            src={cocina3}
            quality={100}
            placeholder="blur"
            className="sm:w-[21vw] md:w-[16.5vw] 2xl:w-[14.37vw]"
          />

          <Image
            alt=""
            src={cocina4}
            quality={100}
            placeholder="blur"
            className="sm:w-[21vw] md:w-[16.5vw] 2xl:w-[14.37vw]"
          />

          <div className="hidden 2xl:absolute 2xl:top-full 2xl:mt-33 2xl:flex 2xl:flex-col 2xl:gap-10">
            <p className="2xl:text-24 2xl:w-80">
              Nuestra cocina está equipada para el desarrollo de productos
              propios como, dashi, conservas y enlatados.
            </p>

            <p className="2xl:text-16 2xl:w-75">
              Próximamente van a poder encontrar todos los productos online
            </p>
          </div>
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
          className="hidden sm:block 2xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina6}
          quality={100}
          placeholder="blur"
          className="hidden 2xl:block 2xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina1}
          quality={100}
          placeholder="blur"
          className="hidden 2xl:block 2xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="hidden 2xl:block 2xl:w-[14.37vw]"
        />

        <p className="text-7 sm:text-12 lg:text-14 ml-7.5 w-25 sm:ml-17 sm:w-54 lg:ml-[17vw] lg:w-68 2xl:hidden">
          Nuestra cocina está equipada para el desarrollo de productos propios
          como, dashi, conservas y enlatados.
        </p>
      </div>

      <div className="ml-[26.66vw] flex sm:mr-[5.25vw] sm:ml-0 sm:items-center sm:justify-end lg:mr-[16.5vw] 2xl:hidden">
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

        <p className="sm:text-10 lg:text-11 hidden sm:mr-17 sm:block sm:w-45 lg:mr-[23vw] lg:w-46">
          Próximamente van a poder encontrar todos los productos online
        </p>

        <Image
          alt=""
          src={cocina1}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw] md:w-[16.5vw] 2xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw] md:w-[16.5vw] 2xl:w-[14.37vw]"
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
