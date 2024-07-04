import './App.css'
import ItemListContainer from './components/ItemListContainer';
import  Navbar  from "./components/Navbar";

function App() {
  
  const titulo = "Bienvenido a El Faro, tu agencia de viajes";

  return (
    <>
        <Navbar/>
        <ItemListContainer titulo={titulo}/>
    </>
  )
}

export default App
