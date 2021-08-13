import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-7xl mx-auto w-4/5 py-5">
        <h3 className="text-white text-center font-bold text-xl">
          Jasson dev {new Date().getFullYear()}
        </h3>
        <h3 className="text-gray-600  font-semibold text-center  text-sm">
          &copy; no copyrigth
        </h3>
      </div>
    </section>
  );
};

export default Footer;
