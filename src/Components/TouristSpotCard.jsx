import PropTypes from "prop-types";
import { BiWorld } from "react-icons/bi";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
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
    <div className="card border card-compact bg-base-100 shadow-xl">
      <figure className="h-64">
        <img className="object-cover w-full h-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
        <h2 className="card-title text-2xl lg:text-3xl font-medium flex flex-col justify-start items-start">{name} <span className="text-sm flex gap-1 items-center font-light"><BiWorld /> {country}</span></h2>
        {description.length > 100 ? (
          <p>
            {description.slice(0, 100)}{" "}
            <Link
              className="font-semibold text-black hover:underline hover:text-blue-900"
              to={`/spot/${_id}`}
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p className="font-medium text-gray-700">{description}</p>
        )}
        </div>
        <div className="flex-grow">
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
          <p className="text-3xl md:text-5xl text-green-600 flex items-center font-bold mt-5">
            <FaBangladeshiTakaSign />
            {average}{" "}
            <span className="text-sm md:text-lg text-black font-medium">
              /Per Day
            </span>
          </p>
          <Link to={`/touristSpots/${_id}`} className="btn btn-outline rounded-full btn-success ">View <FaArrowRight className="animate-pulse"/></Link>
        </div>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  spot: PropTypes.object,
};

export default TouristSpotCard;
