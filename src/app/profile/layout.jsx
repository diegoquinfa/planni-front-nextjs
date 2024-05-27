'use client'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Navbar from '@/components/nav/Navbar'
import { usePathname } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function PackagesLayout({ children }) {
  const pathname = usePathname()
  const rolType = 1

  return (
    <>
      <header className="h-fit w-full bg-white">
        <Navbar />
      </header>

      {rolType === 1 && (
        <div className="flex">
          <div className="h-[calc(100dvh_-_88px)] w-fit border-2 p-6">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/profile"
                  className={`inline-block w-max rounded-md px-8 py-2 ${pathname === '/profile' ? 'bg-gray-200' : ''}`}
                >
                  Información de cuenta
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  href="/profile/update"
                  className={`inline-block w-full rounded-md px-8 py-2 ${pathname === '/profile/update' ? 'bg-gray-200' : ''}`}
                >
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>

          <ScrollArea className="h-[calc(100dvh_-_88px)] w-full">
            {children}
          </ScrollArea>
        </div>
      )}
    </>
  )
}

PackagesLayout.propTypes = {
  children: PropTypes.node
}
