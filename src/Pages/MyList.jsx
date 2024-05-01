import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const MyList = () => {
  const { user, darkMode } = useContext(AuthContext);
  const [addedSpots, setAddedSpots] = useState([]);
//   console.log(user.email);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/mylist/${user.email}`)
      .then((data) => setAddedSpots(data.data));
  }, []);

  const handleUpdate = (id) =>{
    console.log(id)
  }
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="overflow-x-auto px-2 md:px-5 lg:px-10 mx-auto dark:bg-slate-900 dark:text-slate-200 py-20">
        <table className="table dark:bg-slate-800">
          {/* head */}
          <thead>
            <tr>
              <th className="dark:text-white text-xs text-[16px] font-semibold"></th>
              <th className="dark:text-white text-xs text-[16px] font-semibold">Name</th>
              {/* <th className="dark:text-white text-xs text-[16px] font-semibold">Country</th> */}
              <th className="dark:text-white text-xs text-[16px] font-semibold">Edit</th>
              <th className="dark:text-white text-xs text-[16px] font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {addedSpots.map((addedSpot, idx) => (
              <tr key={addedSpot._id} className=" text-xs md:text-sm  font-medium hover:bg-slate-300 dark:hover:bg-slate-700">
                <th>{idx + 1}</th>
                <td>{addedSpot.name}</td>
                {/* <td>{addedSpot.country}</td> */}
                <td className="text-sm lg:text-xl"><button onClick={() => handleUpdate(addedSpot._id)}><FaEdit /></button></td>
                <td className="text-[16px] lg:text-2xl text-center"><MdOutlineDelete /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
