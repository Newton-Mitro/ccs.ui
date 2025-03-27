import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/brand/logo.png";
import useOuterClick from "../hooks/useOuterClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faBuilding,
  faOutdent,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex h-screen overflow-auto text-xs text-gray-400 bg-zinc-900 lg:text-sm">
      {/* Left Sidebar */}
      <div
        className={`bg-zinc-950  border-r border-gray-800 transition-all duration-300  ${
          isSidebarOpen ? "w-64" : "w-12"
        }`}
      >
        <div className="">
          <div className="">
            <Link
              to={"/"}
              className="flex items-center h-16 gap-2 px-2 border-b border-gray-800 bg-neutral-900"
            >
              <img
                className={`rounded-full ${isSidebarOpen ? "h-12" : "w-12"}`}
                src={logo}
                alt=""
              />
              <h1 className="text-xl font-bold">Credit Solution</h1>
            </Link>
          </div>
          <div className="sidebar">
            {/* [ ]Sidebar Navigation Goes Here.. */}
            <ul
              className={`flex flex-col ${isSidebarOpen ? "" : "items-center"}`}
            >
              <NavLink
                to={"/kyc/customers"}
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-yellow-100 font-bold bg-cyan-950/50" : ""
                  } hover:cursor-pointer hover:bg-slate-700/50 p-2 transition-all duration-300 flex items-center gap-2`;
                }}
              >
                <FontAwesomeIcon icon={faPeopleGroup} size="lg" />
                <span
                  className={`${isSidebarOpen ? "inline-block" : "hidden"}`}
                >
                  Customers
                </span>
              </NavLink>
              <NavLink
                to={"/kyc/peoples"}
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-yellow-100 font-bold bg-cyan-950/50" : ""
                  } hover:cursor-pointer hover:bg-slate-700/50 p-2 transition-all duration-300 flex items-center gap-2`;
                }}
              >
                <FontAwesomeIcon icon={faUser} size="lg" />
                <span
                  className={`${isSidebarOpen ? "inline-block" : "hidden"}`}
                >
                  Peoples
                </span>
              </NavLink>
              <NavLink
                to={"organizations"}
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-yellow-100 font-bold bg-cyan-950/50" : ""
                  } hover:cursor-pointer hover:bg-slate-700/50 p-2 transition-all duration-300 flex items-center gap-2`;
                }}
              >
                <FontAwesomeIcon icon={faBuilding} size="lg" />
                <span
                  className={`${isSidebarOpen ? "inline-block" : "hidden"}`}
                >
                  Organizations
                </span>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between h-16 px-4 border-b border-gray-800 bg-neutral-900">
          <button onClick={toggleSidebar} className="">
            {isSidebarOpen ? (
              <FontAwesomeIcon icon={faOutdent} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faBarsStaggered} size="xl" />
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="flex h-full">
            <NavLink
              to="/home"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-gray-300 font-bold" : ""
                } flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 w-8 hover:text-yellow-100`;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="hidden lg:inline-block">Home</span>
            </NavLink>

            <NavLink
              to="/human-resource"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-gray-300 font-bold" : ""
                } flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 w-8 hover:text-yellow-100`;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <span className="hidden lg:inline-block">HR Mgmt.</span>
            </NavLink>

            <NavLink
              to="/procurement"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-gray-300 font-bold" : ""
                } flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 w-8 hover:text-yellow-100`;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>

              <span className="hidden lg:inline-block">Supply Chain</span>
            </NavLink>

            <div className="relative">
              <button
                ref={notificationRef}
                name="notifications"
                onClick={toggleNotificationDropdown}
                className="flex flex-col items-center justify-center w-8 h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 hover:text-yellow-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>

                <span className="hidden lg:inline-block">Notifications</span>
              </button>

              {/* Profile Dropdown */}
              {isNotificationDropdownOpen && (
                <div className="absolute right-0 z-50 mt-1 border border-gray-800 rounded-md shadow-lg w-72 bg-neutral-900">
                  <div className="p-2">Voucher Pending For Approval</div>
                  <div className="p-2">
                    Leave Application Pending For Approval
                  </div>
                  <div className="p-2">Deposit Account Created</div>
                  <div className="p-2">Loan Application Submitted</div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                ref={userRef}
                name="profile"
                onClick={toggleProfileDropdown}
                className="flex flex-col items-center justify-center w-8 h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 hover:text-yellow-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <span className="hidden lg:inline-block">User Mgmt.</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 z-50 mt-1 border border-gray-800 rounded-md shadow-lg w-52 bg-neutral-900">
                  {/* Add profile dropdown content */}
                  <Link to="#" className="block px-4 py-2">
                    Profile
                  </Link>
                  <Link to="#" className="block px-4 py-2">
                    Settings
                  </Link>

                  <hr className="mx-2 my-1 border-t border-gray-800" />

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

        <main className="flex-1 p-2 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
