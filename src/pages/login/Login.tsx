import Img from "assets/brand/logo.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    const form = e.target;

    navigate(from, { replace: true });

    // const email = form.email.value;
    // const password = form.password.value;

    // const user = {
    //   email,
    //   password,
    // };
    // console.log(user);

    // fetch(`${import.meta.env.VITE_API_KEY_URL}/api/user/login`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data?.success) {
    //       const jwtToken = data?.data?.token;

    //       console.log(data?.data);
    //       if (jwtToken) {
    //         localStorage.setItem("accessToken", jwtToken);
    //         setToken(jwtToken);
    //         form.reset();
    //         toast.success(data?.message);
    //       } else {
    //         toast.error(data?.message);
    //         console.log(data?.message);
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     toast.error(error?.message);
    //   });
  };

  return (
    <div className="login-container flex items-center justify-center h-full w-full">
      <form
        onSubmit={handleLogin}
        className="login-form bg-zinc-900 px-10 pb-10 pt-6 w-full mx-6  lg:w-1/2 flex items-center justify-center flex-col border border-gray-700"
      >
        <div className="flex items-center flex-col mb-6 gap-2 ">
          <Link to="/">
            <img className="h-32 bg-white rounded-full" alt="logo" src={Img} />
          </Link>
          <h3 className="text-2xl text-center">CCU CFS Login</h3>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-4/6">
          <div className="flex flex-col w-full">
            <label className="login-label" htmlFor="username">
              Email
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-sm py-1 border-gray-700 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="login-label" htmlFor="username">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-sm py-1 border-gray-700 bg-transparent shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
            />
          </div>

          <button
            type="submit"
            className="login-btn hover:font-bold hover:bg-gray-800 bg-zinc-800 border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm rounded py-2 mt-4 hover:cursor-pointer"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
