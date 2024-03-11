import React from 'react';
import services0 from '../../assets/services/services.jpg';
import services1 from '../../assets/services/services1.jpg';
import services2 from '../../assets/services/services2.jpg';
import services3 from '../../assets/services/services3.jpg';
import add from "../../assets/services/add.svg";

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function Services() {

    return (
        <div className="w-full lg:h-[940px] relative flex flex-col items-center justify-start lg:mt-[50px] ">

            <div className="w-full h-full lg:w-[369px] lg:h-[6rem] relative flex flex-col items-center justify-center mt-[48px] ">
                <div className="text-center text-black text-[2.3rem] lg:text-[64px] font-normal font-['Revelstoke'] lg:leading-[64px]">Services</div>
                <div className="text-center text-emerald-200 text-[3.5rem] lg:text-8xl font-normal font-['Heaven'] lg:leading-[64px]">Channels</div>
            </div>


            <div className="w-full h-[420px] lg:h-[600px] relative flex items-start gap-5 overflow-x-scroll no-scrollbar my-12 ">

                    <div className="w-full ml-[20px] lg:ml-[570px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>                            <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services1} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services2} alt=" " />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services3} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services1} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    {/* ------------------------dummy ----------------------------------- */}

                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>

                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>

                    <div className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] relative">
                        <img className="w-[197px] lg:w-[340px] h-[420px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[197px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[197px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>

            </div>

            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>
        </div>

    )
}

export default Services;