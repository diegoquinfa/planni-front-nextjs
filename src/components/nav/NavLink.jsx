import Link from 'next/link'
import PropTypes from 'prop-types'

const NavLink = ({ children }) => {
  return (
    <li>
      <Link
        href="/"
        className="bg-brand-light text-brand inline-block  w-full rounded-3xl border border-transparent py-1 text-center transition-all duration-300 ease-in-out hover:scale-105 hover:font-bold lg:w-32"
      >
        {children}
      </Link>
    </li>
  )
}

NavLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default NavLink
