import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Registrar from './components/Registrar'
import Home from './components/Home'
import CargarMaterias from './components/CargarMateria'
import UserTable from './components/ListarUsuarios'
import ModalEdicion from './components/ModalEdicion'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/registrar" element={<Registrar/>} /> 
        <Route path="/CargarMateria" element={<CargarMaterias/>} /> 
        <Route path="/listarusuarios" element={<UserTable/>} /> 
        <Route path="/modaledicion" element={<ModalEdicion/>} /> 
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
