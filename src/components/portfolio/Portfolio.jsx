import React from 'react'
import portfolio1 from "../../assets/portfolioimg/portfolio1.jpg";
import portfolio2 from '../../assets/portfolioimg/portfolio2.jpg';
import portfolio3 from '../../assets/portfolioimg/portfolio3.jpg';
import portfolio4 from '../../assets/portfolioimg/portfolio4.jpg';

function Portfolio() {
    return (
        <div className="flex items-center justify-center h-screen mt-[50px] ">

            <div className="w-full h-screen lg:h-[1020px] md:px-[250px] md:pt-[19px] md:pb-[29px] lg:px-[250px] lg:pt-[19px] lg:pb-[29px] flex-col justify-start items-center gap-[50px] inline-flex">

                <div className="lg:w-[369px] w-full lg:h-[6rem]  md:h-full  relative flex flex-col justify-center items-center">
                    <div className="text-center text-black text-[34px] md:text-[64px] lg:text-[64px]  font-normal font-['Revelstoke']  md:leading-[64px] lg:leading-[64px]">Portfolio</div>
                    <div className="text-center text-sky-200 text-5xl md:text-8xl lg:text-8xl font-normal font-['Heaven'] md:leading-[64px] lg:leading-[64px]">Showcase</div>
                </div>

                <div className="lg:w-[1420px] w-screen lg:h-[700px] h-full relative gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 grid grid-cols-1 grid-rows-4 md:p-[5rem]">

                    <div className="lg:w-[700px] w-full lg:h-[340px] h-full relative m-1">
                        <img className="lg:w-[700px] w-screen h-full  lg:h-[340px]  left-0 top-0 -z-10 absolute rounded-[20px]" src={portfolio1} alt='' />
                        <div className="lg:w-[252px] lg:h-[50px] w-full h-full pl-[73px] pr-[72px] py-[15px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                    </div>

                    <div className='w-full h-full flex items-center justify-center relative' >
                        <div className="lg:w-[340px] w-full h-full lg:h-[340px]  flex flex-col items-center justify-center relative m-1">
                            <div className="lg:w-[340px] w-full h-full lg:h-[340px]  left-0 top-0 -z-10 absolute bg-emerald-200 rounded-[20px]" />
                            <div className="lg:w-[275px] w-full h-full lg:h-[60px]  text-center text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">Lorum ipsum</div>
                        </div>
                        <div className="lg:w-[340px] w-full h-full lg:h-[340px]  relative m-1">
                            <img className="lg:w-[340px] w-full h-full lg:h-[340px]  rounded-[20px]" src={portfolio2} alt='' />
                            <div className="lg:w-[340px] w-full h-full lg:h-[340px]  left-0 top-0 -z-10 absolute bg-emerald-200 rounded-[20px]" />
                            <div className="lg:w-[252px] w-full h-full lg:h-[50px]  pl-[73px] pr-[72px] py-[15px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                        </div>
                    </div>


                    <div className='w-full h-full flex items-center justify-center relative' >
                        <div className="lg:w-[340px] w-full h-full lg:h-[340px]  flex flex-col items-center justify-center relative m-1">
                            <div className="lg:w-[340px] w-full h-full lg:h-[340px]  left-0 top-0 -z-10 absolute bg-emerald-200 rounded-[20px]" />
                            <div className="lg:w-[275px] w-full h-full lg:h-[60px]  text-center text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">Lorum ipsum</div>
                        </div>
                        <div className="lg:w-[340px] w-full h-full lg:h-[340px]  relative m-1">
                            <img className="lg:w-[340px] w-full h-full lg:h-[340px]  rounded-[20px]" src={portfolio2} alt='' />
                            <div className="lg:w-[340px] w-full h-full lg:h-[340px]  left-0 top-0 -z-10 absolute bg-emerald-200 rounded-[20px]" />
                            <div className="lg:w-[252px] w-full h-full lg:h-[50px]  pl-[73px] pr-[72px] py-[15px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
                        </div>
                    </div>

                    <div className="lg:w-[700px] w-full lg:h-[340px] h-full relative m-1 ">
                        <img className="lg:w-[700px] w-full lg:h-[340px] h-full left-0 top-0 -z-10 absolute rounded-[20px]" src={portfolio1} alt='' />
                        <div className="lg:w-[252px] lg:h-[50px] w-full h-full pl-[73px] pr-[72px] py-[15px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex text-center text-white text-lg font-bold font-['Inter'] leading-tight">Take A Look</div>
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