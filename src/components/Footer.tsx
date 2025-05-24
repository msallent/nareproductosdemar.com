export function Footer() {
  return (
    <section id="footer" className="section">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <div className="text-6 text-center font-medium">
            <p>Hola!</p>
            <p>Estaremos en contacto</p>
          </div>

          <form className="flex w-43 flex-col gap-3.5">
            <input
              type="text"
              placeholder="Nombre"
              className="text-6 rounded-md border border-black px-2 py-1.5"
            />

            <input
              type="email"
              placeholder="Mail"
              className="text-6 rounded-md border border-black px-2 py-1.5"
            />

            <input
              type="tel"
              placeholder="Telefono"
              className="text-6 rounded-md border border-black px-2 py-1.5"
            />

            <textarea
              rows={5}
              placeholder="Consulta"
              className="text-6 resize-none rounded-md border border-black px-2 py-1.5"
            />

            <p className="text-6 mx-auto mt-5 w-25 rounded-full bg-[#CCCDCE] py-1.5 text-center">
              Enviar
            </p>
          </form>
        </div>

        <footer className="flex items-center justify-center gap-4 bg-[#CCCDCE] pt-12.5 pb-9.5">
          <a href="https://instagram.com/nareproductosdemar" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4.5 w-4.5 rounded-sm bg-black fill-[#CCCDCE] p-0.5"
            >
              <path d="M8 3C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5V8c0-2.8-2.2-5-5-5H8zm0 2h8c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3zm9 1c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-5 1c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z" />
            </svg>
          </a>

          <a href="https://wa.me/+5491153473948" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4.5 w-4.5 rounded-sm bg-black fill-[#CCCDCE] p-0.5"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.2c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10 0-2.7-1-5.2-2.9-7.1C17.2 3 14.7 2 12 2zm0 2c2.1 0 4.1.8 5.7 2.3C19.2 7.9 20 9.9 20 12c0 4.4-3.6 8-8 8-1.3 0-2.7-.3-3.8-1l-.7-.4-.7.2-2 .5.5-1.8.2-.8-.4-.7C4.4 14.8 4 13.4 4 12c0-4.4 3.6-8 8-8zM8.5 7.4c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.2.2 1.8 2.8 4.3 3.8 2.1.8 2.5.6 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.3-1.4-.1-.1-.2-.2-.5-.3-.2-.1-1.4-.7-1.7-.8-.3-.1-.4-.2-.6.1-.2.3-.7.8-.8 1-.1.2-.2.2-.5.1-.2-.1-1-.3-2-1.2-.8-.6-1.3-1.4-1.4-1.7-.2-.2 0-.4.1-.5l.4-.4c.1-.1.1-.3.2-.4.1-.1.1-.2 0-.4s-.6-1.4-.8-1.9c-.2-.4-.4-.4-.6-.4h-.5z" />
            </svg>
          </a>

          <a href="https://x.com/nareproductos" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="h-4.5 w-4.5 rounded-sm bg-black fill-[#CCCDCE] p-0.5"
            >
              <path d="m26.37 26-8.795-12.822.015.012L25.52 4h-2.65l-6.46 7.48L11.28 4H4.33l8.211 11.971-.001-.001L3.88 26h2.65l7.182-8.322L19.42 26h6.95zM10.23 6l12.34 18h-2.1L8.12 6h2.11z" />
            </svg>
          </a>
        </footer>
      </div>
    </section>
  );
}
