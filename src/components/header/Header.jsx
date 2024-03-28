import React, { useState } from "react";
import search from "../../assets/portfolioimg/Icons/search_24px.svg";
import Hutch from "./subnavbars/Hutch";
import Services from "./subnavbars/Services";
import Portfolio from "./subnavbars/Portfolio";
import Lounge from "./subnavbars/Lounge";
import AboutUs from "./subnavbars/About Us";

import dayimg from '../../assets/headerimg/Group 2.svg'
import darkimg from '../../assets/headerimg/night.svg'

import darkpr from '../../assets/headerimg/PR2.svg'
import lightpr from '../../assets/headerimg/PR.svg'


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
    <div className="fixed top-0 w-[100%] lg:h-11 h-12 bg-gray-50 dark:bg-black  z-50 flex justify-center items-center  bg-opacity-50 backdrop-blur-sm dark:bg-opacity-50 dark:backdrop-blur-sm">

      <div className="lg:w-[57%]  mac:max-w-[73%] w-full   h-11 relative flex items-center justify-between">
        {/* <div className="h-full text-zinc-950 dark:text-white relative lg:text-[2rem] text-[1.5rem] font-normal font-['Revelstoke'] "> */}
        <Link to='/'>
          <div className="h-11  text-zinc-950 dark:text-white relative lg:text-[2rem] text-[1.7rem] font-normal font-['Revelstoke'] flex justify-center items-center object-contain ">
          PAPER RABBIT
          </div>
        </Link>
        {/* </div> */}

        <div className=" h-full w-[63%] relative grid grid-cols-10 grid-rows-1 sm:hidden md:hidden ">

          <div className={`${hide ? ' flex-col  h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col  h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <Link to='/'>
              <div className=" text-zinc-950 dark:text-white  text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Home
              </div>
            </Link>
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <Link to='/hutch'>
              <div className="text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Hutch
              </div>
              <Hutch />
            </Link>
          </div>


          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <Link to="/services">
              <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Services
              </div>
            </Link>
            <Services />
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex fle items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              Portfolio
            </div>
            <Portfolio />
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              Lounge
            </div>
            <Lounge />
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              About Us
            </div>
            <AboutUs />
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              Carrer
            </div>
            <AboutUs />
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              Store            </div>
            <AboutUs />
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              World
            </div>
            {/* <World /> */}
          </div>

          <div className={`${hide ? ' flex-col   h-full text-center cursor-pointer  flex items-center justify-center' : 'flex-col   h-full text-center cursor-pointer  flex items-center justify-center group/item'}`} onClick={disappear}>
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              Contact Us
            </div>
            {/* <Contactus /> */}
          </div>
        </div>

        <div className="h-full relative" >
          {mode ? <img className="w-10 h-full" src={darkimg} alt="darkmode" onClick={modeChange} /> : <img className="w-10 h-full" src={dayimg} alt="darkmode" onClick={modeChange} />}
        </div>

        <div className="relative flex items-end justify-between gap-1">
          {mode ? <img className="w-7 h-7" src={search} alt="image1" onClick={modeChange} /> : <img className="w-7 h-7" src={search} alt="image1" onClick={modeChange} />}
          {mode ? <img className="block-bg w-9 h-9" src={lightpr} alt="image2" onClick={modeChange} /> : <img className="block-bg w-9 h-9" src={darkpr} alt="image2" onClick={modeChange} />}

          {/* <img className="w-7 h-7" src={search} alt="image1" />
          <img className="block-bg w-9 h-9" src={primg} alt="image2" /> */}
        </div>
      </div>
      {/* </div> */}
    </div>

  );
}

export default Header;
