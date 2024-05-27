const Page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:py-10">
      <div className="flex flex-col">
        <p>Adimistrador</p>
        <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
        <div className="flex flex-row">
          <div className="flex w-[50%]">
            <div className="flex flex-col gap-3 md:w-[50%] md:p-6">
              <button className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                paquetes
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
          <div className="grid min-h-96 w-[60%] grid-cols-2 rounded-3xl bg-white p-6">
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 md:px-5 md:py-3">
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
              <div className="flex w-full justify-center">
                <button className="rounded-3xl bg-brand py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900 md:px-10">
                  Editar
                </button>

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-white p-7">
                    <div className="flex flex-col gap-8">
                      <form action="" className="flex flex-row gap-10">
                        <div className="flex flex-col gap-8">
                          <h2 className="text-center text-2xl font-bold">
                            Hotel
                          </h2>
                          <div>
                            <h2 className="text-xl font-bold">
                              Titulo de hotel
                            </h2>
                            <input
                              type="text"
                              name="titulo"
                              id="titulo"
                              placeholder="Hotel..."
                              className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">Precio</h2>
                            <input
                              type="number"
                              name="precio"
                              id="precios"
                              placeholder="100.000"
                              className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">Descripción</h2>
                            <textarea
                              name="Descirpcion"
                              id="Descirpcion"
                              className="h-28 w-full rounded-lg border-2 border-slate-400"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">Imagen</h2>
                            <input
                              type="text"
                              name="titulo"
                              id="titulo"
                              placeholder="Hotel..."
                              className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-8">
                          <h2 className="text-center text-2xl font-bold">
                            Restaurante
                          </h2>
                          <div>
                            <h2 className="text-xl font-bold">
                              Titulo de restaurante
                            </h2>
                            <input
                              type="text"
                              name="titulo"
                              id="titulo"
                              placeholder="Hotel..."
                              className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">Precio</h2>
                            <input
                              type="number"
                              name="precio"
                              id="precios"
                              placeholder="100.000"
                              className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">Descripción</h2>
                            <textarea
                              name="Descirpcion"
                              id="Descirpcion"
                              className="h-28 w-full rounded-lg border-2 border-slate-400"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-8">
                          <h2 className="text-center text-2xl font-bold">
                            Atracciones
                          </h2>
                          <div className="flex flex-row gap-8">
                            <div className="flex flex-col gap-8">
                              <div>
                                <h2 className="text-xl font-bold">Titulo</h2>
                                <input
                                  type="text"
                                  name="titulo"
                                  id="titulo"
                                  placeholder="Hotel..."
                                  className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                                />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold">Precio</h2>
                                <input
                                  type="number"
                                  name="precio"
                                  id="precios"
                                  placeholder="100.000"
                                  className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                                />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold">
                                  Descripción
                                </h2>
                                <textarea
                                  name="Descirpcion"
                                  id="Descirpcion"
                                  className="h-28 w-full rounded-lg border-2 border-slate-400"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-8">
                              <div>
                                <h2 className="text-xl font-bold">Titulo</h2>
                                <input
                                  type="text"
                                  name="titulo"
                                  id="titulo"
                                  placeholder="Hotel..."
                                  className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                                />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold">Precio</h2>
                                <input
                                  type="number"
                                  name="precio"
                                  id="precios"
                                  placeholder="100.000"
                                  className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                                />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold">
                                  Descripción
                                </h2>
                                <textarea
                                  name="Descirpcion"
                                  id="Descirpcion"
                                  className="h-28 w-full rounded-lg border-2 border-slate-400"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <h2 className="text-center text-xl font-bold md:text-2xl">
                        ¿Deseas actualizar?
                      </h2>
                      <div className="flex w-full flex-row justify-around gap-3">
                        <button className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                          Cancelar
                        </button>
                        <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                          Aceptar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
