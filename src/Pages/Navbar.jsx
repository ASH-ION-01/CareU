import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className=' flex flex-row w-[1080px] h-[3rem] justify-between items-center text-sky-500'>
      <NavLink to='/' className='flex flex-row gap-x-2 justify-center items-center'>

        <h1 className='font-bold text-[20px]'>CareU</h1> 
        <img src='/Site_img.png' width='25px'></img>
      </NavLink>

      <div className='flex flex-row justify-between items-center gap-x-6'>
        

        <div>
        <NavLink to='/Health_prof'><a className='nav_up cursor-pointer'>Health professionals</a></NavLink>
        </div>

        <div>
        <NavLink to='/Home_care'><a className='nav_up cursor-pointer'>Home-care</a></NavLink>
        </div>

        <div>
          <NavLink to='/Service'>
            <a className='nav_up cursor-pointer'>Services</a>
          </NavLink>
        </div>

        
        <div>
          <NavLink to='/AboutUs'>
            <a className='nav_up cursor-pointer'>About Us</a>
          </NavLink>
        </div>

        <div>
        <NavLink to='/ContactUs'><a className='nav_up cursor-pointer'>ContactUs</a></NavLink>
        </div>
      </div>

      <div className=' '>
        <div className='flex flex-row gap-x-3'>
        <NavLink to='/Signup'>
          <button className='nav_butt'>
            <span> SignUp </span>
          </button>
        </NavLink>
          
        <NavLink to='/Login'>
          <button className='nav_butt'>
            <span> LogIn </span>
          </button>
        </NavLink>

        {/* <NavLink to='/Cart'>
          <p className='text-2xl'>Cart</p>
        </NavLink> */}

        </div>
      </div>

      {/* <Routes>
        <Route
          path='/ContactUs'
          element={<ContactUs />}
        />
      </Routes> */}
    </div>
  )
}

export default Navbar