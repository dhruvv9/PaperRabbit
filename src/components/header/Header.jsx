import React, { useState } from "react";
import primg from "../../assets/PR.png";
import search from "../../assets/portfolioimg/Icons/search_24px.svg";
import Hutch from "./subnavbars/Hutch";
import Services from "./subnavbars/Services";
import Portfolio from "./subnavbars/Portfolio";
import Lounge from "./subnavbars/Lounge";
import AboutUs from "./subnavbars/About Us";

import dayimg from '../../assets/headerimg/Group 2.svg'
import darkimg from '../../assets/headerimg/night.svg'

import { Link } from "react-router-dom";

function Header(props) {

  const { mode, setMode } = props;

  const modeChange = () => {
    setMode(!mode)
  }

  const [hide, setHide] = useState(false);

  const disappear = () => {
    setHide(!hide)
  }

  return (
    <div className="fixed top-0 w-full h-11 bg-gray-50 dark:bg-black  z-50 flex justify-center items-center gap-2.5 bg-opacity-50 backdrop-blur-sm dark:bg-opacity-50 dark:backdrop-blur-sm">
      <div className="lg:w-[56%] w-full  h-11 relative flex items-center justify-between">
        <Link to='/'>
          <div className=" text-zinc-950 dark:text-white relative lg:text-[2.2rem] brand1:text-[1.5rem] font-normal font-['Revelstoke'] lg:leading-[30px] ">
            PAPER RABBIT
          </div>
        </Link>

        <div className="w-[58rem]  items-center justify-evenly hidden mac:flex lg:flex">

          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
          <Link to='/'>
            <div className=" text-zinc-950 dark:text-white  text-sm font-normal font-['Inter'] leading-normal ">
              Home
            </div>
            </Link>
          </div>

          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
          <Link to='/hutch'>
            <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
              Hutch
            </div>
            <Hutch />
            </Link>
          </div>


          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
            <Link to="/services">
              <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
                Services
              </div>
            </Link>
            <Services />
          </div>

          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
              Portfolio
            </div>
            <Portfolio />
          </div>

          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
              Lounge
            </div>
            <Lounge />
          </div>

          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
              About Us
            </div>
            <AboutUs />
          </div>

          <div className={`${hide ? 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
              World
            </div>
            {/* <World /> */}
          </div>

          <div className={`${hide ? 'w-18 h-11 flex-col gap-2.5  text-center flex items-center justify-center' : 'w-18 h-11 flex-col gap-2.5  text-center flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-normal ">
              Contact Us
            </div>
            {/* <Contactus /> */}
          </div>
        </div>

        {/* <div > */}
        {mode ? <img className="w-10 h-10" src={darkimg} alt="darkmode" onClick={modeChange} /> : <img className="w-10 h-10" src={dayimg} alt="darkmode" onClick={modeChange} />}
        {/* </div> */}

        <div className=" relative flex items-center justify-start gap-1">
          <img className="w-7 h-7" src={search} />
          <div className="rounded-[300rem] w-9 h-9">
            <img className="block-bg w-9 h-9" src={primg} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>

  );
}

export default Header;
