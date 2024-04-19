import Link from 'next/link'

const NavUser = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-1 lg:flex-row">
      <Link
        href="/register"
        className="w-full rounded-3xl border-2 border-brand p-2 text-center text-brand transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light lg:w-[120px]"
      >
        Crear cuenta
      </Link>
      <Link
        href="/login"
        className="w-full rounded-3xl border-2 border-brand bg-brand p-2 text-center text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light hover:text-brand lg:w-[120px]"
      >
        Iniciar sesión
      </Link>
    </div>
  )
}

export default NavUser
