import React from 'react'
import portfolio1 from "../../assets/portfolioimg/portfolio1.jpg";
import portfolio2 from '../../assets/portfolioimg/portfolio2.jpg';
import portfolio3 from '../../assets/portfolioimg/portfolio3.jpg';
import portfolio4 from '../../assets/portfolioimg/portfolio4.jpg';

function Portfolio() {
    return (
        <div className="flex items-center justify-center h-screen mt-[50px] ">

            <div className="w-full h-[1020px] px-[250px] pt-[19px] pb-[29px] flex-col justify-start items-center gap-[50px] inline-flex">

                <div className="w-[369px] h-[6rem] relative flex flex-col justify-center items-center">
                    <div className="text-center text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Portfolio</div>
                    <div className="text-center text-sky-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Showcase</div>
                </div>

                <div className="w-[1420px] h-[700px] relative">
                    <div className="w-[700px] h-[340px] grid grid-cols-2">
                        <img className="w-[700px] h-[340px] left-0 top-0 absolute rounded-[20px]" src={portfolio1} alt='' />
                        <div className="w-[252px] h-[50px] pl-[73px] pr-[72px] py-[15px] left-[448px] top-[290px] absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                        </div>
                    </div>
                    <div className="w-[340px] h-[340px] left-[720px] top-0 absolute">
                        <div className="w-[340px] h-[340px] left-0 top-0 absolute bg-emerald-200 rounded-[20px]" />
                        <div className="w-[275px] h-[60px] left-[33px] top-[140px] absolute text-center text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">Lorum ipsum</div>
                    </div>
                    <div className="w-[340px] h-[340px] left-[1080px] top-0 absolute">
                        <img className="w-[340px] h-[340px] left-0 top-0 absolute rounded-[20px]" src={portfolio2} alt='' />
                        <div className="w-[340px] h-80 left-0 top-0 absolute rounded-[20px]" />
                        <div className="w-[252px] h-[50px] pl-[73px] pr-[72px] py-[15px] left-[88px] top-[290px] absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                        </div>
                    </div>
                    <div className="w-[340px] h-[340px] left-0 top-[360px] absolute">
                        <img className="w-[340px] h-[340px] left-0 top-0 absolute rounded-[20px]" src={portfolio3} alt='' />
                        <div className="w-[340px] h-80 left-0 top-0 absolute rounded-[20px]" />
                        <div className="w-[252px] h-[50px] pl-[73px] pr-[72px] py-[15px] left-[88px] top-[290px] absolute bg-sky-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                        </div>
                    </div>
                    <div className="w-[340px] h-[340px] left-[360px] top-[360px] absolute">
                        <div className="w-[340px] h-[340px] left-0 top-0 absolute bg-amber-200 rounded-[20px]" />
                        <div className="left-[33px] top-[147px] absolute text-center text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">Lorum ipsum</div>
                    </div>
                    <div className="w-[700px] h-[340px] left-[720px] top-[360px] absolute">
                        <img className="w-[700px] h-[340px] left-0 top-0 absolute rounded-[20px]" src={portfolio4} alt='' />
                        <div className="w-[700px] h-[340px] left-0 top-0 absolute rounded-[20px]" />
                        <div className="w-[252px] h-[50px] pl-[73px] pr-[72px] py-[15px] left-[448px] top-[290px] absolute bg-amber-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                        </div>
                    </div>
                </div>

                <div className="w-[122px] h-11 relative">
                    <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-sm font-normal font-['Inter'] leading-none ">Explore All More</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;