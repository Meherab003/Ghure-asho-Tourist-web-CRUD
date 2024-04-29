import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const navLinks = <>
        <li><NavLink className='p-1 text-white' to='/'>Home</NavLink></li>
        <li><NavLink className='p-1 text-white' to='/touristSpots'>Tourists Spots</NavLink></li>
        <li><NavLink className='p-1 text-white' to='/addSpots'>Add Spots</NavLink></li>
        <li><NavLink className='p-1 text-white' to='/myList'>My List</NavLink></li>
    </>;
  return (
    <nav className="navbar bg-gray-900 bg-opacity-70 fixed text-white z-[5]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[10] p-2 shadow bg-gray-900 bg-opacity-70 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
            <img className="w-5 md:w-9" src="https://i.ibb.co/5R4t6gL/website-logo.png" alt="logo" />
            <Link className="text-sm md:text-2xl font-semibold" to='/'>Ghure Asho</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm md:btn-md bg-green-600 border-none text-white">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
