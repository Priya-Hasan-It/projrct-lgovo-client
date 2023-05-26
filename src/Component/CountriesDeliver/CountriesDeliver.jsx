import React, { useEffect } from "react";
import Country from "../../assets/countries.svg";
import Wave from "../../assets/wave(6).svg";
import { useState } from "react";
import CountryName from "../CountryName/CountryName";

const CountriesDeliver = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("countries.json")
      .then((res) => res.json())
      .then((data) => setCountries(data.countries));
  });

  return (
    <div className="">
      {/* <img src={Wave} alt="" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFBF00"
          fill-opacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,208C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className=" bg-amber-400 mt-[-20px] py-16">
        <img src={Country} alt="Countries " className="mx-auto" />
        <h1 className="text-5xl mt-6 font-bold text-center">
          Countries where we deliver
        </h1>
        <div className="text-center mt-16 ">
          <div className='px-2 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:w-4/5 w-full mx-auto gap-3 '>
          {countries?.map((country) => (
            <CountryName key={country._id} country={country} />
          ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CountriesDeliver;
