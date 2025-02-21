import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <main className="relative h-full max-h-full overflow-hidden flex flex-col justify-center items-center bg-[url(/background.jpg)] bg-cover bg-bottom bg-no-repeat">
      <Image src={logo} alt="Nare Productos de Mar" className="w-72" priority />

      <section className="absolute bottom-[5%] right-[3%] flex flex-col justify-end items-end lg:bottom-[15%]">
        <div className="flex flex-col text-right text-white tracking-[2.24px] uppercase">
          <p className="font-medium">Próximamente</p>
          <p className="font-light">Buenos Aires, Argentina</p>
        </div>
      </section>
    </main>
  );
}
