import React, { useEffect, useState } from "react";
import { CgGym } from "react-icons/cg";
import { VscListSelection } from "react-icons/vsc";
import { Link } from "react-scroll";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const getPositionScroll = () => {
      const resultado = window.scrollY;
      setValor(resultado);
    };
    getPositionScroll();

    window.addEventListener("scroll", getPositionScroll);
    if (window.scrollY > 500) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [valor]);

  console.log(valor);
  return (
    <nav
      className={` transition-all ease-in-out ${
        active ? " fixed bg-gray-800 " : " absolute "
      } z-50  w-full flex flex-wrap items-center justify-between bg-transparent py-3 px-2`}
    >
      <div className="flex flex-wrap items-center justify-between container mx-auto  max-w-7xl">
        <div>
          <a className="text-2xl cursor-pointer text-white font-bold flex items-center justify-center">
            CACERESGYM <CgGym className="text-gray-500" />
          </a>
        </div>
        <div>
          <ul className="hidden md:flex gap-4 text-white font-semibold text-md">
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link smooth={true} to="hero">
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link smooth={true} to="about">
                {" "}
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link smooth={true} to="trainer">
                Trainer
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link smooth={true} to="contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <div className="text-white cursor-pointer">
            <VscListSelection  onClick={()=>setActiveNavbar(!activeNavbar)} fontSize={25} />
          </div>

          <ul
            className={`absolute top-12 transition-all ease-in-out inset-0 text-center bg-gray-800 overflow-hidden flex flex-col items-center justify-center ${activeNavbar?' h-96 ':' h-0 '}  gap-4 text-white font-semibold text-md`}
          >
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link onClick={()=>setActiveNavbar(!activeNavbar)} smooth={true} to="hero">
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link onClick={()=>setActiveNavbar(!activeNavbar)} smooth={true} to="about">
                {" "}
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link onClick={()=>setActiveNavbar(!activeNavbar)} smooth={true} to="trainer">
                Trainer
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 ease-in-out transition-all">
              <Link onClick={()=>setActiveNavbar(!activeNavbar)} smooth={true} to="contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
