export function About() {
  return (
    <section id="about" className="section">
      <section className="relative flex-1 sm:basis-[55%] 2xl:basis-3/5">
        <div className="text-8 sm:text-12 lg:text-14 2xl:text-20 absolute inset-x-1/2 top-[45%] w-49 -translate-1/2 text-center font-bold sm:w-72 lg:w-84 2xl:w-142">
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

        <div className="text-6 sm:text-8 lg:text-10 2xl:text-16 absolute inset-x-[8.2%] bottom-[11.42%] flex justify-between sm:inset-x-1/2 sm:w-2/3 sm:-translate-x-1/2 lg:w-127 2xl:inset-x-[9.7%] 2xl:w-auto 2xl:translate-none">
          <p>Buenos Aires</p>
          <p>Argentina</p>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center bg-[#CCCDCE] sm:basis-[45%] 2xl:basis-2/5">
        <div className="flex gap-10 sm:gap-30 lg:gap-60 2xl:gap-85">
          <p className="text-10 sm:text-16 lg:text-20 2xl:text-40 w-20 font-bold sm:w-32 lg:w-40 2xl:w-80">
            Cuidados y procesos
          </p>

          <p className="text-7 sm:text-10 lg:text-11 2xl:text-16 w-46 sm:w-56 lg:w-61.5 2xl:w-123">
            Retiramos escamas con métodos precisos para minimizar el daño de la
            piel y la carne, desangramos, retiramos las vísceras y almacenamos
            en nuestras cámaras en función de su tamaño, utilidad y fecha.
          </p>
        </div>
      </section>
    </section>
  );
}
