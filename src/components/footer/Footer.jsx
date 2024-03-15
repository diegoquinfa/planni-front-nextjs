import React from 'react'
import Container from '../general/Container'

const Footer = () => {
  return (
    <footer className="flex h-fit w-full items-center justify-center bg-white text-black ">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <h2 className="self-center text-5xl font-bold">PLANNI</h2>
          <div>
            <form>
              <label htmlFor="email" className="flex flex-col gap-2">
                <p>Suscribete para que recibas todas las novedades</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo electrónico"
                    className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-3xl bg-green-700 px-6 py-1 text-white"
                  >
                    SUSCRIBETE
                  </button>
                </div>
                <div className="flex gap-2">
                  <span className="icon-[mdi--facebook-box] h-16 w-16" />
                  <span className="icon-[mdi--instagram] h-16 w-16" />
                  <span className="icon-[mage--x-square] h-16 w-16" />
                </div>
              </label>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
