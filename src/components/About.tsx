export function About() {
  return (
    <section id="about" className="section">
      <section className="relative flex-1">
        <div className="text-8 absolute inset-x-1/2 top-[45%] w-49 -translate-1/2 text-center font-bold">
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

        <div className="text-6 absolute inset-x-8 bottom-10 flex justify-between">
          <p>Buenos Aires</p>
          <p>Argentina</p>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center bg-[#CCCDCE]">
        <div className="flex gap-10">
          <p className="text-10 w-20 font-bold">Cuidados y procesos</p>

          <p className="text-7 w-46">
            Retiramos escamas con métodos precisos para minimizar el daño de la
            piel y la carne, desangramos, retiramos las vísceras y almacenamos
            en nuestras cámaras en función de su tamaño, utilidad y fecha.
          </p>
        </div>
      </section>
    </section>
  );
}
