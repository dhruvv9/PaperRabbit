import React from 'react'

function PodcastCards({ podcastimg }) {
    return (
        <div className="w-full  h-[542px] lg:h-[600px] sm:h-[420px] relative flex flex-col justify-end items-end ">
            <img className="w-[306px] lg:w-[340px] sm:h-[420px] sm:w-[240px] h-[542px] lg:h-[598px] left-0 top-0 absolute  rounded-[20px]" src={podcastimg} alt='' />

            <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
                <div className='w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] ' />
                334
            </div>

            <div className="w-[306px] lg:w-[340px] sm:w-[240px] z-20 lg:h-[255px] h-[240px] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                <div className="w-[306px] lg:w-[340px] sm:w-[240px] z-20  h-[255px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                    <div className='w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black' />
                    <div className='w-full flex z-20 items-center justify-start px-3 '>
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">Title</span>
                    </div>
                    <div className='w-full flex z-20 items-center justify-start px-3'>
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">Category</span> -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">Title</span>
                    </div>
                    <div className='w-full flex z-20 items-center justify-start px-3'>
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">Tag</span> -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">Title</span>
                    </div>
                    <div className='w-full flex z-20 items-center justify-start px-3'>
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">Date</span> -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">Title</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PodcastCards

