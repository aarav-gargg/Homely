import React, { useState } from 'react';
// import { a } from 'react-router-dom';
import { FaSearchLocation } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="sticky top-0 z-50 bg-f-color over">
      <nav className="bg-f-color sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-10 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to="/">
                  <img className="h-12 w-auto" src="./Logo.jpg" alt="Logo" />
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                <NavLink
                  to="/"
                  className="rounded-md bg-gray-900 px-3 py-2 text-md font-large text-white"
                >
                  Homely
                </NavLink>
                <NavLink
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Team
                </NavLink>
                <NavLink
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Projects
                </NavLink>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-lg bg-gray-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  />
                  <FaSearchLocation className="absolute right-3 text-gray-400" />
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User"
                    />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                   <Link>

                   </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div> */}
            <div className="flex items-center gap-5">
              {user.user != null && (
                <NavLink
                  to="createListing"
                  className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Host
                </NavLink>
              )}
              {user.user == null && (
                <NavLink
                  to="/Login"
                  className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Login/SignUp
                </NavLink>
              )}
              <div className="relative inline-block text-left">
                <button className=' hover:bg-gray-700 hover:text-white py-2 px-3 rounded-xl relative ' onClick={toggleDropdown}>
                  {user.user != null &&
                    <FaUserCircle size={32} />
                  }
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white/90 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-25 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <NavLink
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                      role="menuitem"
                    >
                      {user.user.name}
                    </NavLink>
                    <NavLink
                      to={`/${user.user._id}/trips`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                      role="menuitem">
                        Trip List
                    </NavLink>
                    <NavLink
                      to={`/${user.user._id}/wishList`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                      role="menuitem">
                        Wish List
                    </NavLink>
                    <NavLink
                      to={`/${user.user._id}/properties`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                      role="menuitem">
                        Property List
                    </NavLink>
                    <NavLink
                      to={`/${user.user._id}/reservations`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                      role="menuitem">
                        Reservations List
                    </NavLink>
                    <NavLink
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700  hover:bg-slate-300"
                      role="menuitem"
                    >
                      Sign out
                    </NavLink>
                  </div>
                )
                }
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};



export default Navbar;
