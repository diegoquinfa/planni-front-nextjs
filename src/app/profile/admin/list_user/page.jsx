import { ScrollArea } from '@/components/ui/scroll-area'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

const Page = () => {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <div className="flex h-full w-full flex-col md:flex-row">
        <ScrollArea className="flex overscroll-auto max-md:w-[calc(9swh_-_21.5px)] md:h-[calc(90svh_-_211.5px)] md:w-[40%] md:flex-col">
          <div className="max-md:flex max-md:flex-row">
            <div className="flex h-full w-full flex-col gap-1 rounded-xl bg-white p-4 max-md:w-[300px] md:flex md:flex-col">
              <div className=" flex justify-center max-md:w-full md:w-full">
                <div className=" flex flex-col">
                  <h2 className="text-center font-bold  md:text-xl">
                    Luis Castilla Padilla
                  </h2>
                  <h2 className="text-center font-bold  max-md:text-xl md:text-2xl">
                    Luis_456
                  </h2>
                </div>
              </div>
              <div className="flex justify-around">
                <button className="rounded-3xl bg-brand px-4 py-1  text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                  Editar
                </button>
                <AlertDialog>
                  <AlertDialogTrigger className="rounded-3xl border-2 border-brand px-4 py-1 text-center text-brand transition-all duration-300 hover:bg-brand-light">
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
        </ScrollArea>
        <ScrollArea className="flex md:h-[calc(90svh_-_211.5px)] md:w-[60%]">
          <form
            action=""
            className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 md:p-3"
          >
            <div className="p-4 md:p-3">
              <h2 className="text-xl font-bold">Nombre de usuario</h2>
              <input
                type="text"
                name="Nombre de usuario"
                id="Nombre de usuario"
                placeholder="Jose_45"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="p-4 md:p-3">
              <h2 className="text-xl font-bold">Nombre</h2>
              <input
                type="text"
                name="Nombre"
                id="Nombre"
                placeholder="Jose"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="p-4 md:p-3">
              <h2 className="text-xl font-bold">Apellido</h2>
              <input
                type="text"
                name="Apellido"
                id="Apellido"
                placeholder="Castillo Pérez"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="p-4 md:p-3">
              <h2 className="text-xl font-bold">Correo</h2>
              <input
                type="email"
                name="Correo"
                id="Correo"
                placeholder="Example@gmail.com"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="p-4 md:p-3">
              <h2 className="text-xl font-bold">Contraseña</h2>
              <input
                type="password"
                name="Contraseña"
                id="Contraseña"
                placeholder="PLANNI"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="p-4 md:p-3">
              <h2 className="text-xl font-bold">Telefono</h2>
              <input
                type="number"
                name="Telefono"
                id="Telefono"
                placeholder="3100000000"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="col-span-2 p-4 md:p-3">
              <h2 className="text-xl font-bold">Dirección</h2>
              <input
                type="text"
                name="Dirección"
                id="Dirección"
                placeholder="Cartagena de Indias, Campestre Calle 00c #00-00"
                className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
              />
            </div>
            <div className="col-span-2 p-4 md:p-3 ">
              <div className=" flex w-full justify-center">
                <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                  Actualizar
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
