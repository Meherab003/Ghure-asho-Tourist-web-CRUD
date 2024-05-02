import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import PopularSpots from "../Components/PopularSpots";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllCountries from "../Components/AllCountries";

const Home = () => {
    const {darkMode} = useContext(AuthContext)
  const spots = useLoaderData();
  return (
    <div className={`relative ${darkMode && "dark"}`}>
      <div className="dark:bg-slate-900">
        <Banner></Banner>
        <PopularSpots spots={spots}></PopularSpots>
        <AllCountries></AllCountries>
      </div>
    </div>
  );
};

export default Home;
