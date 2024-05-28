'use client'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Navbar from '@/components/nav/Navbar'
import { usePathname } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
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

export default function PackagesLayout({ children }) {
  const pathname = usePathname()
  const rolType = 1

  return (
    <>
      <header className="h-fit w-full bg-white">
        <Navbar />
      </header>

      {rolType === 2 && (
        <div className="p-5 md:mx-auto md:h-[calc(100dvh_-_130px)] md:max-w-7xl md:py-5">
          <p>Usuario</p>
          <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
          <div className="flex flex-col gap-6 md:h-[90%] md:flex-row">
            <div className="flex w-full p-6 md:max-h-[90%] md:w-[50%]">
              <ul className="flex max-md:flex-wrap-reverse max-md:justify-center max-md:gap-4 md:w-full md:flex-col md:gap-3">
                <li className="flex">
                  <Link
                    href="/profile/user/favoritos"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max
                   ${pathname === '/profile/user/favoritos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Favoritos
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/profile/user/datos"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/datos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Ver datos
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/profile/user/actualizar"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/actualizar' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Actualizar datos
                  </Link>
                </li>
                <li className="flex w-full max-md:pb-8 md:pt-8">
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger className="rounded-3xl bg-brand px-4 py-1 text-white duration-300 hover:bg-brand-light hover:bg-red-900 md:px-7 md:py-2">
                        Eliminar cuenta
                      </AlertDialogTrigger>
                      <AlertDialogContent className="p-10">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-center text-xl font-bold md:text-2xl">
                            ¿Deseas eliminar tu cuenta?
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
                </li>
              </ul>
            </div>
            <ScrollArea className="max-h-[98%] rounded-3xl md:w-[70%]">
              <div className="h-fit rounded-3xl bg-white">{children}</div>
            </ScrollArea>
          </div>
        </div>
      )}

      {rolType === 1 && (
        <div className="p-5 md:mx-auto md:h-[calc(100dvh_-_130px)] md:max-w-7xl md:py-5">
          <p className="inline-block px-3 py-1 rounded-3xl bg-[#3e3e3e] text-white">Administrador</p>
          <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
          <div className="flex flex-col gap-6 md:h-[90%] md:flex-row">
            <div className="flex w-full p-6 md:max-h-[90%] md:w-[25%]">
              <ul className="flex max-md:flex-wrap-reverse max-md:justify-center max-md:gap-4 md:w-full md:flex-col md:gap-3">
                <li className="flex">
                  <Link
                    href="/profile/user/favoritos"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max
                   ${pathname === '/profile/user/favoritos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Paquetes
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/profile/user/datos"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/datos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Ver datos
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/profile/user/actualizar"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/actualizar' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Actualizar datos
                  </Link>
                </li>
                <li className="flex w-full max-md:pb-8 md:pt-8">
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger className="rounded-3xl bg-brand px-4 py-1 text-white duration-300 hover:bg-brand-light hover:bg-red-900 md:px-7 md:py-2">
                        Eliminar cuenta
                      </AlertDialogTrigger>
                      <AlertDialogContent className="p-10">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-center text-xl font-bold md:text-2xl">
                            ¿Deseas eliminar tu cuenta?
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
                </li>
              </ul>
            </div>
            <ScrollArea className="max-h-[98%] rounded-3xl md:w-[75%]">
              <div className="h-fit rounded-3xl bg-white">{children}</div>
            </ScrollArea>
          </div>
        </div>
      )}
    </>
  )
}

PackagesLayout.propTypes = {
  children: PropTypes.node
}
