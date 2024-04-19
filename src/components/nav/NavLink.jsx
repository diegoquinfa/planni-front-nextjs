import Link from 'next/link'
import PropTypes from 'prop-types'

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="w-full lg:w-[120px] rounded-3xl bg-brand-light p-2 text-center text-brand transition-all duration-300 ease-in-out hover:scale-105 hover:px-4 hover:font-bold"
    >
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default NavLink
