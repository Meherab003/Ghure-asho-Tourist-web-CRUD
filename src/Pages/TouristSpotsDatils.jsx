import { useContext } from "react";
import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const TouristSpotsDatils = () => {
  const {darkMode} = useContext(AuthContext)
  const spot = useLoaderData();
  const {
    photo,
    name,
    country,
    location,
    description,
    average,
    seasonality,
    time,
    visitor,
  } = spot;
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="py-20 flex flex-col lg:flex-row  px-3 md:px-5 lg:px-10  min-h-screen gap-5 dark:bg-slate-900 dark:text-slate-200">
        <div className="w-full lg:w-1/3 flex-1 ">
          <img className="object-cover w-full h-full" src={photo} alt="" />
        </div>
        {/* text */}
        <div className="flex-1 flex flex-col h-full gap-3">
          <p className="text-3xl font-semibold text-black dark:text-green-600">{name}</p>
          <p className="flex-1">{description}</p>
          <div className="flex-grow grid grid-cols-2 font-semibold">
            <p className="flex items-center gap-2">
              <FaUsers />
              <span>{visitor}/year</span>
            </p>
            <p className="flex items-center gap-2">
              <IoTime />
              <span>{time}</span>
            </p>
            <p className="flex items-center gap-2">
              <TiWeatherPartlySunny />
              <span>{seasonality}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot />
              <span>{location}</span>
            </p>
            <p className="flex items-center gap-2">
              <BiWorld />
              <span>{country}</span>
            </p>
            <p className="flex-grow flex items-center gap-2">
              <FaBangladeshiTakaSign />
              <span>{average}</span>
            </p>
          </div>
          <Link
            className="btn bg-green-600 text-black w-full"
            to="/touristSpots"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotsDatils;
