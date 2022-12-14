import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/DashBoard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import NotFound from './Pages/Shared/NotFound';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddParts from './Pages/Dashboard/AddParts';
import Manage from './Pages/Dashboard/Manage';
import Payment from './Pages/Dashboard/Payment';
import Portfolio from './Pages/Home/Portfolio';
import Blog from './Pages/Home/Blog';


function App() {
  return (

    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<Portfolio />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route index element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddParts /></RequireAdmin>}></Route>
          <Route path='manage' element={<RequireAdmin><Manage /></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>



      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </div>


  );
}

export default App;
