import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaMoon, FaSun } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, logOut, setDarkMode, darkMode } = useContext(AuthContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogOut = () => {
    //logout
    logOut()
      .then(() => {
        console.log("User Logged Out");
        Swal.fire({
          title: "Done!",
          text: "User Successfully LogOut!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="p-1 text-white" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="p-1 text-white" to="/touristSpots">
          Tourists Spots
        </NavLink>
      </li>
      <li>
        <NavLink className="p-1 text-white" to="/addSpots">
          Add Spots
        </NavLink>
      </li>
      <li>
        <NavLink className="p-1 text-white" to="/myList">
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-gray-900 bg-opacity-70 fixed top-0 text-white z-[5] py-3 md:px-10">
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
          <img
            className="w-5 md:w-9"
            src="https://i.ibb.co/5R4t6gL/website-logo.png"
            alt="logo"
          />
          <Link className="text-sm md:text-2xl font-semibold" to="/">
            Ghure Asho
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 md:gap-5">
        <button
          onClick={toggleDarkMode}
          className="text-2xl p-2 text-white bg-black dark:text-black dark:bg-white rounded-full"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div>
          {/* login And Logout toogle */}

          {user ? (
            <div
              className="dropdown dropdown-end"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
              data-tooltip-place="bottom"
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-md bg-green-600 border-none"
                />
              ) : (
                <img
                  src="https://i.ibb.co/f0phPhH/icons8-user-96.png"
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-md bg-green-600 border-none"
                />
              )}
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu p-2 shadow bg-gray-700 bg-opacity-70 rounded-box w-52"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-600 text-center"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm md:btn-md bg-green-600 border-none text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default NavBar;
