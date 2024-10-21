import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo1.png";
import { navItems } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 dark:border-neutral-200/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img className="w-20 mr-2" src={logo} alt="logo" />
              </Link>
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex ml-14 space-x-12">
  {navItems.map((item, index) => (
    <li key={index}>
      <Link
        to={item.href}
        className={`px-3 py-2 rounded-md text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300
          ${isActive(item.href) ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white" : ""}`}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>


            {/* Theme Toggle Button */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <button onClick={toggleTheme} className="py-2 px-3 border rounded-md">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>

            {/* Sign In and Create Account Links */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link to="/signup" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Create an account
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden md:flex flex-col justify-end z-50">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Links */}
          <div
  className={`fixed top-0 left-0 z-40 w-full h-full flex flex-col items-center transition-transform transform text-white ${
    mobileDrawerOpen ? "translate-y-0" : "-translate-y-full"
  } lg:hidden duration-1000 ease-in-out`}
  style={{ visibility: mobileDrawerOpen ? 'visible' : 'hidden' }}  // Ensures hidden when off-screen
>
  <ul className="mt-12 py-3 space-y-6"> {/* Adjusted space-y-6 for more spacing */}
    {navItems.map((item, index) => (
      <li key={index} onClick={toggleNavbar} className="mb-4"> {/* Added margin-bottom for extra space */}
        <Link
          to={item.href}
          className={`px-10 py-3 items-center justify-center rounded-md 
            ${isActive(item.href) ? "bg-gradient-to-r from-orange-500 to-orange-800" : ""}`}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>

  <div className="flex space-x-6 mt-6">
    <Link
      to="/signup"
      className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 rounded-md px-10"
    >
      Create an account
    </Link>
  </div>
</div>
        </div>
      </nav>

      {/* Full-Screen Blur Backdrop */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm z-30"
          onClick={toggleNavbar} // Clicking outside the menu will close it
        ></div>
      )}
    </>
  );
};

export default Navbar;
