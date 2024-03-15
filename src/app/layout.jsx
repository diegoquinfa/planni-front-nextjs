import localFont from 'next/font/local'
import PropTypes from 'prop-types'
import './globals.css'

const MPLUSRounded = localFont({
  src: [
    {
      path: '../fonts/MPLUSRounded1c-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/MPLUSRounded1c-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const metadata = {
  title: 'PLANNI',
  description: 'Creamos los viajes que quieres.'
}

export default function RootLayout({ children }) {
  console.log(MPLUSRounded.className)
  return (
    <html lang="es">
      <body className={MPLUSRounded.className + ' ' + 'bg-gray-100'}>
        {children}
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node
}
