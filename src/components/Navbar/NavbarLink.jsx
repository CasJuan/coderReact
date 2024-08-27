import { NavLink } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const NavbarLink = ({category}) => {
  return (
    <>
    <NavLink to={`/category/${category}`} className="navItem">
      {category}
    </NavLink>
    </>
  )
}

export default NavbarLink