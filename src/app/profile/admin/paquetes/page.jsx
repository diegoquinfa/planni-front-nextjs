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
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <div className="flex flex-col gap-4 p-3 md:grid md:grid-cols-2">
                    <div className="p-3">
                      <h2 className="text-xl font-bold">Nombre de usuario</h2>
                      <input
                        type="text"
                        name="Nombre de usuario"
                        id="Nombre de usuario"
                        readOnly=""
                        value="Jose_45"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold">Nombre</h2>
                      <input
                        type="text"
                        name="Nombre"
                        id="Nombre"
                        readOnly=""
                        value="Jose"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold">Apellido</h2>
                      <input
                        type="text"
                        name="Apellido"
                        id="Apellido"
                        readOnly=""
                        value="Castillo Pérez"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold">Correo</h2>
                      <input
                        type="email"
                        name="Correo"
                        id="Correo"
                        readOnly=""
                        value="Example@gmail.com"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold">Contraseña</h2>
                      <input
                        type="password"
                        name="Contraseña"
                        id="Contraseña"
                        readOnly=""
                        value="PLANNI"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold">Telefono</h2>
                      <input
                        type="number"
                        name="Telefono"
                        id="Telefono"
                        readOnly=""
                        value="3100000000"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                    <div className="col-span-2 p-3">
                      <h2 className="text-xl font-bold">Dirección</h2>
                      <input
                        type="text"
                        name="Dirección"
                        id="Dirección"
                        readOnly=""
                        value="Cartagena de Indias, Campestre Calle 00c #00-00"
                        className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
                      />
                    </div>
                  </div>
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
