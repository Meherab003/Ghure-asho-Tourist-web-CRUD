import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, googleLogin, githubLogin, darkMode } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //user login
    userLogin(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Great!",
          text: "User Successfully Logged in!",
          icon: "success",
        });
        //Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleLogin = () => {
    //google user login
    googleLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Great!",
          text: "User Successfully Logged in!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleGithubLogin = () => {
    //github user login
    githubLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Great!",
          text: "User Successfully Logged in!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex items-center justify-center min-h-screen bg-base-200 dark:bg-slate-900 pb-5">
        <div className="w-[95%] md:w-1/2 flex flex-col items-center justify-center gap-5 mt-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-600">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleLogin} className="card-body pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered dark:bg-slate-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered dark:bg-slate-700"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover dark:text-slate-200">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white bg-green-700 hover:bg-green-800 dark:bg-white border-none dark:text-black dark:hover:bg-slate-400">Login</button>
              </div>
            </form>
            <div className="card-body flex flex-col md:flex-row items-center justify-center pt-0">
              <div className="w-full md:w-1/2">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline w-full dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <FaGoogle className=" md:text-lg" />
                  Google Login
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <button
                  onClick={handleGithubLogin}
                  className="btn btn-outline w-full dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <FaGithub className="md:text-lg" />
                  Github Login
                </button>
              </div>
            </div>
            <div className="card-body pt-0">
              <p>
                {`Don't have an account?`}{" "}
                <Link className="text-blue-600 hover:underline" to="/signup">
                  Please Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
