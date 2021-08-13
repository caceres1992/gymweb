import React from "react";

const Modal = ({ setOpenModal, openModal }) => {
  return (
    <div
      className={`fixed top-0 inset-0  items-center justify-center z-50 overflow-hidden   ${
        openModal ? "flex" : "hidden "
      }`}
    >
      <div className=" w-full h-96 max-w-5xl bg-gray-800 flex items-center gap-5  justify-center flex-col rounded-lg mx-4">
        <p className="text-5xl text-white ">En Proceso...</p>

        <button
          onClick={() => setOpenModal(false)}
          className="border py-2 px-5 ease-in-out transition-all border-yellow-600 text-yellow-600 rounded-sm hover:bg-yellow-600 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
