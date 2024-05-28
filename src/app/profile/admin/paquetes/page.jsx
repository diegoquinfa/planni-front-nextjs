import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

const Page = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2">
      <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-4">
        <h2 className="text-center text-xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing
        </h2>
        <div className="flex md:h-[200px] md:w-full">
          <img
            className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
            src="img\cartagena.jpg"
            alt="destino"
          />
        </div>
        <h2 className="text-center font-bold max-sm:text-xl sm:text-2xl">
          $ 1.000.000
        </h2>
        <div className="flex justify-around">
          <AlertDialog>
            <AlertDialogTrigger className=" rounded-3xl bg-brand px-4 py-1 text-white duration-300 hover:bg-brand-light hover:bg-red-900 md:px-7 md:py-2">
              Editar
            </AlertDialogTrigger>
            <AlertDialogContent className="p-10">
              <AlertDialogHeader className="flex">
                <AlertDialogDescription className="flex">
                  <form action="" className="flex flex-row gap-10">
                    <div className="flex flex-col gap-8">
                      <h2 className="text-center text-2xl font-bold">Hotel</h2>
                      <div>
                        <h2 className="text-xl font-bold">Titulo de hotel</h2>
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
                            <h2 className="text-xl font-bold">Descripción</h2>
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
                            <h2 className="text-xl font-bold">Descripción</h2>
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
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <div className="flex w-full flex-row justify-around gap-3">
                  <AlertDialogCancel className="m-0 rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction className="m-0 rounded-3xl border-2 border-brand bg-white px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light ">
                    Actualizar
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger className="rounded-3xl border-2 border-brand px-4 py-1 text-center text-brand transition-all duration-300 hover:bg-brand-light md:px-7 md:py-2 ">
              Eliminar
            </AlertDialogTrigger>
            <AlertDialogContent className="p-10">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center text-xl font-bold md:text-2xl">
                  ¿Deseas eliminar este paquete?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <div className="flex w-full flex-row justify-around gap-3">
                  <AlertDialogCancel className="m-0 rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction className="m-0 rounded-3xl border-2 border-brand bg-white px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                    Aceptar
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

export default Page
