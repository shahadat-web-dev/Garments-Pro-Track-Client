import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto">

        {/* Left Side Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold">
            GarmentsTracker
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-center lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* {user ? navLinksAfterLogin : navLinksBeforeLogin} */}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3 font-medium">
            {/* {user ? navLinksAfterLogin : navLinksBeforeLogin} */}
          </ul>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Navbar;