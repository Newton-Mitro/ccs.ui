import { useState } from "react";
import { CgPlayListAdd, CgPlayListRemove } from "react-icons/cg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/brand/logo_w.png";
import useOuterClick from "../hooks/useOuterClick";

const AuthLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  const userRef = useOuterClick((e: any) => {
    setProfileDropdownOpen(false);
  });

  const notificationRef = useOuterClick((e: any) => {
    setNotificationDropdownOpen(false);
  });

  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
    setNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!isNotificationDropdownOpen);
    setProfileDropdownOpen(false);
  };

  return (
    <div className="flex h-screen bg-zinc-900 text-xs lg:text-sm text-gray-400 overflow-auto">
      {/* Left Sidebar */}
      <div
        className={`bg-zinc-950  border-r border-gray-800 w-64 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="">
          <div className=" bg-neutral-900 border-b border-gray-800 h-16">
            <Link to={"/"}>
              <img className="h-12" src={logo} alt="" />
            </Link>
          </div>
          <div className="sidebar">
            {/* [ ]Sidebar Navigation Goes Here.. */}
            <ul className="flex flex-col">
              <li className="hover:cursor-pointer hover:text-gray-400 hover:bg-gray-800/60 p-2 transition-all duration-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
                Home
              </li>
              <li className="hover:cursor-pointer hover:text-gray-400 hover:bg-gray-800/60 p-2 transition-all duration-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Customers
              </li>
              <li className="hover:cursor-pointer hover:text-gray-400 hover:bg-gray-800/60 p-2 transition-all duration-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
                Authorization
              </li>
              <li className="hover:cursor-pointer hover:text-gray-400 hover:bg-gray-800/60 p-2 transition-all duration-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
                Peoples
              </li>
              <li className="hover:cursor-pointer hover:text-gray-400 hover:bg-gray-800/60 p-2 transition-all duration-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
                Organizations
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-neutral-900 h-16 flex items-center justify-between px-4 border-b border-gray-800">
          <button onClick={toggleSidebar} className="">
            {isSidebarOpen ? (
              <CgPlayListRemove size="32" />
            ) : (
              <CgPlayListAdd size="32" />
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="flex h-full">
            <NavLink
              to="/auth"
              className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300 px-2 w-10 lg:w-28"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Authorization</span>
            </NavLink>
            <NavLink
              to="/kyc"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-gray-300 font-bold" : ""
                } flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300 px-2 w-10 lg:w-28`;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Customers</span>
            </NavLink>
            <NavLink
              to="/core-banking"
              className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300 px-2 w-10 lg:w-28"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Core Banking</span>
            </NavLink>
            <NavLink
              to="/accounting"
              className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300 px-2 w-10 lg:w-28"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Accounting</span>
            </NavLink>
            <div className="relative">
              <button
                ref={notificationRef}
                name="notifications"
                onClick={toggleNotificationDropdown}
                className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300 px-2 w-10 lg:w-28 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>

                <span className="hidden lg:inline-block">Notifications</span>
              </button>

              {/* Profile Dropdown */}
              {isNotificationDropdownOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-neutral-900 border border-gray-800 rounded-md shadow-lg z-50">
                  {/* Add profile dropdown content */}
                  <Link to="#" className="block px-4 py-2">
                    Profile
                  </Link>
                  <Link to="#" className="block px-4 py-2">
                    Settings
                  </Link>

                  <hr className="border-t border-gray-800 mx-2 my-1" />

                  <button
                    onClick={logOut}
                    className="block px-4 py-2 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                ref={userRef}
                name="profile"
                onClick={toggleProfileDropdown}
                className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300 px-2 w-10 lg:w-28 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <span className="hidden lg:inline-block">John Doe</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-neutral-900 border border-gray-800 rounded-md shadow-lg z-50">
                  {/* Add profile dropdown content */}
                  <Link to="#" className="block px-4 py-2">
                    Profile
                  </Link>
                  <Link to="#" className="block px-4 py-2">
                    Settings
                  </Link>

                  <hr className="border-t border-gray-800 mx-2 my-1" />

                  <button
                    onClick={logOut}
                    className="block px-4 py-2 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
