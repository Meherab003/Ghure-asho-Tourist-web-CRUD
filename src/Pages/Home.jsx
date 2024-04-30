import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import PopularSpots from "../Components/PopularSpots";

const Home = () => { 
    const spots = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <PopularSpots spots={spots}></PopularSpots>
        </div>
    );
};

export default Home;