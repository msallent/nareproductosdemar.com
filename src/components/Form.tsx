"use client";

import { useForm } from "@formspree/react";

export function Form() {
  const [state, handleSubmit, reset] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID as string,
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      await handleSubmit(event);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        reset();
      }, 1000);
    }
  };

  return (
    <form
      key={String(state.succeeded)}
      onSubmit={onSubmit}
      className="flex w-43 flex-col gap-3.5 sm:w-70 lg:w-90 lg:gap-5"
    >
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        className="text-6 sm:text-10 lg:text-13 rounded-md border border-black px-2 py-1.5 placeholder:uppercase lg:rounded-xl lg:px-3 lg:py-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Mail"
        className="text-6 sm:text-10 lg:text-13 rounded-md border border-black px-2 py-1.5 placeholder:uppercase lg:rounded-xl lg:px-3 lg:py-2"
      />

      <input
        type="tel"
        name="telefono"
        placeholder="Telefono"
        className="text-6 sm:text-10 lg:text-13 rounded-md border border-black px-2 py-1.5 placeholder:uppercase lg:rounded-xl lg:px-3 lg:py-2"
      />

      <textarea
        rows={5}
        name="consulta"
        placeholder="Consulta"
        className="text-6 sm:text-10 lg:text-13 resize-none rounded-md border border-black px-2 py-1.5 placeholder:uppercase lg:rounded-xl lg:px-3 lg:py-2"
      />

      <input
        name="subject"
        type="hidden"
        value="Nuevo contacto de {{ name }}"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="text-6 sm:text-11 lg:text-15 lb:pb-2 mx-auto mt-5 w-25 cursor-pointer rounded-full bg-[#CCCDCE] pt-1.5 pb-1.25 text-center uppercase sm:w-40 sm:pt-2 sm:pb-1.5 lg:mt-10 lg:w-60 lg:rounded-2xl lg:pt-2.5"
      >
        {state.submitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
