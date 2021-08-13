import React, { useState } from "react";
import Trainer1 from "../../assets/images/training1.jpg";
import Trainer2 from "../../assets/images/training2.jpg";
import Trainer3 from "../../assets/images/trainer4.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import Modal from "../Modal";
const Trainer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="relative">
      <Modal setOpenModal={setOpenModal} openModal={openModal} />
      <div className=" container mx-auto max-w-7xl relative  py-12">
        <h2 className="text-4xl pt-10 text-center font-bold ">
          MEET OUR <span className="text-yellow-500">TRAINERS</span>
        </h2>
        <p className=" pt-12 text-center w-4/5 md:w-2/5   mx-auto">
          Our trainers are are here to dedicate the time and effort that you
          need to get in the best shape of your life{" "}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(min(100%,25rem),1fr))",
            gridAutoRows: "35rem",
            gap: "1rem",
            paddingTop: "3rem",
            padding: "3rem 1rem 0 ",
          }}
        >
          <div className="relative  overflow-hidden">
            <img
              src={Trainer1}
              alt="imagen ruth"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <div className="absolute  flex items-center justify-center  text-white bg-black  opacity-0 duration-300 hover:opacity-75 inset-0  transition-all ease-in-out">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold capitalize">
                  Ruth Benavente
                </h3>
                <p className="text-5xl font-semibold py-1 text-yellow-500">
                  Spinning
                </p>
                <p className="py-3 text-center uppercase font-bold">schedule</p>
                <div className="grid grid-cols-3 text-xs gap-1 text-center">
                  <div className="bg-yellow-700 p-1">MONDAY</div>
                  <div className="bg-yellow-700 p-1">WENSDAY</div>
                  <div className="bg-yellow-700 p-1">FRIDAY</div>
                </div>

                <button className="mt-5 text-yellow-500 font-bold border-yellow-500 border px-5 py-2  hover:bg-yellow-500 hover:text-white">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="relative  overflow-hidden">
            <img
              src={Trainer2}
              alt="imagen Pedro"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <div className="absolute  flex items-center justify-center  text-white bg-black  opacity-0 duration-300 hover:opacity-75 inset-0  transition-all ease-in-out">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold capitalize">Pedro Castro</h3>
                <p className="text-5xl font-semibold py-1 text-yellow-500">
                  CrossFit
                </p>
                <p className="py-3 text-center uppercase font-bold">schedule</p>
                <div className="grid grid-cols-3 text-xs gap-1 text-center">
                  <div className="bg-yellow-700 p-1">Tuesday</div>
                  <div className="bg-yellow-700 p-1">Thursday</div>
                  <div className="bg-yellow-700 p-1">Saturday</div>
                </div>

                <button className="mt-5 text-yellow-500 font-bold border-yellow-500 border px-5 py-2  hover:bg-yellow-500 hover:text-white">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="relative  overflow-hidden">
            <img
              src={Trainer3}
              alt="imagen ruth"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <div className="absolute  flex items-center justify-center  text-white bg-black  opacity-0 duration-300 hover:opacity-75 inset-0  transition-all ease-in-out">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold capitalize">Sergio Cueva</h3>
                <p className="text-5xl font-semibold py-1 text-yellow-500">
                  Body Pump
                </p>
                <p className="py-3 text-center uppercase font-bold">schedule</p>
                <div className="grid grid-cols-2 text-xs gap-1 text-center">
                  <div className="bg-yellow-700 p-1">Saturday</div>
                  <div className="bg-yellow-700 p-1">Sunday</div>
                </div>

                <button className="mt-5 text-yellow-500 font-bold border-yellow-500 border px-5 py-2  hover:bg-yellow-500 hover:text-white">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          
          onClick={() => setOpenModal(!openModal)}
          className="  text-xl w-72 relative z-10 mx-auto uppercase bg-yellow-500 text-white py-2 sm:mb-16 mb-5  shadow-xl rounded-md    flex items-center gap-1 justify-center mt-7  hover:text-yellow-600"
        >
          more Trainers <BiRightArrowAlt size="30" color="white" />
        </button>
      </div>

      <svg
        className="absolute bottom-0 max-w-none "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
      >
        <path
          fill="#111827"
          fill-opacity="1"
          d="M0,224L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Trainer;
