import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import PopularSpots from "../Components/PopularSpots";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllCountries from "../Components/AllCountries";
import TravelCard from "../Components/TravelCard";
import RatingSection from "../Components/RatingSection";

const Home = () => {
  const { darkMode } = useContext(AuthContext);
  const cards = [
    {
      id: 1,
      name: "Airplane",
      img: "https://cdn.mos.cms.futurecdn.net/mqRUPPghetpzNQpcRwKJ4j-1200-80.jpg",
    },
    {
      id: 2,
      name: "Bus",
      img: "https://novabus.com/wp-content/uploads/2019/08/lfse_brampton.jpg",
    },
    {
      id: 3,
      name: "Ship",
      img: "https://ik.imgkit.net/3vlqs5axxjf/TW/uploadedImages/All_TW_Art/2018/1231/T1231COSTASMERALDA_HR.jpg?n=2687&width=168&height=168&mode=crop&Anchor=MiddleCenter&tr=w-1200%2Cfo-auto",
    },
  ];
  const spots = useLoaderData();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-slate-900">
        <Banner></Banner>
        <PopularSpots spots={spots}></PopularSpots>
        <AllCountries></AllCountries>
        <div className="py-10 bg-green-100 dark:bg-slate-700 mb-5">
          <h2 className="text-center mb-3 lg:py-5 px-5 text-3xl lg:text-5xl font-semibold dark:text-white">
            Chose How You Want To Travel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-5 lg:px-10 pb-5">
            {cards.map((card) => (
              <TravelCard key={card.id} card={card}></TravelCard>
            ))}
          </div>
        </div>
        <RatingSection></RatingSection>
      </div>
    </div>
  );
};

export default Home;
