import Logo from '../../../components/logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { div } from 'framer-motion/client';

const Navbar = () => {

  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-products">All-Products</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>

      {!user && (
        <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
      )}

      {user && (
        <>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-2xl">
      <div className="navbar max-w-7xl mx-auto md:px-5">

        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <a className="text-xl"><Logo /></a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Navbar End (Updated only this part) */}
        <div className="navbar-end gap-3">
          {!user && (
            <Link to="/login" className="btn">Login</Link>
          )}

          {user && (
            <>
              <div className="w-10 h-10 rounded-full overflow-hidden border">
                <img
                  src={user?.photoURL || "https://i.ibb.co/Y0QVq0K/user.png"}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-red-500 text-white"
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
