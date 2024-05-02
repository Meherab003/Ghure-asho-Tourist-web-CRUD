import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const {userLogin , googleLogin, githubLogin} = useContext(AuthContext);
    const location =  useLocation(); 
    const navigate = useNavigate();

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
            Swal.fire({
                title: "Great!",
                text: "User Successfully Logged in!",
                icon: "success"
              });
           //Navigate after login
           navigate(location?.state ? location.state : '/' )   
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    
    }
    const handleGoogleLogin = () => {
        //google user login
        googleLogin()
        .then(res => {
            console.log(res.user)
            Swal.fire({
                title: "Great!",
                text: "User Successfully Logged in!",
                icon: "success"
              });
              navigate(location?.state ? location.state : '/' )   
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
        
    }

    const handleGithubLogin = () => {
        //github user login
        githubLogin()
        .then(res => {
            console.log(res.user)
            Swal.fire({
                title: "Great!",
                text: "User Successfully Logged in!",
                icon: "success"
              });
              navigate(location?.state ? location.state : '/' )   
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content w-[95%] md:w-1/2 flex-col mt-14">
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
              <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                <FaGoogle className=" md:text-lg" />
                Google Login
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <button onClick={handleGithubLogin} className="btn btn-outline w-full">
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
