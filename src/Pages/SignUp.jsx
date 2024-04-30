import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const SignUp = () => {
    const {createUser, userUpdate} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        //create user
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            //update users name and photo
            userUpdate(name, photo)
            .then(() => {
                console.log("Profile Updated")
                Swal.fire({
                    title: "Great!",
                    text: "User Successfully Create!",
                    icon: "success"
                  });
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-[95%] md:w-1/2 flex-col mt-14">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Sign Up</button>
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
  );
};

export default SignUp;
