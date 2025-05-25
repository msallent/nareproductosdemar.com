import Image from "next/image";
import procesos1 from "@/assets/images/procesos-1.jpg";
import procesos2 from "@/assets/images/procesos-2.jpg";

export function About2() {
  return (
    <section id="about2" className="section">
      <p className="text-11 sm:text-12 lg:text-14 absolute inset-1/2 z-10 w-56 -translate-1/2 text-center font-bold text-white sm:w-80 lg:w-full">
        Manipulación, conservación y distribución de pescados y mariscos
      </p>

      <div className="flex h-full">
        <div className="relative w-1/3 sm:w-1/2">
          <Image
            fill
            alt=""
            src={procesos1}
            quality={100}
            placeholder="blur"
            className="object-cover"
          />
        </div>

        <div className="relative w-2/3 sm:w-1/2">
          <Image
            fill
            alt=""
            src={procesos2}
            quality={100}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
