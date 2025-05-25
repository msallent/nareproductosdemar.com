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
      className="section sm:justify-between xl:justify-start"
    >
      <div className="flex items-center justify-between">
        <p className="text-15 sm:text-20 xl:text-32 2xl:text-40 lg:text-24 mt-[8vh] mb-[10.57vh] ml-[10.76vw] w-26 font-bold sm:my-0 sm:w-36 lg:w-42 xl:ml-[7.25vw] xl:w-56 2xl:w-70">
          Cocina de testeo
        </p>

        <div className="hidden sm:flex xl:relative">
          <Image
            alt=""
            src={cocina3}
            quality={100}
            placeholder="blur"
            className="sm:w-[21vw] md:w-[16.5vw] xl:w-[14.37vw]"
          />

          <Image
            alt=""
            src={cocina4}
            quality={100}
            placeholder="blur"
            className="sm:w-[21vw] md:w-[16.5vw] xl:w-[14.37vw]"
          />

          <div className="hidden xl:absolute xl:top-full xl:mt-24 xl:flex xl:flex-col xl:gap-6 2xl:mt-33 2xl:gap-10">
            <p className="xl:text-16 2xl:text-24 xl:w-54 2xl:w-80">
              Nuestra cocina está equipada para el desarrollo de productos
              propios como, dashi, conservas y enlatados.
            </p>

            <p className="xl:text-12 2xl:text-16 xl:w-60 2xl:w-75">
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
          className="hidden sm:block xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina6}
          quality={100}
          placeholder="blur"
          className="hidden xl:block xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina1}
          quality={100}
          placeholder="blur"
          className="hidden xl:block xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="hidden xl:block xl:w-[14.37vw]"
        />

        <p className="text-7 sm:text-12 lg:text-14 ml-7.5 w-25 sm:ml-17 sm:w-54 lg:ml-[17vw] lg:w-68 xl:hidden">
          Nuestra cocina está equipada para el desarrollo de productos propios
          como, dashi, conservas y enlatados.
        </p>
      </div>

      <div className="ml-[26.66vw] flex sm:mr-[5.25vw] sm:ml-0 sm:items-center sm:justify-end lg:mr-[16.5vw] xl:hidden">
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
          className="hidden sm:block sm:w-[21vw] md:w-[16.5vw] xl:w-[14.37vw]"
        />

        <Image
          alt=""
          src={cocina2}
          quality={100}
          placeholder="blur"
          className="hidden sm:block sm:w-[21vw] md:w-[16.5vw] xl:w-[14.37vw]"
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
