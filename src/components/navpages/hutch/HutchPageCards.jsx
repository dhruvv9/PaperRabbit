import React from 'react'
import services0 from '../../../assets/hutchimg/img2.png';

function HutchPageCards() {
    return (
        <div className="w-full h-[420px] lg:h-[600px] mac:h-[600px] relative flex flex-col justify-end items-center">
        <img className="w-[260px] lg:w-[340px] mac:w-[340px] h-[420px] lg:h-[598px] mac:h-[598px] absolute -z-20 rounded-[20px]" src={services0} alt='' />

        <div className="w-[260px] lg:w-[340px] mac:w-[340px] lg:h-[258px] mac:h-[258px] h-[220px] relative rounded-[20px] flex flex-col justify-center items-center gap-2 group/items ">
            <div className="w-[260px] lg:w-80 mac:w-[340px] h-[218px] relative rounded-[20px] flex flex-col justify-center items-center gap-2.5 ">
                <div className='w-full h-full absolute -z-10 bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]' />
                <div class="flex items-center justify-center text-black lg:text-2xl mac:text-2xl font-bold font-['Inter'] leading-loose text-sm ">Perspiciatis unde omrs</div>
                <div class="text-justify text-black text-xs font-normal relative font-['Inter'] leading-normal p-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className="w-[122px] h-11 relative">
                <button class="w-[122px] lg:h-11 mac:h-11 h-9  bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none ">Learn</button>            </div>
            </div>
        </div>
    </div>
    )
}

export default HutchPageCards

