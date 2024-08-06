import Navegador from "../Navbar/Navegador";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
        <Navegador/>
        {children}
    </>
  );
};

export default Layout;