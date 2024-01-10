import React, { useState } from 'react';

const Navbar = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-blue-300 cursor-pointer border-b border-transparent hover:border-indigo-600">
            Home
          </a>
          <a className="mr-5 hover:text-blue-300 cursor-pointer border-b border-transparent hover:border-indigo-600">
            Health Points
          </a>
          <div className="relative">
            <span
              className="mr-5 hover:text-blue-300 cursor-pointer border-b border-transparent hover:border-indigo-600"
              onClick={toggleServicesDropdown}
            >
              Services
            </span>
            {showServicesDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-gray-900 text-gray-100 p-2 rounded-md">
                {/* Dropdown content */}
                <a href="#" className="block py-1">Service 1</a>
                <a href="#" className="block py-1">Service 2</a>
                <a href="#" className="block py-1">Service 3</a>
              </div>
            )}
          </div>
          <a className="hover:text-blue-300 cursor-pointer border-b border-transparent hover:border-indigo-600">
            Contact
          </a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <img
            src="images/hjlogo.png"
            style={{ height: 50, marginTop: 10, marginBottom: 10, borderRadius: '50%', backgroundColor: 'blue' }}
            alt="logo"
          />
          <span className="ml-3 text-xl">Health Junction</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mt-4 lg:mt-0">
          <a
            href="#"
            className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg lg:ml-0 lg:mr-4"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg lg:ml-0"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
