import React from 'react'
import services0 from '../../../assets/navbar_layers/Hatch_hero.jpg';

function HutchPageCards2() {
    return (
        <div className="w-full h-[420px] lg:h-[600px] mac:h-[600px] relative flex flex-col justify-end items-start mt-40">
            <img className="w-[197px] lg:w-[340px] mac:w-[340px] h-[420px] lg:h-[598px] mac:h-[598px] left-0 top-0 absolute -z-20 rounded-[20px]" src={services0} alt='' />

            <div className="w-[197px] lg:w-[340px] mac:w-[340px] lg:h-[258px] mac:h-[258px] h-[220px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items ">
                <div className="w-[197px] lg:w-80 mac:w-[340px] h-[218px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5 group-hover/items:invisible">
                    <div className='w-full h-full absolute -z-10 rounded-[20px]  bg-transparent backdrop-blur-2xl bg-gray-50' />
              
                    <div className="text-justify text-black text-[25px] lg:text-[40px] mac:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] mac:leading-[30px] leading-[20px] lg:p-3 mac:p-3 p-1 ">
                        Branding is oxygen for the companies identity building...! design creat design tech....</div>
            
                </div>

            </div>
        </div>)
}

export default HutchPageCards2