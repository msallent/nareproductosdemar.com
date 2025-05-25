import Image from "next/image";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import logo from "@/assets/images/logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
} from "@/components/ui/carousel";

const HERO_IMAGES = [hero1, hero2, hero3];

export function Hero() {
  return (
    <section id="hero" className="section">
      <Carousel>
        <CarouselContent>
          {HERO_IMAGES.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                fill
                alt=""
                src={image}
                quality={100}
                placeholder="blur"
                className="object-cover"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselProgress />
      </Carousel>

      <nav className="text-10 sm:text-12 absolute top-[5.71vh] right-[5.12vw] flex gap-2 font-medium text-white lg:right-[7.32vw]">
        <a href="#about">About</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <Image
        alt=""
        src={logo}
        quality={100}
        placeholder="blur"
        className="absolute bottom-[10vh] left-[11.28vw] w-26 sm:w-34 lg:bottom-[9vh] lg:left-[8vw] lg:w-43"
      />
    </section>
  );
}
