import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


//import { CardWidget } from "./CardWidget";
import { categories } from "../../mock/mockData";
import NavbarLink from './NavbarLink';


const Navegador = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
            Rick & Morty
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {categories.map((element, index) => {
              return <NavbarLink key={index} category={element}/>
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegador;