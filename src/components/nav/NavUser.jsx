import Link from 'next/link'

const NavUser = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <Link
        href="/register"
        className="border-brand text-brand hover:bg-brand-light hover:text-brand rounded-3xl border-2 py-1 text-center transition-all duration-300 ease-in-out lg:w-40"
      >
        Crear cuenta
      </Link>
      <Link
        href="/login"
        className="border-brand bg-brand hover:bg-brand-light hover:text-brand rounded-3xl border-2 py-1 text-center text-white transition-all duration-300 ease-in-out  lg:w-40 "
      >
        Iniciar sesión
      </Link>
    </div>
  )
}

export default NavUser
