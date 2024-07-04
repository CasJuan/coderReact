import './App.css'
import  Navbar  from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';


function App() {
  
  return (
    <>
        <Navbar/>
        <ItemListContainer msj={'Bienvenidos a El Faro, tu agencia de viajes'} />
    </>
  )
}

export default App
