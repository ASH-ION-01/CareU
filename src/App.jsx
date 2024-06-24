
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ShoppingPage from './Pages/ShoppingPage'
import Prescription from './Pages/Prescription'
import { products } from './Data2'
import Test from './Pages/Test'
import Footer from './Pages/Footer'
import Service from './Pages/Service'
import Emergency from './Pages/Emergency'
import Talktous from './Pages/Talktous'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Health_prof from './Pages/Health_prof'
import Home_care from './Pages/Home_care'
import healthProfessionalsData from './Data4'
import Payment_gate from './Pages/Payment_gate'


function App() {

  return (
    <div className=' flex flex-col w-screen overflow-hidden items-center' >

      <div className='w-full h-[3.5rem] flex justify-center items-center bg-gray-100'>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route 
        path='/'
        element={<Home/>}
      />

      <Route
        path='/Shopping'
        element={<ShoppingPage products={products}/>}
      />

      <Route
        path='/Prescription'
        element={<Prescription/>}
      />

      <Route
       path='/Login'
       element={<Login/>}
      />
      <Route
        path='/Signup'
        element={<Signup/>}
      />

      <Route
        path='/Test'
        element={<Test/>}
      />

      <Route
        path='/Service'
        element={<Service/>}
      />

      <Route
        path='/Emergency'
        element={<Emergency/>}
      />

      <Route
        path='/Talktous'
        element={<Talktous/>}
      />

      <Route
        path='/AboutUs'
        element={<AboutUs/>}
      />

      <Route
        path='/ContactUs'
        element={<ContactUs/>}
      />
      <Route
        path='/Health_prof'
        element={<Health_prof healthProfessionalsData={healthProfessionalsData}/>}
      />      
      <Route
        path='/Home_care'
        element={<Home_care/>}

      />
      <Route
        path='/Payment_gate'
        element={<Payment_gate/>}
      />

      </Routes>

      <div className='w-screen'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
