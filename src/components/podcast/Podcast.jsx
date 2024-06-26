import React from 'react'
import PodcastCards from './PodcastCards'
import podcastimg1 from '../../assets/podcastimg/img.png'
import podcastimg2 from '../../assets/podcastimg/img2.png'
import podcastimg3 from '../../assets/podcastimg/img3.png'
import podcastimg4 from '../../assets/podcastimg/img4.png'




function Podcast() {
    return (
        <div className="w-full h-[70%] relative flex flex-col items-center justify-start mt-10 lg:mt-20 ">

            <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Advertising</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Podcast</div>
                </div>
            </div>

            <div className="w-full h-fit relative flex items-start gap-5 overflow-x-scroll no-scrollbar mt-20 ">

                <div className="w-full  h-[542px] lg:h-[600px] sm:h-[420px] relative flex flex-col justify-end items-end ml-[13%] ">
                    <img className="w-[306px] lg:w-[340px] sm:h-[420px] sm:w-[240px] h-[542px] lg:h-[598px] left-0 top-0 absolute  rounded-[20px]" src={podcastimg1} alt='' />


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
                <PodcastCards podcastimg={podcastimg2} />
                <PodcastCards podcastimg={podcastimg3} />
                <PodcastCards podcastimg={podcastimg4} />
                <PodcastCards podcastimg={podcastimg1} />
                <PodcastCards podcastimg={podcastimg3} />

            </div>

            <div className="w-[122px] h-11 relative mt-20">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>
        </div>
    )
}

export default Podcast