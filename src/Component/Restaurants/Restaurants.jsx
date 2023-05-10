import React, { useEffect } from "react";
import { useState } from "react";
import Restaurant from "../Restaurant/Restaurant";

const Restaurants = () => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    fetch("restaurants.json")
      .then((res) => res.json())
      .then((data) => {
        setResturants(data.restaurants);
        console.log(data);
      });
  });

  return (
    <div className="pb-24 text-ceter">
      <h1 className="text-5xl text-center font-bold ">
        Top restaurants and more in Glovo
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-7 justify-center mt-10">
        {resturants?.map((restaurant) => (
          <div className="mx-auto">
            <Restaurant restaurant={restaurant} key={restaurant._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
