import React from 'react';
import services0 from '../../assets/services/services.svg';
import services1 from '../../assets/services/services1.svg';
import services2 from '../../assets/services/services2.svg';
import services3 from '../../assets/services/services3.svg';
import add from "../../assets/services/add.svg";


function Services() {

    return (
        <div className="w-full z-20 h-[70%] relative flex flex-col items-center justify-start  ">

            <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Advertising</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">services</div>
                </div>
            </div>


            <div className="w-full h-full  relative flex items-start gap-5 overflow-x-scroll no-scrollbar my-12 lg:mt-20">

                <div className="w-full ml-[20px] lg:ml-[570px] mac:ml-[233px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[598px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>                            <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>
                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services1} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>
                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services2} alt=" " />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>
                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services3} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>
                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services1} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>
                {/* ------------------------dummy ----------------------------------- */}

                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>

                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>

                <div className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] relative">
                    <img className="w-[308px] lg:w-[340px] h-[542px] lg:h-[600px] left-0 top-0 absolute rounded-[20px]" src={services0} alt='' />
                    <div className="w-[308px] lg:w-[340px] h-[155px] pl-2 md:pl-6 md:pr-[35px] py-10 left-0 top-0 relative rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className="w-[308px] text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className="w-[7.43px] h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-2 bottom-2 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' />
                </div>

            </div>

            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs md:text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>
        </div>

    )
}

export default Services;