import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {userLogin} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //user login
        userLogin(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content md:w-1/2 flex-col mt-14">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="card-body flex flex-col md:flex-row items-center justify-center pt-0">
            <div className="w-full md:w-1/2">
              <button className="btn btn-outline w-full">
                <FaGoogle className=" md:text-lg" />
                Google Login
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <button className="btn btn-outline w-full">
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
  );
};

export default Login;
