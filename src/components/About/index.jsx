import React from "react";
import ImagenSobre from "../../assets/images/traininginfo.jpg";
import { GiStrongMan } from "react-icons/gi";
const About = () => {
  return (
    <section className="bg-black">
      <div className=" container mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div style={{ maxHeight: "75vh" }}>
            <img
              className="w-full sm:h-full object-cover"
              src={ImagenSobre}
              alt="foto sonbre el gimnasio"
            />
          </div>
          <div className="text-white  flex justify-center items-center flex-col text-left">
            <div
              className=" px-5 py-10  rounded-lg "
              style={{
                backgroundColor: "#080a0f",
                boxShadow: "1px 2px 3px 1px #ffffffe",
              }}
            >
              <h2 className="text-xl text-yellow-500 font-bold uppercase flex gap-2 items-center">
                About us <GiStrongMan className="text-5xl text-yellow-600" />
              </h2>
              <p className=" text-5xl font-bold">Safe Body Building</p>

              <p className="text-justify font-light my-5 text-xl">
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.{" "}
              </p>
              <div className="flex flex-col gap-3 font-semibold text-xl">
                <p>The latest & greatest gym equipment</p>
                <p>5-inch, quality foam floor padding</p>
                <p>3 professional trainers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
