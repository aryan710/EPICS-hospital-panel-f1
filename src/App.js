import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
//import ApplyDoctor from './pages/Apply/ApplyDoctor';
//import ApplyTreatments from './pages/Apply/ApplyTreatments';
import ApplyDoctor from './components/Apply/ApplyDoctor';
import ApplyTreatments from './components/Apply/ApplyTreatments';
import Profile from './components/Apply/Profile';
import Logout from './components/Apply/Logout';
function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/apply-treatments' element={<ApplyTreatments/>}/>
    <Route path='/apply-doctor' element={<ApplyDoctor/>} />
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/logout' element={<Logout/>}/>
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
