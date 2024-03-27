import Img from "assets/icon/logo.png";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };
    console.log(user);

    fetch(`${import.meta.env.VITE_API_KEY_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          const jwtToken = data?.data?.token;

          console.log(data?.data);
          if (jwtToken) {
            localStorage.setItem("accessToken", jwtToken);
            setToken(jwtToken);
            form.reset();
            toast.success(data?.message);
          } else {
            toast.error(data?.message);
            console.log(data?.message);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error?.message);
      });
  };

  return (
    <div className="login-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-img">
          <Link to="/">
            <img alt="logo" src={Img} />
          </Link>
        </div>
        <h3>Login</h3>

        <label className="login-label" htmlFor="username">
          Email
        </label>

        <button type="submit" className="login-btn">
          Log In
        </button>
        {/* <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
