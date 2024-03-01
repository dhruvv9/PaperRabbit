import React from 'react'
import primg from "../../assets/PR.png"
import { useState, useEffect } from 'react';



function Header() {

    const [isBlurred, setIsBlurred] = useState(false);
    

 
  

  useEffect(() => {

        const handleScroll = () => {
            const navbarHeight = 11
            if (window.scrollY >= navbarHeight) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
    }, [])

    return (

        <div className="fixed top-0 left-0 w-full bg-gray-50 bg-opacity-70 backdrop-blur-20 justify-center items-center inline-flex z-10">
        <div className="w-[1420px] h-11 relative ">
        <div className={isBlurred ? 'absolute inset-0 bg-opacity-50 backdrop-blur-sm' :''}>
        {isBlurred && <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>}
    
            <div className="h-11 px-2 left-[240px] top-[1px] absolute justify-center items-center inline-flex">
                <div className="text-justify text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Home</div>
            </div>
            <div className="w-[60px] px-2 pt-2 left-[326px] top-0 absolute flex-col justify-center items-center gap-px inline-flex">
                <div className="px-0.5 pt-1 pb-2 justify-center items-center gap-px inline-flex">
                    <div className="text-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Hutch</div>
                </div>
            </div>
            <div className="w-[70px] px-2 pt-2 left-[416px] top-0 absolute flex-col justify-center items-center gap-px inline-flex">
                <div className="px-0.5 pt-1 pb-2 justify-center items-center gap-px inline-flex">
                    <div className="text-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Service</div>
                </div>
            </div>
            <div className="w-[77px] px-2 pt-2 left-[516px] top-0 absolute flex-col justify-center items-center gap-px inline-flex">
                <div className="px-0.5 pt-1 pb-2 justify-center items-center gap-px inline-flex">
                    <div className="text-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Portfolio</div>
                </div>
            </div>
            <div className="w-[70px] px-2 pt-2 left-[623px] top-0 absolute flex-col justify-center items-center gap-px inline-flex">
                <div className="px-0.5 pt-1 pb-2 justify-center items-center gap-px inline-flex">
                    <div className="text-center text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Lounge</div>
                </div>
            </div>
            <div className="h-11 px-2 left-[723px] top-[1px] absolute justify-center items-center inline-flex">
                <div className="text-justify text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">About Us</div>
            </div>
            <div className="h-11 px-2 left-[831px] top-[1px] absolute justify-center items-center inline-flex">
                <div className="text-justify text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Career</div>
            </div>
            <div className="h-11 px-2 left-[922px] top-0 absolute justify-center items-center inline-flex">
                <div className="text-justify text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Store</div>
            </div>
            <div className="h-11 px-2 left-[1004px] top-0 absolute justify-center items-center inline-flex">
                <div className="text-justify text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">World</div>
            </div>
            <div className="h-11 px-2 left-[1089px] top-0 absolute justify-center items-center inline-flex">
                <div className="text-justify text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">Contact US</div>
            </div>
            <div className="w-10 h-[22px] left-[1238px] top-[11px] absolute justify-center items-center inline-flex">
                <div className="w-10 h-[22px] relative">
                    <div className="w-10 h-[22px] left-0 top-0 absolute bg-blue-300 rounded-[65px]" />
                    <div className="w-[15.32px] h-[15.23px] left-[3.40px] top-[3.38px] absolute bg-white rounded-[52.50px]" />
                    <div className="w-[8.17px] h-[8.80px] left-[22.98px] top-[3.38px] absolute">
                        <div className="w-[4.09px] h-[4.06px] left-[4.09px] top-0 absolute bg-white rounded-xl" />
                        <div className="w-[2.21px] h-[2.20px] left-[-0px] top-[6.60px] absolute bg-white rounded-xl" />
                    </div>
                </div>
            </div>
            <div className="w-6 h-6 left-[1335.50px] top-[10px] absolute" />
            <div className="left-0 top-[7px] absolute text-black text-[32px] font-normal font-['Revelstoke'] leading-[30px]">PAPER RABBIT</div>
            <div className="w-10 h-10 left-[1378px] top-[2px] absolute">
                <div className="w-[42px] h-[42px] left-0 top-0 absolute opacity-40 rounded-full" />
                <img className="w-9 h-9 left-[3px] top-[3px] absolute" src={primg} alt=''/>
            </div>
        </div>
    </div>
    </div>
    )}

export default Header;