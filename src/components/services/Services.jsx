import React, { useState, useRef } from 'react';
import services0 from '../../assets/services/services.svg';
import services1 from '../../assets/services/services1.svg';
import services2 from '../../assets/services/services2.svg';
import services3 from '../../assets/services/services3.svg';
import add from "../../assets/services/add.svg";

import popupimg1 from '../../assets/services/popup-rect.png'
import popupimg2 from '../../assets/services/popup-square.png'


function Services() {

    const [visible, setVisible] = useState(false);

    const container = useRef(null)

    function popup() {

        if (visible) {
            setVisible(!visible);
            container.current.classList.remove('invisible')
            container.current.classList.add('visible')

        } else {
            setVisible(!visible)
            container.current.classList.remove('visible')
            container.current.classList.add('invisible')
        }

    }

    return (
        <div className="w-full z-20 lg:h-[70%] relative flex flex-col items-center justify-start ">

            <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Advertising</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">services</div>
                </div>
            </div>

            <div className="w-full h-full  relative flex items-start gap-5 overflow-x-scroll no-scrollbar my-12 lg:mt-20">

                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px] lg:h-[600px] relative ml-[13%] ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-0 bottom-0 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>

                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>
                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>
                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>
                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>
                {/* ------------------------dummy ----------------------------------- */}

                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>

                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>

                <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px]lg:h-[600px] relative ">
                    <img className=" relative top-0 rounded-[20px]" src={services0} alt='' />
                    <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
                        <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">Perspiciati lorum ipsum</div>
                        <div className="self-stretch h-4 relative">
                            <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">Explore</div>
                            <div className=" h-[13px] left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    <img className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full" src={add} alt='' onClick={popup} />
                </div>

            </div>

            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs md:text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>

            <div className='absolute fill-transparent  flex items-center justify-center w-full h-screen lg:h-[1600px] p-4 backdrop-blur-lg invisible '  ref={container}>

                <div className='flex flex-col items-start justify-start w-[80%] mac:w-[54%] lg:w-[54%]  z-120  h-full lg:p-6 gap-3 p-4 bg-white'>
                    <div className="lg:text-[32px] text-[20px] font-normal font-['Inter'] leading-loose text-left w-full lg:mt-20 mt-5">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="text-[64px] mac:text-[32px] font-normal  font-['Katibeh'] leading-[64px] text-left w-full">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="text-black text-sm font-normal font-['Inter'] leading-normal text-left">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores totam numquam quam officiis vel doloremque cumque dolores eveniet similique! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro quas sapiente necessitatibus aliquid quaerat. Sed eaque laudantium tempore distinctio!
                    </div>
                    <div className=' relative w-full ' >
                        <img src={popupimg1} alt="" className=' min-w-[5rem] ' />
                    </div>
                    <div className="text-black text-sm font-normal font-['Inter'] leading-normal text-left">
                        Lorem ipsum dolor sit amet. lorem20 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem ab ut necessitatibus consequatur atque repudiandae voluptas placeat saepe in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro quas sapiente necessitatibus aliquid quaerat. Sed eaque laudantium tempore distinctio!
                    </div>
                    <div className='grid grid-cols-2 grid-rows-1 gap-4 w-full mac:p-8 lg:p-8' >
                        <img src={popupimg2} alt="" className='min-w-[5rem]  ' />
                        <img src={popupimg2} alt="" className='min-w-[5rem]   ' />
                    </div>
                    <div className="text-black text-sm font-normal font-['Inter'] leading-normal text-left">
                        Lorem ipsum dolor sit amet.lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem quidem tempore. Doloribus ex adipisci non corrupti aliquid consectetur sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro quas sapiente necessitatibus aliquid quaerat. Sed eaque laudantium tempore distinctio!
                    </div>
                    <div className='absolute top-10 right-10 ' onClick={popup}>
                        <div className='w-[1rem] h-[0.25rem] bg-black'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;