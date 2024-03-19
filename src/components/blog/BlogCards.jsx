import React from 'react'
import services0 from '../../assets/services/services.jpg';
import services1 from '../../assets/services/services1.jpg';
import services2 from '../../assets/services/services2.jpg';
import services3 from '../../assets/services/services3.jpg';
import add from "../../assets/services/add.svg";

function BlogCards() {
    return (
        <div className="w-full h-[420px] lg:h-[600px] relative flex flex-col justify-end items-start ">
        <img className="w-[260px] lg:w-[340px] mac:w-[320px] h-[420px] lg:h-[598px] left-0 top-0 absolute -z-20 rounded-[20px]" src={services0} alt='' />

        <div className="absolute top-0 left-0 w-10 h-10 z-20 lg:w-20 lg:h-20 flex flex-col items-center justify-center text-[12px] lg:text-[32px] font-bold font-['Inter'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
            <div className='w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px' />
            334
        </div>

        <div className="w-[260px] lg:w-[340px] mac:w-[320px] lg:h-[258px] h-[220px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items ">
            <div className="w-[260px] lg:w-[340px] mac:w-[320px] h-[268px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5 group-hover/items:invisible">
                <div className='w-full h-full absolute -z-10 rounded-[20px] bg-transparent backdrop-blur-2xl bg-gray-50' />
                <div className='w-full flex items-center justify-start px-3 pt-3'>
                    <span className="text-black text-xs font-bold font-['Inter']">Author : </span>
                    <span className="text-black text-xs font-normal font-['Inter']">Dishti Raju</span>
                </div>
                <div className="text-justify text-black text-[25px] lg:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-1 ">
                    Branding is oxygen for the companies identity building...! design creat design tech....</div>
                <div className='w-full flex flex-col py-3 pb-3'>
                    <div className='mx-3'>
                        <span className="text-zinc-950 text-[10px] font-bold font-['Inter']">Tag : </span>
                        <span className="text-zinc-950 text-[10px] font-normal font-['Inter']">#paperrabbit #pr #hashtags</span>
                    </div>
                    <div className="mx-3">
                        <span className="text-zinc-950 text-[10px] font-bold font-['Inter']">Date :</span>
                        <span className="text-zinc-950 text-[10px] font-normal font-['Inter']"> DD - MMM - YYYY</span>
                    </div>
                </div>
            </div>

            <div className="w-full h-[420px] lg:h-[600px] lg:top-[-21.5rem] top-[-12.5rem] absolute rounded-[20px] z-10 flex flex-col justify-center items-start gap-2 invisible group-hover/items:visible ">
                <div className='w-full h-full absolute -z-10 rounded-[20px] bg-transparent backdrop-blur-2xl bg-gray-50' />
                <div className='w-full flex items-center justify-start px-3'>
                    <span className="text-black text-xs font-bold font-['Inter']">Author : </span>
                    <span className="text-black text-xs font-normal font-['Inter']">Dishti Raju</span>
                </div>
                <div className="text-justify text-black text-[25px] lg:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-1 ">
                    Branding is oxygen for the companies identity building...! design creat design tech....</div>

                <div className="text-justify text-black text-[10px] lg:text-sm font-normal font-['Inter'] lg:leading-[20px] leading-[15px] lg:p-3 p-1 ">
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
    )
}

export default BlogCards