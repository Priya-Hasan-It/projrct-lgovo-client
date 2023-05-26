import React from "react";
import "./LetsTogether.css";
import together from "../../assets/together.svg";

const LetsTogether = () => {
  return (
    <div >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#e9f8f5"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="">
        <img src={together} alt="" className="mx-auto mt-[-140px]" />
      </div>

      <div className="bgColor pb-48">
        <h1 className="text-center text-5xl font-bold text-black pt-5 pb-36">
          Let’s do it together
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
          {/* card 1 */}

          <div className="card card-compact w-96 mx-auto">
            <figure>
              <img
                src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_2.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/rider-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Become a rider</h2>
              <p className="text-center font-size text-black">Be your own boss! Enjoy flexibility, freedom and competitive earnings by delivering with Glovo.</p>
              <div className="card-actions justify-center">
                <button className=" btn color-btn hover:bg-emerald-700 border-none rounded-3xl font-bold px-12 mt-3">Join us</button>
              </div>
            </div>
          </div>
          {/* card 2 */}

          <div className="card card-compact w-96 mx-auto">
            <figure>
              <img
                src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_2.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/partners-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Become a partner</h2>
              <p className="text-center font-size text-black">Grow with Glovo! Our technology and user base can help you boost sales and unlock new opportunities!</p>
              <div className="card-actions justify-center">
                <button className=" btn color-btn hover:bg-emerald-700 border-none rounded-3xl font-bold px-12 mt-3">Join us</button>
              </div>
            </div>
          </div>
          {/* card 3 */}

          <div className="card card-compact w-96 mx-auto">
            <figure>
              <img
                src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_2.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/careers-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Careers</h2>
              <p className="text-center font-size text-black">Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!</p>
              <div className="card-actions justify-center">
                <button className=" btn color-btn hover:bg-emerald-700 border-none rounded-3xl font-bold px-12 mt-3">Join us</button>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default LetsTogether;
