import { NavLink } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const NavbarLink = ({color}) => {
  return (
    <>
    <NavLink to={`/category/${color}`} className="navItem">
      {color}
    </NavLink>
    </>
  )
}

export default NavbarLink