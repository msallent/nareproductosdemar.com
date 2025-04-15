import Image from "next/image";
import cocina1 from "@/assets/images/cocina-1.jpg";
import cocina2 from "@/assets/images/cocina-2.jpg";
import cocina3 from "@/assets/images/cocina-3.jpg";
import cocina4 from "@/assets/images/cocina-4.jpg";
import cocina5 from "@/assets/images/cocina-5.jpg";
import cocina6 from "@/assets/images/cocina-6.jpg";
import exhibicion1 from "@/assets/images/exhibicion-1.jpg";
import exhibicion2 from "@/assets/images/exhibicion-2.jpg";
import exhibicion3 from "@/assets/images/exhibicion-3.jpg";
import exhibicion4 from "@/assets/images/exhibicion-4.jpg";
import hero1 from "@/assets/images/hero-1.jpg";
import logoColor from "@/assets/images/logo-color.png";
import logoWhite from "@/assets/images/logo-white.png";
import procesos1 from "@/assets/images/procesos-1.jpg";
import procesos2 from "@/assets/images/procesos-2.jpg";
import procesos3 from "@/assets/images/procesos-3.jpg";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image
          alt=""
          priority
          src={hero1}
          className="h-[85vw] object-cover object-[35%_0%] sm:object-[38.5%_0%] lg:h-[66vw]"
        />

        <nav className="text-3xs xl:text-md absolute top-4.5 right-6 flex gap-1.5 font-medium text-white sm:top-8 sm:right-7 sm:gap-3 sm:text-sm md:top-10 md:right-9 lg:top-12 lg:right-20 lg:text-base xl:top-14 xl:right-28 2xl:text-lg">
          <a>About</a>
          <a>Contacto</a>
        </nav>

        <Image
          alt=""
          src={logoWhite}
          className="absolute bottom-10.5 left-7 w-17 sm:bottom-14 sm:left-13 sm:w-30 md:bottom-16 md:left-11 md:w-35 lg:bottom-11 lg:left-28 lg:w-40 xl:bottom-14 xl:left-36 xl:w-50 2xl:w-74"
        />
      </section>

      <section className="flex flex-col gap-10 pt-16 pb-9 sm:gap-28 sm:pt-27 sm:pb-12.5 lg:gap-40 lg:pt-40 xl:gap-45 xl:pt-50 xl:pb-16 2xl:gap-51 2xl:pt-67.5 2xl:pb-19">
        <div className="sm:text-md mx-auto flex w-40 flex-col gap-2 text-center text-xs font-bold sm:w-83 sm:gap-4 lg:w-110 lg:gap-5 lg:text-lg xl:w-138 xl:text-xl 2xl:text-2xl">
          <p>
            Somos una pescadería especializada en la manipulación, conservación
            y distribución de pescados y mariscos de alta calidad en Argentina.
          </p>

          <p>
            Trabajamos a diario en conjunto con pescadores responsables,
            garantizando frescura y trazabilidad.
          </p>
        </div>

        <div className="text-3xs xl:text-md flex justify-between px-12 sm:px-21.5 sm:text-sm lg:text-base xl:px-30 2xl:px-38 2xl:text-lg">
          <p>Buenos Aires</p>
          <p>Argentina</p>
        </div>
      </section>

      <section className="flex items-center justify-between gap-10 bg-[#CCCDCE] px-10 pt-17.5 pb-20.5 sm:gap-20 sm:px-25 sm:py-32.5 md:px-24 lg:px-30 lg:py-38 xl:px-40 xl:py-41 2xl:px-48 2xl:py-45">
        <p className="w-20 text-sm font-bold sm:w-40 sm:text-xl lg:w-48 lg:text-2xl xl:w-80 xl:text-3xl">
          Cuidados y procesos
        </p>

        <p className="lg:text-md w-48 shrink-0 text-xs sm:w-61.5 sm:text-base md:w-85 lg:w-110 xl:w-125 xl:text-lg">
          Retiramos escamas con métodos precisos para minimizar el daño de la
          piel y la carne, desangramos, retiramos las vísceras y almacenamos en
          nuestras cámaras en función de su tamaño, utilidad y fecha.
        </p>
      </section>

      <section className="relative flex">
        <p className="text-2xs lg:text-md absolute inset-x-0 inset-y-1/2 -translate-y-1/2 text-center font-bold text-white sm:text-base xl:text-lg 2xl:text-2xl">
          Manipulación, conservación y distribución de pescados y mariscos
        </p>

        <Image
          alt=""
          src={procesos1}
          className="w-1/2 sm:h-[83vw] sm:object-cover sm:object-right lg:h-[75vw]"
        />

        <Image
          alt=""
          src={procesos2}
          className="w-1/2 sm:h-[83vw] sm:object-cover sm:object-left lg:h-[75vw]"
        />
      </section>

      <section className="px-10 pt-13.5 pb-10 sm:px-14 sm:pt-46.5 sm:pb-22 lg:pt-54 lg:pb-28">
        <p className="w-18 text-sm font-bold sm:w-38 sm:text-xl lg:w-42 lg:text-2xl xl:w-72 xl:text-3xl">
          Cocina de testeo
        </p>
      </section>

      <section>
        <div className="flex">
          <Image alt="" src={cocina1} className="w-1/4" />
          <Image alt="" src={cocina2} className="w-1/4" />
          <Image alt="" src={cocina3} className="w-1/4" />
          <Image alt="" src={cocina4} className="w-1/4" />
        </div>

        <div className="flex">
          <Image alt="" src={cocina5} className="w-1/4" />
          <Image alt="" src={cocina6} className="w-1/4" />

          <div className="mx-auto flex w-32 flex-col gap-4 pt-12 sm:ml-14 sm:w-63.5 sm:pt-15 lg:ml-20 lg:w-72 lg:pt-20 xl:w-90">
            <p className="text-2xs sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Nuestra cocina está equipada para el desarrollo de productos
              propios como, dashi, conservas y enlatados.
            </p>

            <p className="text-3xs lg:text-md w-30 sm:w-46 sm:text-base lg:w-60 xl:w-74 xl:text-lg">
              Próximamente van a poder encontrar todos los productos online
            </p>
          </div>
        </div>

        <Image alt="" src={procesos3} />
      </section>

      <section>
        <div className="flex">
          <div className="flex w-[82.5%] gap-6 px-9 pt-12 sm:gap-9.5 sm:pt-22 sm:pr-7 sm:pl-25 lg:pt-40 lg:pr-18 lg:pl-30 xl:gap-12 xl:pt-50 xl:pr-16">
            <p className="sm:text-md w-22 text-sm font-bold sm:w-31 md:text-lg lg:w-55 lg:shrink-0 lg:text-2xl xl:w-90 xl:text-3xl">
              Sala de exhibiciones
            </p>

            <div className="flex flex-col gap-6 sm:gap-5.5 lg:gap-10 xl:gap-12">
              <p className="text-3xs lg:text-md sm:text-sm xl:text-lg">
                En la planta tenemos un salón para presentar productos, recibir
                clientes y también para disfrutar de colaboraciones con
                cocineros amigos
              </p>

              <button className="flex h-3 w-18 items-center rounded-sm bg-[#CCCDCE] px-1 sm:h-4 sm:w-24 sm:rounded-md sm:px-1.5 lg:h-7.5 lg:w-40 lg:rounded-xl lg:px-4 xl:w-45">
                <p className="text-4xs sm:text-2xs lg:text-sm">Contactar</p>
              </button>
            </div>
          </div>

          <Image alt="" src={exhibicion1} className="w-[27.5%] shrink-0" />
        </div>

        <div className="flex">
          <Image alt="" src={exhibicion2} className="w-[45%]" />
          <Image alt="" src={exhibicion3} className="w-[27.5%]" />
          <Image alt="" src={exhibicion4} className="w-[27.5%]" />
        </div>
      </section>

      <footer className="py-25 sm:py-28 lg:py-40 xl:py-55 2xl:py-70">
        <Image
          alt=""
          src={logoColor}
          className="mx-auto w-30 sm:w-45.5 lg:w-50 xl:w-60"
        />

        <div className="sm:text-md mx-auto mt-19 mb-29 flex w-43 flex-col gap-2 text-center text-xs font-light sm:mt-27 sm:mb-33 sm:w-73 sm:gap-5 lg:mt-32 lg:mb-40 lg:w-80 lg:gap-7 lg:text-lg xl:my-35 2xl:text-xl">
          <div>
            <p className="font-medium">Contacto</p>
            <p className="normal-case!">+541153473948</p>
            <p className="normal-case!">info@nareproductosdemar.com</p>
          </div>

          <div>
            <p className="font-medium">Ubicación</p>
            <p className="normal-case!">Villa Ortuzar, Buenos Aires</p>
          </div>

          <div>
            <p className="font-medium">Horarios de atención</p>
            <p className="normal-case!">Con cita previa de lunes a sábados</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="sm:text-md text-center text-xs font-medium lg:text-lg 2xl:text-xl">
            <p>Hola!</p>
            <p className="xl:text-md sm:text-sm sm:font-normal lg:text-base 2xl:text-lg">
              Estaremos en contacto
            </p>
          </div>

          <form className="mx-auto flex w-55 flex-col gap-3.5 sm:w-77 sm:gap-4.5 xl:w-100 xl:gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="xl:text-md h-5.5 rounded-md border border-[#1F2023] px-2 pt-0.5 text-xs sm:h-8 sm:rounded-lg sm:text-sm lg:text-base xl:h-10 xl:rounded-xl 2xl:text-lg"
            />

            <input
              type="email"
              placeholder="Mail"
              className="xl:text-md h-5.5 rounded-md border border-[#1F2023] px-2 pt-0.5 text-xs sm:h-8 sm:rounded-lg sm:text-sm lg:text-base xl:h-10 xl:rounded-xl 2xl:text-lg"
            />

            <input
              type="tel"
              placeholder="Telefono"
              className="xl:text-md h-5.5 rounded-md border border-[#1F2023] px-2 pt-0.5 text-xs sm:h-8 sm:rounded-lg sm:text-sm lg:text-base xl:h-10 xl:rounded-xl 2xl:text-lg"
            />

            <textarea
              rows={5}
              placeholder="Consulta"
              className="xl:text-md resize-none rounded-md border border-[#1F2023] px-2 pt-2 text-xs sm:text-sm lg:text-base xl:rounded-xl 2xl:text-lg"
            />

            <button
              type="submit"
              className="lg:text-md mx-auto mt-5.5 h-5.5 w-31.5 rounded-md bg-[#CCCDCE] pt-0.5 text-xs sm:h-8 sm:w-44 sm:rounded-lg sm:text-base lg:w-50 lg:rounded-xl xl:mt-11 xl:h-10 xl:w-60 xl:rounded-2xl"
            >
              Enviar
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
