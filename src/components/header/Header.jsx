import React from 'react'
import primg from "../../assets/PR.png"
import search from '../../assets/portfolioimg/Icons/search_24px.svg'
import { useState, useEffect } from 'react';
import Hutch from './subnavbars/Hutch';



function Header() {

    const [hoverstatus, setHoverstatus] = useState(true);
    const [id, setId] = useState(0);

    const mousehover = (id) => {
        setHoverstatus(!hoverstatus);
        console.log(hoverstatus);
        setId(id);
        console.log(id);
    }

    return (
        <div className="fixed top-0 w-full h-11 bg-gray-50  z-50 flex justify-center items-center gap-2.5 bg-opacity-50 backdrop-blur-sm">
            <div className="lg:w-[1420px] w-full  h-11 relative flex items-center justify-between">

                <div className="p-[1rem] text-black text-[2.2rem] font-normal font-['Revelstoke'] lg:leading-[30px] lg:mx-3">PAPER RABBIT</div>

                <div className='w-[941px]  items-center justify-evenly hidden lg:flex'>

                    <div className="w-14 h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Home
                    </div>

                    <div className="w-16 h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(2)} onMouseLeave={() => mousehover(0)}>
                        Hutch
                    </div>
                    { (hoverstatus && id == 2) && <Hutch /> }
                    
                    <div className="w-[74px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Services
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[81px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Portfolio
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[81px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Lounge
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[98px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        About Us
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[61px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Carrer
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[52px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Store
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[55px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        World
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

                    <div className="w-[98px] h-11 flex-col gap-2.5  text-center flex items-center justify-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal" onMouseEnter={() => mousehover(1)} onMouseLeave={() => mousehover(0)}>
                        Contact Us
                    </div>
                    { (hoverstatus && id == 1) && <Hutch /> }

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

                <div className="w-fit flex items-center justify-evenly">
                    <img className="w-7 h-7 mx-4" src={search} />
                    <img className="w-9 h-9 mx-4" src={primg} />
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Header;