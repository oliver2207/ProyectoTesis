import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './container/pages/Home/Home'
 import FormUsuario from './components/FormUsuario'
import HistioryDetails from './components/History/HistioryDetails'
import Login from './container/pages/Register/Login'
import Calendar from './container/pages/Calendars/Calendar'
import VirtualAsistens from './container/pages/Chat/VirtualAsistens'
import FormPago from './components/Pago/FormPago'
import AddMascota from './container/pages/AddMascota/AddMascota'
import HistorialCitas from './container/pages/History Citas/HistorialCitas'
import HistoriDetail from './container/pages/History Citas/HistoriDetail'
 import Tratamientos from './container/pages/Tratamientos/Tratamientos'
import AddPerfectMascotas from './container/pages/AddMascota/AddPerfectMascotas'
import FormRegisterCitas from './container/pages/History Citas/FormRegisterCitas'
import FormRegisterTratmiento from './container/pages/History Citas/FormRegisterTratmiento'
import FormMascota from './container/pages/AddMascota/FormMascota'
import PrimerosAuxilios from './container/pages/Auxilios/PrimerosAuxilios'

 

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path='*' element={<>eroor</>} />
      <Route path='/' element={<Login/>} />      
      <Route path='/home' element={<Home/>} />
      <Route path='/calendar' element={<Calendar/>} />
      <Route path='/pago' element={<FormPago/>} />
      <Route path='/historial' element={<HistorialCitas/>} />
      <Route path='/formusuario' element={<FormUsuario/>} />
      <Route path='/histori' element={<HistoriDetail/>} />
      <Route path='/chat' element={<VirtualAsistens/>} />
      <Route path='/addmascota' element={<AddPerfectMascotas/>} />
      <Route path='/addmascota' element={<AddMascota/>} />
      <Route path='/tratamientos' element={<Tratamientos/>} />
      <Route path='/formcita' element={<FormRegisterCitas/>} />

      <Route path='/formtratament' element={<FormRegisterTratmiento/>} />
      <Route path='/formMascota' element={<FormMascota/>} />
      <Route path='/auxilios' element={<PrimerosAuxilios/>} />

       


    </Routes>
  </Router>
  )
}

export default App
 
 
