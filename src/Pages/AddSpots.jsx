const AddSpots = () => {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center py-20 md:py-20 w-[95%] mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center my-5">Add Your Favorite Tourist Spot</h2>
      <form className="border rounded-2xl shadow-2xl w-full md:w-11/12 mx-auto bg-green-50">
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 p-3 md:p-5">
          {/* input */}
          <label className="form-control w-full lg:col-span-2">
            <div className="label">
              <span className="label-text">Photo URL:</span>
            </div>
            <input
              type="text"
              placeholder="Enter the photo url"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Spot Name:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Country:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Location:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Average Cost:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seasonality:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Travel Time:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">{`Total Visitor (Per Year):`}</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {/* input */}
        </div>
        <div className="form-control p-3 md:px-5">
          <button className="btn bg-green-600 text-black">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddSpots;
