import TouristSpotCard from "./TouristSpotCard";

const PopularSpots = ({ spots }) => {
  console.log(spots);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="my-5 text-3xl md:text-5xl text-center font-semibold">
        Popular Spots
      </h2>
      <p className="w-2/3 mx-auto text-center">
        Southeast Asia is full natural wonders. Here you will find Thailand,
        Bangladesh, Indonesia, Malaysia, Vietnam, Cambodia. Go whichever country
        you want see the wonders of the place the culture
      </p>
      {/* cards */}
      <div className="grid gird-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 my-10">
       { spots.slice(0,6).map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)}
      </div>
    </div>
  );
};

export default PopularSpots;
