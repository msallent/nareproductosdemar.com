import Image from "next/image";
import procesos3 from "@/assets/images/procesos-3.jpg";

export function Gallery() {
  return (
    <section id="galeria" className="section">
      <Image
        fill
        alt=""
        src={procesos3}
        quality={100}
        placeholder="blur"
        className="object-cover object-[76.5%]"
      />

      <p className="text-15 absolute bottom-[38.57vh] left-[9.74vw] w-34 font-bold text-white">
        Sala de exhibiciones
      </p>
    </section>
  );
}
