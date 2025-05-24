import Image from "next/image";
import hero1 from "@/assets/images/hero-1.jpg";
import logoWhite from "@/assets/images/logo-white.png";

export function Hero() {
  return (
    <section id="hero" className="section">
      <Image
        fill
        alt=""
        priority
        src={hero1}
        quality={100}
        placeholder="blur"
        className="object-cover"
      />

      <nav className="text-10 absolute top-10 right-5 flex gap-2 font-medium text-white">
        <a href="#about">About</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <Image
        alt=""
        src={logoWhite}
        quality={100}
        placeholder="blur"
        className="absolute bottom-17.5 left-11 w-26"
      />
    </section>
  );
}
