import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddSpots = () => {
  const { user, darkMode } = useContext(AuthContext);
  // console.log(user.email)
  const { email, displayName } = user;

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const average = form.average.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitor = form.visitor.value;

    const newSpot = {
      photo,
      name,
      country,
      location,
      description,
      average,
      seasonality,
      time,
      visitor,
      email,
      displayName,
    };
    // console.log(newSpot);

    fetch("https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Done!",
            text: "Spot Successfully Added!",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen flex flex-col  items-center justify-center py-20 md:py-20 px-2 md:px-5 lg:px-10 mx-auto dark:bg-slate-900">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center my-5 dark:text-white">
          Add Your Favorite Tourist Spot
        </h2>
        <form
          onSubmit={handleAddSpot}
          className="border rounded-2xl shadow-2xl w-full md:w-11/12 mx-auto bg-green-50 dark:bg-slate-800 dark:border-none"
        >
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 p-3 md:p-5">
            {/* input */}
            <label className="form-control w-full lg:col-span-2">
              <div className="label">
                <span className="label-text dark:text-white">Photo URL:</span>
              </div>
              <input
                type="url"
                name="photo"
                placeholder="Enter the photo url"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Spot Name:</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter spot name"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Country:</span>
              </div>
              <input
                type="text"
                name="country"
                placeholder="Enter country name"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Location:</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Description:</span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="Enter short description"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Average Cost:</span>
              </div>
              <input
                type="text"
                name="average"
                placeholder="Enter average cost"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Seasonality:</span>
              </div>
              <input
                type="text"
                name="seasonality"
                placeholder="Enter seasonality"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">Travel Time:</span>
              </div>
              <input
                type="text"
                name="time"
                placeholder="Enter travel time"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-white">{`Total Visitor (Per Year):`}</span>
              </div>
              <input
                type="text"
                name="visitor"
                placeholder="Enter total visitor per year"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
                required
              />
            </label>
            {/* input */}
          </div>
          <div className="form-control p-3 md:px-5">
            <button className="btn bg-green-600 text-black border-node dark:bg-white dark:text-black dark:border-none dark:hover:bg-slate-400 dark:hover:text-white">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpots;
