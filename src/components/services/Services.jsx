import React from 'react';
import services0 from '../../assets/services/services.jpg';
import services1 from '../../assets/services/services1.jpg';
import services2 from '../../assets/services/services2.jpg';
import services3 from '../../assets/services/services3.jpg';
import add from "../../assets/services/add.svg";

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function Services() {

    return (
        <div className="w-full h-[940px] relative flex flex-col items-center justify-start mt-[50px] ">

            <div className="w-[369px] h-[6rem] relative flex flex-col items-center justify-center mt-[48px] ">
                <div className="text-center text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Services</div>
                <div className="text-center text-emerald-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Channels</div>
            </div>


            <div className="w-full h-[600px] relative flex items-start gap-5 overflow-x-scroll no-scrollbar my-12 ">

                    <div className="w-full ml-[250px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>                            <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services1} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services2} alt=" " />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services3} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services1} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>
                    {/* ------------------------dummy ----------------------------------- */}

                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>

                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>

                    <div className="w-[340px] h-[600px] relative">
                        <img className="w-[340px] h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                        <div className="w-[340px] h-[155px] pl-6 pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                            <div className="w-[281px] text-zinc-950 text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                            <div className="self-stretch h-4 relative">
                                <div className="left-[15px] top-0 absolute text-zinc-950 text-sm font-medium font-['Inter'] leading-none">Explore</div>
                                <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                            </div>
                        </div>
                        <img className="w-[42px] h-[42px] left-[278px] top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                    </div>

            </div>

            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>
        </div>

    )
}

export default Services;