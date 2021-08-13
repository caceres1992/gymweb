import React, { useState } from "react";
import Alerta from "../Alerta";

const Contact = () => {
  const [dato, setDato] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = dato;

  const onChangeHandle = (e) => {
    setDato({ ...dato, [e.target.name]: e.target.value });
  };

  const sendFormulario = (e) => {
    e.preventDefault();

    if ((name.trim() == "", email.trim() == "", message === "")) {
      Alerta.fire({
        icon: "warning",
        title: "All fields are required",
      });
      return
    }

    Alerta.fire({
      icon: "success",
      title: "The message was sent successfully",
    });

    setDato({
      name: "",
      email: "",
      message: "",
    })
  };

  return (
    <section className="bg-gray-900 pb-10">
      <div className="  relative">
        <div className="container mx-auto px-3 py-5">
          <div className="text-center text-white">
            <h2 className=" text-4xl pt-10 uppercase  font-bold">Contact Us</h2>
            <p className="mt-6">
              Contact us to ask any questions, aquire a membership, talk to our
              trainers or anything else{" "}
            </p>
          </div>

          <form
            action=""
            onSubmit={(e) => sendFormulario(e)}
            className="mx-auto max-w-2xl text-white p-6 mt-10 bg-gray-600"
          >
            <div className="">
              <label className="block my-3 font-semibold" htmlFor="name">
                Name :
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="w-full py-2 text-gray-900 px-2"
                placeholder="Your name"
                onChange={onChangeHandle}
              />
            </div>{" "}
            <div>
              <label className="block my-3 font-semibold" htmlFor="name">
                Email :
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChangeHandle}
                className="w-full py-2 text-gray-900 px-2"
                placeholder="example@example.com"
              />
            </div>{" "}
            <div>
              <label className="block my-3 font-semibold" htmlFor="name">
                Message :
              </label>
              <textarea
                rows="7"
                name="message"
                value={message}
                onChange={onChangeHandle}
                className="w-full px-2 text-gray-900 py-2"
                placeholder="type your message"
              ></textarea>
            </div>
            <button className="bg-yellow-500  py-3  mx-auto block mt-7 rounded-md uppercase font-bold px-10">
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
