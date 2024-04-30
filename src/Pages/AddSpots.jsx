import Swal from 'sweetalert2'


const AddSpots = () => {

    const handleAddSpot = e => {
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

        const newSpot = {photo, name, country, location, description, average, seasonality, time, visitor};
        console.log(newSpot)

        fetch('http://localhost:5000/spots', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Done!",
                    text: "User Successfully LogOut!",
                    icon: "success"
                  });
            }
        })
    };
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center py-20 md:py-20 w-[95%] mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center my-5">Add Your Favorite Tourist Spot</h2>
      <form onSubmit={handleAddSpot} className="border rounded-2xl shadow-2xl w-full md:w-11/12 mx-auto bg-green-50">
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 p-3 md:p-5">
          {/* input */}
          <label className="form-control w-full lg:col-span-2">
            <div className="label">
              <span className="label-text">Photo URL:</span>
            </div>
            <input
              type="url"
              name='photo'
              placeholder="Enter the photo url"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Spot Name:</span>
            </div>
            <input
              type="text"
              name='name'
              placeholder="Enter spot name"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Country:</span>
            </div>
            <input
              type="text"
              name='country'
              placeholder="Enter country name"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Location:</span>
            </div>
            <input
              type="text"
              name='location'
              placeholder="Enter location"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description:</span>
            </div>
            <input
              type="text"
              name='description'
              placeholder="Enter short description"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Average Cost:</span>
            </div>
            <input
              type="text"
              name='average'
              placeholder="Enter average cost"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seasonality:</span>
            </div>
            <input
              type="text"
              name='seasonality'
              placeholder="Enter seasonality"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Travel Time:</span>
            </div>
            <input
              type="text"
              name='time'
              placeholder="Enter travel time"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">{`Total Visitor (Per Year):`}</span>
            </div>
            <input
              type="text"
              name='visitor'
              placeholder="Enter total visitor per year"
              className="input input-bordered w-full"
              required
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
