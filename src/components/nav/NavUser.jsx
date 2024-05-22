import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const NavUser = () => {
  return (
    <>
      <div className="mb-4 flex h-full w-full flex-col gap-2 p-1 lg:hidden lg:flex-row">
        <Link
          href="/profile"
          className="w-full rounded-3xl border-2 border-brand px-8 py-2 text-center text-brand 
                  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light lg:w-max"
        >
          Perfil
        </Link>
        <Link
          href="/favorites"
          className="w-full rounded-3xl border-2 border-brand px-8 py-2 text-center text-brand 
                  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light lg:w-max"
        >
          Favoritos
        </Link>
        <button
          className="w-full rounded-3xl border-2 border-brand bg-brand px-8 py-2 text-center text-white 
                  transition-all duration-300 ease-in-out hover:scale-105 lg:w-max"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="hidden lg:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="ring-none rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Favoritos</DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="mt-2 w-full rounded-3xl border-2 border-brand bg-brand px-8 py-2 text-center 
                  font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 lg:w-max"
              >
                Cerrar sesión
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default NavUser
