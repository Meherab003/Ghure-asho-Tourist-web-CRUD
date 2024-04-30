import PropTypes from "prop-types";
import { useContext } from "react";
import { BiWorld } from "react-icons/bi";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const TouristSpotCard = ({ spot }) => {
  const { darkMode } = useContext(AuthContext);
  const {
    _id,
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
      <div className="card border card-compact dark:bg-slate-900 bg-base-100 shadow-xl">
        <figure className="h-64">
          <img className="object-cover w-full h-full" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title dark:text-white text-2xl lg:text-3xl font-medium flex flex-col justify-start items-start">
              {name}{" "}
              <span className="text-sm flex gap-1 items-center font-light">
                <BiWorld /> {country}
              </span>
            </h2>
            {description.length > 100 ? (
              <p className="dark:text-slate-300">
                {description.slice(0, 100)}{" "}
                <Link
                  className="font-semibold dark:text-blue-600 text-black hover:underline hover:text-blue-900"
                  to={`/touristSpots/${_id}`}
                >
                  Read More...
                </Link>
              </p>
            ) : (
              <p className="font-medium text-gray-700 dark:text-white">{description}</p>
            )}
          </div>
          <div className="flex-grow dark:text-white">
            <div className="grid grid-cols-2 font-semibold">
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
            </div>
          </div>
          <div className="card-actions justify-end items-center">
            <p className="text-2xl md:text-4xl text-green-600 flex items-center font-bold mt-5">
              <FaBangladeshiTakaSign />
              {average}{" "}
              <span className="text-sm md:text-lg text-black font-medium dark:text-white">
                /Per Day
              </span>
            </p>
            <Link
              to={`/touristSpots/${_id}`}
              className="btn btn-outline rounded-full btn-success "
            >
              View <FaArrowRight className="animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  spot: PropTypes.object,
};

export default TouristSpotCard;
