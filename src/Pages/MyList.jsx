import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user, darkMode } = useContext(AuthContext);
  const [addedSpots, setAddedSpots] = useState([]);
  //   console.log(user.email);

  useEffect(() => {
    axios
      .get(`https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/mylist/${user.email}`)
      .then((data) => setAddedSpots(data.data));
  }, []);

  const handleDelete = (_id) => {
    // console.log('deleted')
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("de")
        fetch(`https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your spot has been deleted.",
                icon: "success",
              });
              const remaining = addedSpots.filter((spt) => spt._id !== _id);
              setAddedSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="overflow-x-auto px-2 md:px-5 lg:px-10 mx-auto dark:bg-slate-900 dark:text-slate-200 py-20">
        <table className="table dark:bg-slate-800">
          {/* head */}
          <thead>
            <tr>
              <th className="dark:text-white text-xs text-[16px] font-semibold"></th>
              <th className="dark:text-white text-xs text-[16px] font-semibold">
                Name
              </th>
              {/* <th className="dark:text-white text-xs text-[16px] font-semibold">Country</th> */}
              <th className="dark:text-white text-xs text-[16px] font-semibold">
                Edit
              </th>
              <th className="dark:text-white text-xs text-[16px] font-semibold">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {addedSpots.map((addedSpot, idx) => (
              <tr
                key={addedSpot._id}
                className=" text-xs md:text-sm  font-medium hover:bg-slate-300 dark:hover:bg-slate-700"
              >
                <th>{idx + 1}</th>
                <td>{addedSpot.name}</td>
                {/* <td>{addedSpot.country}</td> */}
                <td className="text-sm lg:text-xl">
                  <Link to={`/touristSpots/update/${addedSpot._id}`}>
                    <FaEdit />
                  </Link>
                </td>
                <td className="text-[16px] lg:text-2xl text-center">
                  <button onClick={() => handleDelete(addedSpot._id)}>
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
