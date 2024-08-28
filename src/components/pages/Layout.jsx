import Navegador from "../Navbar/Navegador";
import Footer from '../Footer/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
        <Navegador/>
        {children}
        <Footer/>
    </>
  );
};

export default Layout;