import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registrar from './pages/Registrar'
import Home from './pages/Home'
import UserTable from './components/ListarUsuarios'
import Appp from './components/ListarUsuarioIndividual'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        
        <Route path="/home" element={<Home/>} /> 
        <Route path="/registrar" element={<Registrar/>} /> 
         
        <Route path="/listarusuarios" element={<UserTable/>} /> 
       
        <Route path="/listarusuarioindividual" element={<Appp/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
