'use client'
import { useState } from 'react'
import NavLink from './NavLink'
import NavUser from './NavUser'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menu = isMenuOpen ? 'flex' : 'h-0 overflow-hidden'
  const inNav = isMenuOpen ? 'gap-5' : 'gap-0'

  return (
    <nav
      className={`flex flex-col ${inNav} items-center px-12 py-3 bg-white max-lg:rounded-b-xl lg:flex-row lg:justify-between lg:gap-5`}
    >
      <figure className="flex w-full items-center justify-between self-start lg:w-fit">
        <span
          className="icon-brand icon-[icon-park-outline--hamburger-button] h-8 w-8 lg:hidden"
          onClick={handleMenu}
        />
        <Link href="/" className="flex w-fit items-center gap-3">
          <div className="flex w-fit items-center gap-3">
            <img
              src="/logo.svg"
              alt="logo"
              className="h-14 w-14 max-lg:hidden "
            />
            <h2 className="w-fit text-3xl font-bold text-brand">PLANNI</h2>
          </div>
        </Link>
      </figure>
      <div
        className={`${menu} w-full flex-col items-center gap-5 transition-all lg:flex lg:h-full lg:w-fit lg:flex-row lg:overflow-auto`}
      >
        <img src="/logo.svg" alt="logo" className="h-14 w-14 lg:hidden" />
        <div className="flex flex-col w-full items-center gap-2">
          <ul className="flex flex-col w-full gap-2 lg:flex-row">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/packages">Paquetes</NavLink>
            <NavLink href="/">Nosotros</NavLink>
          </ul>
        </div>
          <NavUser />
      </div>
    </nav>
  )
}

export default Navbar
