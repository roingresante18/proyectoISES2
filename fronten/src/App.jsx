import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import Home from './pages/Home'
import CargarMaterias from './pages/CargarMateria'
import UserTable from './components/ModalListar/ListarUsuarios'
import ModalEdicion from './components/ModalEdicion/ModalEdicion'
import MateriasTable from './components/ModalListar/ListarMaterias'
import CargarCarrera from './pages/CargarCarrera'
import CarrerasTable from './components/ModalListar/ListarCarrera'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} /> // INDEX ELEMENT
        <Route path="/home" element={<Home/>} /> 
        <Route path="/registrar" element={<Registrar/>} /> 
        <Route path="/CargarMateria" element={<CargarMaterias/>} /> 
        <Route path="/listarusuarios" element={<UserTable/>} /> 
        <Route path="/modaledicion" element={<ModalEdicion/>} /> 
        <Route path="/listarmaterias" element={<MateriasTable/>} />
        <Route path="/CargarCarrera" element={<CargarCarrera/>} /> 
        <Route path="/listarcarreras" element={<CarrerasTable/>} />
        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
