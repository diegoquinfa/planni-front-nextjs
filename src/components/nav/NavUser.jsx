import Link from 'next/link'

const NavUser = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-1 lg:flex-row">
      <Link
        href="/register"
        className="w-full lg:w-[120px] rounded-3xl border-2 border-brand p-2 text-center text-brand transition-all duration-300 ease-in-out hover:bg-brand-light hover:scale-105"
      >
        Crear cuenta
      </Link>
      <Link
        href="/login"
        className="w-full lg:w-[120px] rounded-3xl border-2 border-brand bg-brand p-2 text-center text-white transition-all duration-300 ease-in-out hover:bg-brand-light hover:text-brand hover:scale-105"
      >
        Iniciar sesión
      </Link>
    </div>
  )
}

export default NavUser
