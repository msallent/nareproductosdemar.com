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
      <section className="relative h-84 overflow-hidden sm:h-145">
        <Image
          priority
          alt=""
          src={hero1}
          className="absolute left-[calc(50%_+_1rem)] -z-10 h-full w-auto max-w-none -translate-x-1/2 sm:left-[calc(50%_+_1.25rem)]"
        />

        <nav className="text-3xs absolute top-4.5 right-6 flex gap-1.5 font-medium text-white sm:top-8 sm:right-7 sm:gap-3 sm:text-sm">
          <a>About</a>
          <a>Contacto</a>
        </nav>

        <Image
          alt=""
          src={logoWhite}
          className="absolute bottom-10.5 left-7 w-17 sm:bottom-14 sm:left-13 sm:w-30"
        />
      </section>

      <section className="flex flex-col gap-10 pt-16 pb-9 sm:gap-28 sm:pt-27 sm:pb-12.5">
        <div className="sm:text-md mx-auto flex w-40 flex-col gap-2 text-center text-xs font-bold sm:w-83 sm:gap-4">
          <p>
            Somos una pescadería especializada en la manipulación, conservación
            y distribución de pescados y mariscos de alta calidad en Argentina.
          </p>

          <p>
            Trabajamos a diario en conjunto con pescadores responsables,
            garantizando frescura y trazabilidad.
          </p>
        </div>

        <div className="text-3xs flex justify-between px-12 sm:px-21.5 sm:text-sm">
          <p>Buenos Aires</p>
          <p>Argentina</p>
        </div>
      </section>

      <section className="flex items-center gap-10 bg-[#CCCDCE] px-10 pt-17.5 pb-20.5 sm:gap-20 sm:px-25 sm:py-32.5">
        <p className="w-20 text-sm font-bold sm:w-40 sm:text-xl">
          Cuidados y procesos
        </p>

        <p className="w-48 shrink-0 text-xs sm:w-61.5 sm:text-base">
          Retiramos escamas con métodos precisos para minimizar el daño de la
          piel y la carne, desangramos, retiramos las vísceras y almacenamos en
          nuestras cámaras en función de su tamaño, utilidad y fecha.
        </p>
      </section>

      <section className="relative flex">
        <p className="text-2xs absolute inset-x-0 inset-y-1/2 -translate-y-1/2 text-center font-bold text-white sm:text-sm">
          Manipulación, conservación y distribución de pescados y mariscos
        </p>

        <Image
          alt=""
          src={procesos1}
          className="w-1/2 sm:h-143 sm:w-auto sm:max-w-1/2 sm:object-cover sm:object-right"
        />
        <Image
          alt=""
          src={procesos2}
          className="w-1/2 sm:h-143 sm:w-auto sm:max-w-1/2 sm:object-cover sm:object-left"
        />
      </section>

      <section className="px-10 pt-13.5 pb-10 sm:px-14 sm:pt-46.5 sm:pb-22">
        <p className="w-18 text-sm font-bold sm:w-38 sm:text-xl">
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

          <div className="mx-auto flex w-32 flex-col gap-4 pt-12 sm:ml-14 sm:w-63.5 sm:pt-15">
            <p className="text-2xs sm:text-md">
              Nuestra cocina está equipada para el desarrollo de productos
              propios como, dashi, conservas y enlatados.
            </p>

            <p className="text-3xs w-30 sm:w-46 sm:text-base">
              Próximamente van a poder encontrar todos los productos online
            </p>
          </div>
        </div>
      </section>

      <section>
        <Image alt="" src={procesos3} />
      </section>

      <section>
        <div className="flex">
          <div className="flex w-3/4 gap-6 px-9 pt-12 sm:gap-9.5 sm:pt-22 sm:pr-12 sm:pl-25">
            <p className="sm:text-md w-22 text-sm font-bold sm:w-31">
              Sala de exhibiciones
            </p>

            <div className="flex flex-col gap-6 sm:gap-5.5">
              <p className="text-3xs sm:text-sm">
                En la planta tenemos un salón para presentar productos, recibir
                clientes y también para disfrutar de colaboraciones con
                cocineros amigos
              </p>

              <button className="flex h-3 w-18 items-center rounded-sm bg-[#CCCDCE] px-1 sm:h-4 sm:w-24 sm:rounded-md sm:px-1.5">
                <p className="text-4xs sm:text-2xs">Contactar</p>
              </button>
            </div>
          </div>

          <Image alt="" src={exhibicion1} className="h-34 w-1/4 sm:h-60" />
        </div>

        <div className="flex">
          <Image alt="" src={exhibicion2} className="h-39 w-1/2 sm:h-69" />
          <Image alt="" src={exhibicion3} className="h-39 w-1/4 sm:h-69" />
          <Image alt="" src={exhibicion4} className="h-39 w-1/4 sm:h-69" />
        </div>
      </section>

      <footer className="py-25 sm:py-28">
        <Image alt="" src={logoColor} className="mx-auto w-30 sm:w-45.5" />

        <div className="sm:text-md mx-auto mt-19 mb-29 flex w-43 flex-col gap-2 text-center text-xs font-light sm:mt-27 sm:mb-33 sm:w-73 sm:gap-5">
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
          <div className="sm:text-md text-center text-xs font-medium">
            <p>Hola!</p>
            <p className="sm:text-sm sm:font-normal">Estaremos en contacto</p>
          </div>

          <form className="mx-auto flex w-55 flex-col gap-3.5 sm:w-77 sm:gap-4.5">
            <input
              type="text"
              placeholder="Nombre"
              className="h-5.5 rounded-md border border-[#1F2023] px-2 pt-0.5 text-xs sm:h-8 sm:rounded-lg sm:text-sm"
            />

            <input
              type="email"
              placeholder="Mail"
              className="h-5.5 rounded-md border border-[#1F2023] px-2 pt-0.5 text-xs sm:h-8 sm:rounded-lg sm:text-sm"
            />

            <input
              type="tel"
              placeholder="Telefono"
              className="h-5.5 rounded-md border border-[#1F2023] px-2 pt-0.5 text-xs sm:h-8 sm:rounded-lg sm:text-sm"
            />

            <textarea
              rows={5}
              placeholder="Consulta"
              className="resize-none rounded-md border border-[#1F2023] px-2 pt-2 text-xs sm:text-sm"
            />

            <button
              type="submit"
              className="mx-auto mt-5.5 h-5.5 w-31.5 rounded-md bg-[#CCCDCE] pt-0.5 text-xs sm:h-8 sm:w-44 sm:rounded-lg sm:text-base"
            >
              Enviar
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
