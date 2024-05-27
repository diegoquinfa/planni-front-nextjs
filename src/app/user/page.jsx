const Page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:py-10">
      <div className="flex flex-col">
        <p>Usuario</p>
        <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
        <div className="flex flex-row">
          <div className="flex w-[50%]">
            <div className="flex flex-col gap-3 md:w-[50%] md:p-6">
              <button className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                favorito
              </button>
              <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                Ver datos
              </button>
              <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                actualizar informacíon
              </button>
              <div className=" w-full pt-8">
                <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                  Eliminar cuenta
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex- min-h-96 w-[60%] rounded-3xl bg-white p-6">
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 md:px-5 md:py-3 lg:w-[50%]">
              <h2 className="text-center text-xl font-bold md:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </h2>
              <div className="flex md:h-[300px] md:w-full">
                <img
                  className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
                  src="img\destino-cartagena.jpg"
                  alt="destino"
                />
              </div>
              <h2 className="text-center font-bold max-sm:text-xl sm:text-2xl">
                $ 1.000.000
              </h2>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 md:px-5 md:py-3 lg:w-[50%]">
              <h2 className="text-center text-xl font-bold md:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </h2>
              <div className="flex md:h-[300px] md:w-full">
                <img
                  className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
                  src="img\destino-cartagena.jpg"
                  alt="destino"
                />
              </div>
              <h2 className="text-center font-bold max-sm:text-xl sm:text-2xl">
                $ 1.000.000
              </h2>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
