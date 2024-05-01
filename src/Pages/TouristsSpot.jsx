import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../Components/TouristSpotCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const TouristsSpot = () => {
  const { user,darkMode } = useContext(AuthContext);
  console.log(user.email)
  const spots = useLoaderData();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen flex flex-col  items-center justify-center py-20 md:py-20 px-2 md:px-5 lg:px-10 mx-auto dark:bg-slate-900">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center my-5 dark:text-white">
          Tourist Spots Added By Users:{" "}
          <span className="text-green-600">{spots.length}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {spots.map((spot) => (
            <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristsSpot;
