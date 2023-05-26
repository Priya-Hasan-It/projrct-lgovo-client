import React from "react";
import apple from '../../assets/app-store-button.svg'
import googlePlayStore from '../../assets/google-play-button.svg'

const DownloadApp = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_3.0,h_793,w_720,b_transparent/https://glovoapp.com/images/landing/download-app-desktop.png"
            className="w-6/12 mt-[-15px] ml-48"
          />
          <div>
            <div className="">
              <img className="mx-auto"
                src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_1.0,h_122,w_105,b_transparent/https://glovoapp.com/images/landing/download-app-logo.svg"
                alt=""
              />
            </div>
            <h1 className="text-5xl font-bold text-center">Download the app</h1>
            <p className="py-6 text-center">
            Order anything and track it in real time with the Glovo app.
            </p>
            <div className="flex justify-center gap-3">
                <img src={apple} alt="" />
                <img src={googlePlayStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
