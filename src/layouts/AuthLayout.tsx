import { useState } from "react";
import { CgPlayListAdd, CgPlayListRemove } from "react-icons/cg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/brand/logo.png";
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
        className={`bg-zinc-950  border-r border-gray-800  ${
          isSidebarOpen ? "w-64" : "w-12"
        }`}
      >
        <div className="">
          <div className="">
            <Link
              to={"/home"}
              className="flex items-center gap-2 bg-neutral-900 border-b border-gray-800 h-16  px-2"
            >
              <img
                className={` bg-white rounded-full ${
                  isSidebarOpen ? "h-12" : "w-12"
                }`}
                src={logo}
                alt=""
              />
              <h1 className="font-bold text-xl">CCU CFS</h1>
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
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
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
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
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
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="hidden lg:inline-block">Home</span>
            </NavLink>
            <NavLink
              to="/auth"
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
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Authorization</span>
            </NavLink>
            <NavLink
              to="/kyc/customers"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <span className="hidden lg:inline-block">KYC Mgmt.</span>
            </NavLink>
            <NavLink
              to="/core-banking"
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
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Core Banking</span>
            </NavLink>
            <NavLink
              to="/accounting"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                />
              </svg>

              <span className="hidden lg:inline-block">Accounting</span>
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
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 w-8 hover:text-yellow-100 focus:outline-none"
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
                <div className="absolute right-0 mt-1 w-72 bg-neutral-900 border border-gray-800 rounded-md shadow-lg z-50">
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
                className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:text-gray-300w-10 lg:w-24 w-8 hover:text-yellow-100 focus:outline-none"
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
