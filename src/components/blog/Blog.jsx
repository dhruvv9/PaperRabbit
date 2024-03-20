import React from 'react'
import services0 from '../../assets/services/services.jpg';
import services1 from '../../assets/services/services1.jpg';
import services2 from '../../assets/services/services2.jpg';
import services3 from '../../assets/services/services3.jpg';
import add from "../../assets/services/add.svg";
import BlogCards from './BlogCards';

function Blog() {
    return (
        <div className="w-full h-[70%] relative flex flex-col items-center justify-start mt-10 lg:mt-20 ">

            <div className="w-full h-full relative flex flex-col justify-center items-center">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Definitions</div>
                    <div class="w-full left-0 top-0 absolute text-black lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Blog</div>
                </div>
            </div>

            <div className="w-full h-fit  relative flex items-start gap-5 overflow-x-scroll no-scrollbar my-12 ">

                <div className="w-full ml-[20px] lg:ml-[570px] h-[415px] lg:h-[600px] relative flex flex-col justify-end items-start ">
                    <img className="w-[260px] lg:w-[340px]  h-[415px] lg:h-[598px] left-0 top-0 absolute -z-20 rounded-[20px]" src={services0} alt='' />

                    <div className="absolute top-0 left-0 w-10 h-10 z-20 lg:w-20 lg:h-20 flex flex-col items-center justify-center text-[12px] lg:text-[32px] font-bold font-['Inter'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
                        <div className='w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px' />
                        334
                    </div>

                    <div className="w-[260px] lg:w-[340px]  lg:h-[255px] h-[220px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items ">
                        <div className="w-[260px] lg:w-[340px]  h-[255px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5 group-hover/items:invisible">
                            <div className='w-full h-full absolute -z-10 rounded-[20px] bg-transparent backdrop-blur-2xl bg-gray-50' />
                            <div className='w-full flex items-center justify-start px-4 pt-3'>
                                <span className="text-black text-xs font-bold font-['Inter']">Author : </span>
                                <span className="text-black text-xs font-normal font-['Inter']">Dishti Raju</span>
                            </div>
                            <div className="text-justify text-black text-[25px] lg:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-4 ">
                                Branding is oxygen for the companies identity building...! design creat design tech....</div>
                            <div className='w-full flex flex-col'>
                                <div className='mx-4'>
                                    <span className="text-zinc-950 text-[10px] font-bold font-['Inter']">Tag : </span>
                                    <span className="text-zinc-950 text-[10px] font-normal font-['Inter']">#paperrabbit #pr #hashtags</span>
                                </div>
                                <div className="mx-4">
                                    <span className="text-zinc-950 text-[10px] font-bold font-['Inter']">Date :</span>
                                    <span className="text-zinc-950 text-[10px] font-normal font-['Inter']"> DD - MMM - YYYY</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[415px] lg:h-[600px] lg:top-[-21.5rem] top-[-12.5rem] absolute rounded-[20px] z-10 flex flex-col justify-center items-start gap-2 invisible group-hover/items:visible ">
                            <div className='w-full h-full absolute -z-10 rounded-[20px] bg-transparent backdrop-blur-2xl bg-gray-50' />
                            <div className='w-full flex items-center justify-start px-3'>
                                <span className="text-black text-xs font-bold font-['Inter']">Author : </span>
                                <span className="text-black text-xs font-normal font-['Inter']">Dishti Raju</span>
                            </div>
                            <div className="text-justify text-black text-[25px] lg:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-3">
                                Branding is oxygen for the companies identity building...! design creat design tech....</div>

                            <div className="text-justify text-black text-[10px] lg:text-sm font-normal font-['Inter'] lg:leading-[20px] leading-[12px] lg:p-3 p-3 ">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Tempor incididunt ut labore et.                                </div>

                            <div className='px-3'>
                                <span className="text-zinc-950 text-[10px] font-bold font-['Inter']">Tag : </span>
                                <span className="text-zinc-950 text-[10px] font-normal font-['Inter']">#paperrabbit #pr #hashtags</span>
                            </div>
                            <div className='px-3'>
                                <span className="text-zinc-950 text-[10px] font-bold font-['Inter']">Date :</span>
                                <span className="text-zinc-950 text-[10px] font-normal font-['Inter']"> DD - MMM - YYYY</span>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
            </div>

            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>
        </div>)
}

export default Blog