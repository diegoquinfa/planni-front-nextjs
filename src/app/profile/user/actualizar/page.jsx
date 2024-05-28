const Page = () => {
  return (
    <div>
      <form action="" className="iteams-around grid h-full grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className="text-xl font-bold">Nombre de usuario</h2>
          <input
            type="text"
            name="Nombre de usuario"
            id="Nombre de usuario"
            value="Jose_45"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Nombre</h2>
          <input
            type="text"
            name="Nombre"
            id="Nombre"
            value="Jose"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Apellido</h2>
          <input
            type="text"
            name="Apellido"
            id="Apellido"
            value="Castillo Pérez"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Correo</h2>
          <input
            type="email"
            name="Correo"
            id="Correo"
            value="Example@gmail.com"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Contraseña</h2>
          <input
            type="password"
            name="Contraseña"
            id="Contraseña"
            value="PLANNI"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Telefono</h2>
          <input
            type="number"
            name="Telefono"
            id="Telefono"
            value="3100000000"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="col-span-2 p-4">
          <h2 className="text-xl font-bold">Dirección</h2>
          <input
            type="text"
            name="Dirección"
            id="Dirección"
            value="Cartagena de Indias, Campestre Calle 00c #00-00"
            className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
          />
        </div>
        <div className="col-span-2 p-4 ">
          <div className=" flex w-full justify-center">
            <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
              Actualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page
