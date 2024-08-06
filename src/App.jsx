import './App.css'
/* import  Navbar  from "./components/Navbar/Navegador";
import ItemListContainer from './components/ItemListContainer'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import ItemDetail from './components/ItemDetail/IteamDetail'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error404 from './components/Error404/Error404';



function App() {
  
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<ItemListContainer  />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
