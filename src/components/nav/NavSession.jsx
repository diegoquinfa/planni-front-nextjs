import NavUser from './NavUser'

export const NavSession = () => {
  const auth = true
  return <>{!auth ? <NavAuth /> : <NavUser />}</>
}
