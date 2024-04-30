import { useContext } from "react";
import TouristSpotCard from "./TouristSpotCard";
import { AuthContext } from "../Provider/AuthProvider";

const PopularSpots = ({ spots }) => {
    const {darkMode} = useContext(AuthContext)
    // console.log(darkMode)
  console.log(spots);
  return (
    <div className={`w-11/12 mx-auto ${darkMode && 'dark'} dark:bg-slate-900`}>
      <h2 className="my-5 text-3xl md:text-5xl text-center font-semibold dark:text-white">
        Popular Spots
      </h2>
      <p className="w-2/3 mx-auto text-center dark:text-slate-200">
        Southeast Asia is full natural wonders. Here you will find Thailand,
        Bangladesh, Indonesia, Malaysia, Vietnam, Cambodia. Go whichever country
        you want see the wonders of the place the culture
      </p>
      {/* cards */}
      <div className="grid gird-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 mt-10 pb-10">
       { spots.slice(0,6).map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)}
      </div>
    </div>
  );
};

export default PopularSpots;
