import { useState } from "react";
import { CgPlayListAdd, CgPlayListRemove } from "react-icons/cg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/icon/logo.png";

const AuthLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Left Sidebar */}
      <div
        className={`bg-gray-800 text-white w-80 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="">
          <div className=" bg-white border-r-2  border-dashboard">
            <Link to={"/"}>
              <img width="207px" height="90px" src={logo} alt="" />
            </Link>
          </div>
          <div className="sidebar">
            {/* [ ]Sidebar Navigation Goes Here.. */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white ">
          <div className="flex items-center justify-between py-2 px-4">
            <button
              onClick={toggleSidebar}
              className="text-dashboard focus:outline-none"
            >
              {isSidebarOpen ? (
                <CgPlayListRemove size="32" />
              ) : (
                <CgPlayListAdd size="32" />
              )}
            </button>

            {/* User Profile Dropdown */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQH2ojI2YbkGWg/profile-displayphoto-shrink_200_200/0/1695814690811?e=1717027200&v=beta&t=hvniGnHpNs1jZkEVTYCghTApfja22KLPeU7XyZhYYZw" // Replace with your user's profile picture URL
                  alt="User Profile"
                  className="w-6 h-6 rounded-full"
                />
                <span>Authorization</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQH2ojI2YbkGWg/profile-displayphoto-shrink_200_200/0/1695814690811?e=1717027200&v=beta&t=hvniGnHpNs1jZkEVTYCghTApfja22KLPeU7XyZhYYZw" // Replace with your user's profile picture URL
                  alt="User Profile"
                  className="w-6 h-6 rounded-full"
                />
                <span>Customer</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQH2ojI2YbkGWg/profile-displayphoto-shrink_200_200/0/1695814690811?e=1717027200&v=beta&t=hvniGnHpNs1jZkEVTYCghTApfja22KLPeU7XyZhYYZw" // Replace with your user's profile picture URL
                  alt="User Profile"
                  className="w-6 h-6 rounded-full"
                />
                <span>Core Banking</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQH2ojI2YbkGWg/profile-displayphoto-shrink_200_200/0/1695814690811?e=1717027200&v=beta&t=hvniGnHpNs1jZkEVTYCghTApfja22KLPeU7XyZhYYZw" // Replace with your user's profile picture URL
                  alt="User Profile"
                  className="w-6 h-6 rounded-full"
                />
                <span>Accounting</span>
              </div>
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex flex-col items-center focus:outline-none"
                >
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQH2ojI2YbkGWg/profile-displayphoto-shrink_200_200/0/1695814690811?e=1717027200&v=beta&t=hvniGnHpNs1jZkEVTYCghTApfja22KLPeU7XyZhYYZw" // Replace with your user's profile picture URL
                    alt="User Profile"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="hidden md:inline-block mr-1">John Doe</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg">
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
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet></Outlet>
        </main>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-gray-800 text-white w-80 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="">
          <div className=" bg-white border-r-2  border-dashboard">
            <Link to={"/"}>
              <img width="207px" height="90px" src={logo} alt="" />
            </Link>
          </div>
          <div className="sidebar">
            {/* [ ]Sidebar Navigation Goes Here.. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
