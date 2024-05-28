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
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function PackagesLayout({ children }) {
  const pathname = usePathname()
  const rolType = 2

  return (
    <>
      <header className="h-fit w-full bg-white">
        <Navbar />
      </header>

      {rolType === 2 && (
        <div className="mx-auto h-[calc(100dvh_-_130px)] max-w-7xl md:py-5">
          <p>Usuario</p>
          <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
          <div className="flex h-full flex-row gap-6">
            <div className="flex max-h-[90%] w-[50%] p-6">
              <div className="flex flex-row">
                <div className="flex">
                  <ul className="flex flex-col gap-3">
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
                        href="/profile/user/favoritos"
                        className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max
                   ${pathname === '/profile/user/favoritos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                      >
                        Favoritos
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
                    <li className="flex w-full pt-8">
                      <div>
                        <AlertDialog>
                          <AlertDialogTrigger className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                            Eliminar cuenta
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-center text-xl font-bold md:text-2xl">
                                ¿Deseas eliminar tu cuenta?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                <div className="flex w-full flex-row justify-around gap-3">
                                  <AlertDialogCancel className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                                    Cancelar
                                  </AlertDialogCancel>
                                  <AlertDialogAction className="rounded-3xl border-2 border-brand bg-white px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                                    Aceptar
                                  </AlertDialogAction>
                                </div>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ScrollArea className="max-h-[90%] w-[70%] rounded-3xl bg-white">
              {children}
            </ScrollArea>
          </div>
        </div>
      )}

      {rolType === 1 && (
        <div className="mx-auto h-[calc(100dvh_-_130px)] max-w-7xl md:py-5">
          <p>Administrador</p>
          <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
          <div className="flex h-full flex-row gap-6">
            <div className="flex max-h-[90%] w-[30%] p-6">
              <div className="flex flex-row">
                <div className="flex">
                  <ul className="flex flex-col gap-3">
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
                        href="/profile"
                        className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                        ${pathname === '/profile' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                      >
                        Actualizar datos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ScrollArea className="max-h-[90%] w-[70%] rounded-3xl bg-white">
              {children}
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
