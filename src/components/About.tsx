export function About() {
  return (
    <section id="about" className="section">
      <section className="relative flex-1 sm:basis-[55%]">
        <div className="text-8 sm:text-12 md:text-14 absolute inset-x-1/2 top-[45%] w-49 -translate-1/2 text-center font-bold sm:w-72 md:w-84">
          <p>
            Somos una pescadería especializada en la manipulación, conservación
            y distribución de pescados y mariscos de alta calidad en Argentina.
          </p>

          <br />

          <p>
            Trabajamos a diario en conjunto con pescadores responsables,
            garantizando frescura y trazabilidad.
          </p>
        </div>

        <div className="text-6 sm:text-8 md:text-10 absolute inset-x-[8.2%] bottom-[11.42%] flex justify-between sm:inset-x-1/2 sm:w-2/3 sm:-translate-x-1/2">
          <p>Buenos Aires</p>
          <p>Argentina</p>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center bg-[#CCCDCE] sm:basis-[45%]">
        <div className="flex gap-10 sm:gap-30 md:gap-60">
          <p className="text-10 sm:text-16 md:text-20 w-20 font-bold sm:w-32 md:w-40">
            Cuidados y procesos
          </p>

          <p className="text-7 sm:text-10 md:text-11 w-46 sm:w-56 md:w-61.5">
            Retiramos escamas con métodos precisos para minimizar el daño de la
            piel y la carne, desangramos, retiramos las vísceras y almacenamos
            en nuestras cámaras en función de su tamaño, utilidad y fecha.
          </p>
        </div>
      </section>
    </section>
  );
}
