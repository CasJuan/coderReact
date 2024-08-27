import './App.css'
/* import  Navbar  from "./components/Navbar/Navegador";
import ItemListContainer from './components/ItemListContainer'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/IteamDetailContainer/IteamDetailcontainer';
import Error404 from './components/Error404/Error404';
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';



function App() {
  
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<ItemListContainer  />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
