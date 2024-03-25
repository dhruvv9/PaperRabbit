import React from 'react'
import portfolio1 from "../../assets/portfolioimg/portfolio1.jpg";
import portfolio2 from '../../assets/portfolioimg/portfolio2.jpg';
// import portfolio3 from '../../assets/portfolioimg/portfolio3.jpg';
// import portfolio4 from '../../assets/portfolioimg/portfolio4.jpg';

function Portfolio() {
    return (
        <div className="w-[100%] lg:h-[100%] relative flex flex-col items-center justify-center h-full mt-20 ">

            <div className="w-[100%]  lg:h-[1020px] mac:h-[1020px]  flex-col justify-start items-center gap-[50px] inline-flex p-10">

                <div className="w-full relative flex flex-col justify-center items-center">
                    <div class="w-[24rem] h-[6rem] relative content-center">
                        <div class="w-full left-0 top-[2.1rem] absolute text-red-200 text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">showcase</div>
                        <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Portfolio</div>
                    </div>
                </div>

                <div className="lg:w-[57%] mac:w-[72%] w-[100%] lg:h-[700px] mac:h-[600px] h-[950px] sm:h-[700px] p-4 sm:p-0 relative gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 mac:grid-cols-2 mac:grid-rows-2 grid grid-cols-1 grid-rows-4">

                    <div className="w-full h-full relative m-1 ">
                        <img className=" w-full h-full  left-0 top-0  absolute rounded-[20px]" src={portfolio1} alt='' />
                        <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
                        Take A Look
                    </div>                    </div>

                    <div className='w-full h-full flex items-end justify-between relative gap-2' >
                        <div className=" w-full h-full flex flex-col items-center justify-center relative m-1">
                            <div className="w-full h-full z-10  left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
                            <div className="w-full h-full z-10 text-center text-black dark:text-white text-[64px] font-normal font-['Katibeh'] leading-[64px]">Lorum ipsum</div>
                        </div>
                        <div className="w-full h-full relative m-1 group/items">
                            <img className="w-full h-full z-20 rounded-[20px]" src={portfolio2} alt='' />
                            <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
                            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
                        Take A Look
                    </div>
                            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-emerald-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur voluptatem repellat nulla!
                            </div>
                        </div>
                    </div>


                    <div className='w-full h-full flex flex-row-reverse items-end justify-between relative gap-2' >
                        <div className=" w-full h-full flex flex-col items-center justify-center relative m-1">
                            <div className="w-full h-full z-10  left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
                            <div className="w-full h-full z-10 text-center text-black dark:text-white text-[64px] font-normal font-['Katibeh'] leading-[64px]">Lorum ipsum</div>
                        </div>
                        <div className="w-full h-full relative m-1">
                            <img className="w-full h-full z-20 rounded-[20px]" src={portfolio2} alt='' />
                            <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
                            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
                        Take A Look
                    </div>                        </div>
                    </div>

                    <div className="w-full h-full relative m-1 ">
                        <img className=" w-full h-full  left-0 top-0  absolute rounded-[20px]" src={portfolio1} alt='' />
                        <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
                        Take A Look
                    </div>
                            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-emerald-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur voluptatem repellat nulla!
                            </div>                   
                    </div>

                </div>

                <div className="w-[122px] h-11 relative">
                    <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black  text-sm font-normal font-['Inter'] leading-none ">Explore All More</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;