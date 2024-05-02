import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import TouristSpotCard from "../Components/TouristSpotCard";

const CountrySpots = () => {
    const {darkMode} = useContext(AuthContext)
    const Country = useLoaderData();
    console.log(Country)
    const [countrySpots, setCountryspots] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/spots/country/${Country.country}`)
        .then(data => setCountryspots(data.data))
    }, [])

    return (
        <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen flex flex-col  items-center justify-center py-20 md:py-20 px-2 md:px-5 lg:px-10 mx-auto dark:bg-slate-900">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center my-5 dark:text-white">
          Tourist Spots In 
          <span className="text-green-600"> {Country.country}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {countrySpots.map((spot) => (
            <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
          ))}
        </div>
      </div>
    </div>
    );
};

export default CountrySpots;