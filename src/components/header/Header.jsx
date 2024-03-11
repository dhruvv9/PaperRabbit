import React from "react";
import primg from "../../assets/PR.png";
import search from "../../assets/portfolioimg/Icons/search_24px.svg";
import Hutch from "./subnavbars/Hutch";
import Services from "./subnavbars/Services";
import Portfolio from "./subnavbars/Portfolio";
import Lounge from "./subnavbars/Lounge";
import AboutUs from "./subnavbars/About Us";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0 w-full h-11 bg-gray-50  z-50 flex justify-center items-center gap-2.5 bg-opacity-50 backdrop-blur-sm">
      <div className="lg:w-[1420px] w-full  h-11 relative flex items-center justify-between">
        <div className=" text-black text-[2.2rem] font-normal font-['Revelstoke'] lg:leading-[30px] ">
          PAPER RABBIT
        </div>

        <div className="w-[941px]  items-center justify-evenly hidden lg:flex">
          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              Home
            </div>
          </div>

          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              Hutch
            </div>
            <Hutch />
          </div>

          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              <Link to="/services"> Services </Link>
            </div>
            <Services />
          </div>

          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              Portfolio
            </div>
            <Portfolio />
          </div>

          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              Lounge
            </div>
            <Lounge />
          </div>

          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              About Us
            </div>
            <AboutUs />
          </div>

          <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              World
            </div>
            {/* <World /> */}
          </div>

          <div className="w-18 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item">
            <div className=" text-zinc-950 text-sm font-normal font-['Inter'] leading-normal ">
              Contact Us
            </div>
            {/* <Contactus /> */}
          </div>
        </div>

        <div className="w-10 h-[22px]  justify-center items-center hidden lg:inline-flex">
          <div className="w-10 h-[22px] relative">
            <div className="w-10 h-[22px] left-0 top-0 absolute bg-blue-300 rounded-[65px] border border-black" />
            <div className="w-[15.32px] h-[15.23px] left-[3.40px] top-[3.38px] absolute bg-white rounded-[52.50px]" />
            <div className="w-[8.17px] h-[8.80px] left-[22.98px] top-[3.38px] absolute">
              <div className="w-[4.09px] h-[4.06px] left-[4.09px] top-0 absolute bg-white rounded-xl" />
              <div className="w-[2.21px] h-[2.20px] left-[-0px] top-[6.60px] absolute bg-white rounded-xl" />
            </div>
          </div>
        </div>

        <div className="w-fit flex items-center justify-between">
          <img className="w-7 h-7 mx-5" src={search} />
          <img className="w-9 h-9" src={primg} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Header;
