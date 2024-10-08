import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { categories } from "../../mock/guitarras";
import NavbarLink from './NavbarLink';
import logo from '../img/klipartz.com.png'
import CardWidget from '../CardWidget/CardWidget';




const Navegador = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='navegador'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <Link to="/">
            Guitarr Hero
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {categories.map((element, index) => {
              return <NavbarLink  key={index} color={element}/>
            })}
            <CardWidget/>
          </Nav>
        </Container>
      </Navbar>


    </>
  )
}

export default Navegador;