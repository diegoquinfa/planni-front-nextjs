const page = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="flex h-screen flex-col-reverse items-center justify-center gap-5 md:flex-row md:gap-12">
        <div className="flex justify-center w-full md:w-auto h-full bg-white rounded-t-3xl md:rounded-none">
          <form className="flex flex-col items-center justify-center gap-7 p-4 w-[90%] md:w-[90%]">
            <h2 className="w-fit justify-center text-3xl font-extrabold text-brand">
              Crear cuenta
            </h2>
            <div className="w-full ">
              <p className="inline rounded-tl-lg rounded-tr-lg font-bold bg-[#f1f1f1] px-1">
                Correo electronico
              </p>
              <input
                id="email"
                type="email"
                placeholder="Example@gmail.com"
                className="w-full rounded-bl-lg rounded-br-lg rounded-tr-lg bg-[#f1f1f1] px-2 py-1 outline-none"
              />
            </div>
            <div className="w-full">
              <p className=" inline rounded-tl-lg rounded-tr-lg font-bold bg-[#f1f1f1] px-1">
                Contraseña
              </p>
              <input
                id="password"
                type="password"
                placeholder="*****"
                className="w-full rounded-bl-lg rounded-br-lg rounded-tr-lg bg-[#f1f1f1] px-2 py-1 outline-none"
              />
            </div>
            <div className="w-full">
              <p className=" inline rounded-tl-lg rounded-tr-lg font-bold bg-[#f1f1f1] px-1">
                Repite la contraseña
              </p>
              <input
                id="password"
                type="password"
                placeholder="*****"
                className="w-full rounded-bl-lg rounded-br-lg rounded-tr-lg bg-[#f1f1f1] px-2 py-1 outline-none"
              />
            </div>
            <button className=" rounded-lg bg-[#D9D9D9] px-6 py-1 font-extrabold hover:bg-neutral-400">
              Continua con Google
            </button>
            <p>
              ¿Ya tienes cuenta? -{' '}
              <a href="/login" className="text-brand hover:underline">
                Inicia sesión
              </a>
            </p>
            <button
              type="submit"
              className="rounded-lg bg-brand px-6 py-1 font-extrabold text-white hover:bg-red-800"
            >
              Crear cuenta
            </button>
          </form>
        </div>
        <img
          src="logo.svg"
          alt="logo"
          className="h-[210px] m-4 md:h-[300px] lg:h-[400px] xl:h-[500px]"
        />
      </div>
    </div>
  )
}

export default page
