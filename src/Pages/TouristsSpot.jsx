import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../Components/TouristSpotCard";

const TouristsSpot = () => {
  const spots = useLoaderData();
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center py-20 md:py-20 w-[95%] mx-auto">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center my-5">
        Tourist Spots Added By Users:{" "}
        <span className="text-green-600">{spots.length}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {spots.map((spot) => (
          <TouristSpotCard 
          key={spot._id}
          spot={spot}
          ></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpot;
