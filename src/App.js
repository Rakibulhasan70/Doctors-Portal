import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/Appoinment/Appoinment';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth>
          <DashBoard></DashBoard>
        </RequireAuth>}>

          <Route index element={<MyAppointments></MyAppointments>}> </Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
