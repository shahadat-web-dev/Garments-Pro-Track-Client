import Logo from '../../../components/logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useTheme } from '../../ThemeContext/ThemeContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error);
      });
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-white hover:bg-blue-400  transition-colors duration-300 font-semibold"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-products"
          className="hover:text-white hover:bg-blue-400  transition-colors duration-300 font-semibold"
        >
          All-Products
        </NavLink>
      </li>


      {!user && (
        <>
          <li>
            <NavLink
              to="/about"
              className="hover:text-white hover:bg-blue-400 transition-colors duration-300 font-semibold"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-white hover:bg-blue-400  transition-colors duration-300 font-semibold"
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className="hover:text-white hover:bg-blue-400  transition-colors duration-300 font-semibold"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="hover:text-white hover:bg-blue-400  transition-colors duration-300 font-semibold"
            >
              Register
            </NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          <li>
            <NavLink
              to="/booking-percel"
              className="hover:text-white hover:bg-blue-400 transition-colors duration-300 font-semibold"
            >
              Booking-Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="hover:text-white hover:bg-blue-400  transition-colors duration-300 font-semibold"
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-500 border border-white/20 shadow-lg ${scrolled
          ? "backdrop-blur-lg banner-bg text-color"
          : "banner-bg text-white"
        }`}
    >
      <div className="navbar max-w-7xl mx-auto md:px-5">

        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black/90 backdrop-blur-md rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>

          <a className="text-2xl font-bold text-color text-gray-800"><Logo /></a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-3">

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl md:flex hidden p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>

          {!user && (
            <Link
              to="/login"
              className="btn bg-linear-to-r from-[#81C2FF] to-[#D6AEFF] text-white font-bold shadow-lg hover:scale-105 transform transition"
            >
              Login
            </Link>
          )}

          {user && (
            <>
              <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-white/30 shadow-md">
                <img
                  src={user?.photoURL || "https://i.ibb.co/Y0QVq0K/user.png"}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-linear-to-r from-[#81C2FF] to-[#D6AEFF] text-white font-semibold shadow-lg hover:scale-105 transform transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
