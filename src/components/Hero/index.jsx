import React from "react";
import VideoHero from "../../assets/videos/videoheromain.mp4";
import { BsArrowDownShort } from "react-icons/bs";
import {Link} from 'react-scroll'
const Hero = () => {
  return (
    <main>
      <div className="bg-black">
        <div className="relative flex justify-center items-center center h-screen overflow-hidden max-w-8xl w-full ">
          <video
            autoPlay
            loop
            className="absolute z-10 max-w-none  min-h-98 "
            style={{ filter: "brightness(0.1)" }}
          >
            <source src={VideoHero} type="video/mp4" />
          </video>
          '
          <div className=" relative z-30 text-center w-full max-w-7xl">
            <h1 className="text-6xl sm:text-7xl md:text-9xl text-white font-extrabold">GIMNASIO</h1>
            <h2 className="text-5xl sm:text-6xl md:text-8xl text-white font-extrabold">
              CACE<span className="text-yellow-600">RES</span>{" "}
            </h2>

            <button className=" mt-12 py-3 px-10 uppercase  text-white font-bold  back bg-yellow-600 rounded-sm hover:bg-yellow-500">
            <Link smooth="true" to="contact">would you like to train?</Link>  
            </button>
          </div>
        </div>
        
      </div>
      
    </main>
  );
};

export default Hero;
