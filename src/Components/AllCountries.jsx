import axios from "axios";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import CountryCard from "./CountryCard";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/countries")
      .then((data) => setCountries(data.data));
  }, []);
  const [text] = useTypewriter({
    words: [
      "Bangladesh",
      "Thailand",
      "Indonesia",
      "Malaysia",
      "Vietnam",
      "Cambodia",
    ],
    loop: 0,
  });

  return (
    <div className="border pt-5 md:pt-10">
      <div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center md:mb-2 lg:mb-4 dark:text-white">
          From Countries like:
        </h2>
        <div className="App text-center h-24">
          <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-green-600">
            {text}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-5 lg:px-10 pb-5">
          {countries.map((singleCountry) => (
            <CountryCard
              key={singleCountry._id}
              singleCountry={singleCountry}
            ></CountryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCountries;
