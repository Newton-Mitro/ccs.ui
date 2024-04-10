import { useEffect, useRef, useState } from "react";
import { CgPlayListAdd, CgPlayListRemove } from "react-icons/cg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/brand/logo_w.png";

function useOuterClick(callback: any) {
  const innerRef: any = useRef();
  const callbackRef: any = useRef();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // read most recent callback and innerRef dom node from refs
    function handleClick(e: any) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
}

const AuthLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  const userRef = useOuterClick((e: any) => {
    setNotificationDropdownOpen(false);
    setProfileDropdownOpen(false);
  });

  // const notificationRef = useOuterClick((e: any) => {
  //   setNotificationDropdownOpen(false);
  //   setProfileDropdownOpen(false);
  // });

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
    <div className="flex h-screen bg-gray-900  text-xs">
      {/* Left Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="">
          <div className=" bg-neutral-800 border-r-2 border-neutral-700  border-dashboard">
            <Link to={"/"}>
              <img className="h-16" src={logo} alt="" />
            </Link>
          </div>
          <div className="sidebar">
            {/* [ ]Sidebar Navigation Goes Here.. */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden text-gray-300">
        <header className="bg-neutral-800 h-16 flex items-center justify-between px-4">
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
              to=""
              className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:bg-neutral-900 px-2 w-24"
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

              <span>Authorization</span>
            </NavLink>
            <div className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:bg-neutral-900 px-2 w-24">
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

              <span>Customer</span>
            </div>
            <div className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:bg-neutral-900 px-2 w-24">
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

              <span>Core Banking</span>
            </div>
            <div className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:bg-neutral-900 px-2 w-24">
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

              <span>Accounting</span>
            </div>
            <div className="relative">
              <button
                onClick={toggleNotificationDropdown}
                className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:bg-neutral-900 px-2 w-24 focus:outline-none"
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

                <span className="hidden md:inline-block mr-1">
                  Notifications
                </span>
              </button>

              {/* Profile Dropdown */}
              {isNotificationDropdownOpen && (
                <div className="absolute right-0 w-52 bg-neutral-800 border rounded-md shadow-lg">
                  {/* Add profile dropdown content */}
                  <Link to="#" className="block px-4 py-2">
                    Profile
                  </Link>
                  <Link to="#" className="block px-4 py-2">
                    Settings
                  </Link>

                  <hr className="border-t mx-2 my-1" />

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
                onClick={toggleProfileDropdown}
                className="flex flex-col items-center justify-center h-full hover:cursor-pointer hover:bg-neutral-900 px-2 w-24 focus:outline-none"
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

                <span className="hidden md:inline-block mr-1">John Doe</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 w-52 bg-neutral-800 border rounded-md shadow-lg">
                  {/* Add profile dropdown content */}
                  <Link to="#" className="block px-4 py-2">
                    Profile
                  </Link>
                  <Link to="#" className="block px-4 py-2">
                    Settings
                  </Link>

                  <hr className="border-t mx-2 my-1" />

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

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
