const Page = () => {
  return (
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
            Crear
          </button>
        </div>
      </div>
    </form>
  )
}

export default Page
