import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import userImg from '../assets/bg-image/user.png'
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const {user , userLogOut} = useContext(AuthContext) ;
  
  const HandleLogout = () => {
    userLogOut()
    .then(result =>{
      console.log('Successfully logged out')
    })
    .catch(error =>
    console.log("ERROR")
    )
  }

    const links = <>
    <li><NavLink to ={'/'} >Home</NavLink></li>
    <li><NavLink to ={'/donationCampaignPage'} >Donation Campaign Page</NavLink></li>
    <li><NavLink to ={'/dashboard'} >Dashboard</NavLink></li>
    <li><NavLink to ={'/help'} >How to get Help</NavLink></li>

    
    
    </>
    return (
        <div className="navbar bg-[#16423C] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to = {'/'} className="btn btn-ghost text-2xl text-white font-dancing">ShareTheWarmth</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && user?.email ? 
      <>

      <Link to={'/dashboard'}><img src={user?.photoURL} className='rounded-full w-10 mr-3 '  alt="img" /></Link>
      <button onClick={HandleLogout} className="btn bg-[#D72050] text-white">Logout</button>

      </>
      :
      <Link to={'/login'} className="btn bg-[#D72050] text-white">login</Link>
    }
  </div>
</div>
    );
};

export default Navbar;