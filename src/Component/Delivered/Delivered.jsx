import React from "react";
import deliverd from "../../assets/delivery.svg";
import restaurants from "../../assets/restaurants.svg";
import groceries from "../../assets/groceries.svg";

const Delivered = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-5xl mb-16">
        Anything delivered
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* card 1 */}
        <div className="card w-96 mx-auto my-9">
          <figure>
            <img src={restaurants} alt="Shoes" />
          </figure>
          <div className=" text-center">
            <h2 className="text-center font-bold text-xl">
              Your city's top restaurants
            </h2>
            <p className="text-center text-md">
              With a great variety of restaurants you can order your favourite
              food or
              <span className="bg-amber-400 font-bold ml-1 px-1">
                explore new restaurants nearby!
              </span>
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="card w-96 mx-auto my-9">
          <figure>
            <img src={deliverd} alt="Shoes" />
          </figure>
          <div className=" text-center">
            <h2 className="text-center font-bold text-xl">Fast delivery</h2>
            <p className="text-center text-md">
              We pride ourselves on speed. Order or send anything in your city
              and 
              <span className="bg-amber-400 font-bold ml-1 px-1">
                we'll pick it up and deliver it in minutes.
              </span>
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="card  w-96 mx-auto my-9">
          <figure>
            <img src={groceries} alt="Shoes" />
          </figure>
          <div className=" text-center">
            <h2 className="text-center font-bold text-xl">
              Groceries delivery & more
            </h2>
            <p className="text-center text-md">
              Find anything you need! From
              <span className="bg-amber-400 font-bold ml-1 px-1">
                supermarkets to shops, pharmacies to florists
              </span>
              — if it's in your city you can count on us to get it.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
      <button className="btn bg-emerald-600 hover:bg-emerald-700 border-none rounded-3xl font-bold px-12 ">Explore stores around you</button>
      </div>
    </div>
  );
};

export default Delivered;
