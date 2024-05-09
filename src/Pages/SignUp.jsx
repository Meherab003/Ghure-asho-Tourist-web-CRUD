import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, userUpdate, darkMode } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //create user
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        //update users name and photo
        userUpdate(name, photo)
          .then(() => {
            console.log("Profile Updated");
            Swal.fire({
              title: "Great!",
              text: "User Successfully Create!",
              icon: "success",
            });
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 dark:bg-slate-900">
        <div className="flex flex-col items-center justify-center gap-5 w-[95%] md:w-1/2 mt-16 pb-5">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-600">Sign Up now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSignUp} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered dark:bg-slate-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered dark:bg-slate-700"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary bg-green-700 hover:bg-green-800 text-white dark:bg-white border-none dark:text-black dark:hover:bg-slate-400">Sign Up</button>
              </div>
            </form>
            <div className="card-body pt-2">
              <p>
                {`Already have an account?`}{" "}
                <Link className="text-blue-600 hover:underline" to="/login">
                  Please Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
