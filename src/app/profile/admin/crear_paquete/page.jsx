import { ScrollArea } from '@/components/ui/scroll-area'

const Page = () => {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <div className="flex h-full w-full flex-col md:flex-row">
        <ScrollArea className="flex w-full md:h-[calc(90svh_-_211.5px)] ">
          <form action="" className="flex w-full flex-col gap-3">
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="flex w-full flex-col gap-2">
                <h2 className="text-center text-xl font-bold">Hotel</h2>
                <div>
                  <h2 className="text-lg font-bold">Titulo</h2>
                  <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Hotel..."
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Precio</h2>
                  <input
                    type="number"
                    name="precio"
                    id="precios"
                    placeholder="100.000"
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Descripción</h2>
                  <textarea
                    name="Descirpcion"
                    id="Descirpcion"
                    className="h-28 w-full rounded-lg border-2 border-slate-400"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Imagen</h2>
                  <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Hotel..."
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h2 className="text-center text-xl font-bold">Restaurante</h2>
                <div>
                  <h2 className="text-lg font-bold">Titulo</h2>
                  <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Hotel..."
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Precio</h2>
                  <input
                    type="number"
                    name="precio"
                    id="precios"
                    placeholder="100.000"
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Descripción</h2>
                  <textarea
                    name="Descirpcion"
                    id="Descirpcion"
                    className="h-28 w-full rounded-lg border-2 border-slate-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-xl font-bold">Atracciones</h2>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <h2 className="text-lg font-bold">Titulo</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Precio</h2>
                    <input
                      type="number"
                      name="precio"
                      id="precios"
                      placeholder="100.000"
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Descripción</h2>
                    <textarea
                      name="Descirpcion"
                      id="Descirpcion"
                      className="h-28 w-full rounded-lg border-2 border-slate-400"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Imagen</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <h2 className="text-lg font-bold">Titulo</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Precio</h2>
                    <input
                      type="number"
                      name="precio"
                      id="precios"
                      placeholder="100.000"
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Descripción</h2>
                    <textarea
                      name="Descirpcion"
                      id="Descirpcion"
                      className="h-28 w-full rounded-lg border-2 border-slate-400"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Imagen</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <button className="rounded-3xl border-2 border-brand px-5 py-1 text-center text-brand transition-all duration-300 hover:bg-brand-light md:px-7 md:py-2 ">
                  Crear
                </button>
              </div>
            </div>
          </form>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Page
