// import axios from "axios";
import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ singleCountry }) => {


  return (
    <Link to={`/touristSpots/countries/${singleCountry.country}`}
      className="hero rounded-2xl hover:shadow-xl hover:shadow-slate-600 dark:hover:shadow-slate-800 transition duration-500 hover:scale-105"
      style={{
        backgroundImage: `url(${singleCountry.countryImg})`,
      }}
    >
      <div className="hero-overlay rounded-2xl bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex items-center justify-center h-52">
          <h1 className="mb-5 text-white text-3xl sm:text-4xl md:text-5xl font-bold hover-text-green-600">
            {singleCountry.country}
          </h1>
        </div>
      </div>
    </Link >
  );
};

CountryCard.propTypes = {
  singleCountry: PropTypes.object,
};

export default CountryCard;
