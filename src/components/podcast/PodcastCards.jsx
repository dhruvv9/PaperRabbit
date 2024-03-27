import React from 'react'

function PodcastCards({ podcastimg }) {
    return (
        <div className="w-full  h-[435px] lg:h-[600px] relative flex flex-col justify-end items-start ">
            <img className="w-[280px] lg:w-[340px]  h-[435px] lg:h-[598px] left-0 top-0 absolute  rounded-[20px]" src={podcastimg} alt='' />

            <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black dark:text-white lg:w-16 lg:h-16 flex flex-col items-center justify-center text-[12px] lg:text-[32px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
                <div className='w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] ' />
                334
            </div>

            <div className="w-[280px] lg:w-[340px] z-20 lg:h-[205px] h-[180px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items ">
                        <div className="w-[280px] lg:w-[340px] z-20 lg:h-[205px]  h-[180px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                            <div className='w-full h-full absolute z-10 rounded-[20px] bg-opacity-25 backdrop-blur-2xl dark:bg-opacity-25 dark:backdrop-blur-xl bg-gray-50 dark:bg-black' />
                            <div className='w-full flex z-20 items-center justify-start px-3 '>
                                <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">Title</span>
                            </div>
                            <div className='w-full flex z-20 items-center justify-start px-3'>
                                <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">Category</span> -
                                <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">Title</span>
                            </div>
                            <div className='w-full flex z-20 items-center justify-start px-3'>
                                <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">Tag</span> -
                                <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">Title</span>                            </div>
                            <div className='w-full flex z-20 items-center justify-start px-3'>
                                <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">Date</span> -
                                <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">Title</span>                            </div>
                        </div>

                    </div>
        </div>
    )
}

export default PodcastCards