import React from 'react'
import BlogCards from './BlogCards';

import blog1 from '../../assets/blogsimg/blog1.png'
import blog2 from '../../assets/blogsimg/blog2.png'
import blog3 from '../../assets/blogsimg/blog3.png'
import blog4 from '../../assets/blogsimg/blog4.png'


function Blog() {
    return (
        <div className="w-full h-[70%] relative flex flex-col items-center justify-start mt-10 lg:mt-20 ">

            <div className="w-full h-full relative flex flex-col justify-center items-center">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Definitions</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Blog</div>
                </div>
            </div>

            <div className="w-full h-fit relative flex items-start gap-5 overflow-x-scroll no-scrollbar mt-20 ">

            <div className="w-full  h-[542px] lg:h-[600px] relative flex flex-col justify-end items-start lg:ml-[570px] mac:ml-[232px] ">
                    <img className="w-[306px] lg:w-[340px]  h-[542px] lg:h-[598px] left-0 top-0 absolute  rounded-[20px]" src={blog1} alt='' />

                    <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
                        <div className='w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] ' />
                        334
                    </div>

                    <div className="w-[306px] lg:w-[340px] z-20 lg:h-[255px] h-[240px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items ">
                        <div className="w-[306px] lg:w-[340px] z-20  h-[255px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5 group-hover/items:invisible">
                            <div className='w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black' />
                            <div className='w-full flex z-20 items-center justify-start px-4 pt-3'>
                                <span className="text-black dark:text-white text-xs font-bold font-['Inter']">Author : </span>
                                <span className="text-black dark:text-white text-xs font-normal font-['Inter']">Dishti Raju</span>
                            </div>
                            <div className="text-justify z-20 text-black dark:text-white text-[25px] lg:text-[40px] mac:text-[35px] mac:leading-[24px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-4 ">
                                Branding is oxygen for the companies identity building...! design creat design tech....</div>
                            <div className='w-full flex z-20 flex-col'>
                                <div className='mx-4'>
                                    <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">Tag : </span>
                                    <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']">#paperrabbit #pr #hashtags</span>
                                </div>
                                <div className="mx-4">
                                    <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">Date :</span>
                                    <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']"> DD - MMM - YYYY</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[542px] z-20 lg:h-[600px] lg:top-[-21.5rem] top-[-19rem] absolute rounded-[20px] flex flex-col justify-center items-start gap-2 invisible group-hover/items:visible ">
                            <div className='w-full h-full absolute z-10 rounded-[20px] bg-transparent bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50' />
                            <div className='w-full z-20 flex items-center justify-start px-3'>
                                <span className="text-black dark:text-white text-xs font-bold font-['Inter']">Author : </span>
                                <span className="text-black dark:text-white text-xs font-normal font-['Inter']">Dishti Raju</span>
                            </div>
                            <div className="text-justify text-black dark:text-white z-20 text-[25px] lg:text-[40px] mac:text-[35px] mac:leading-[24px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[17px] lg:p-3 p-3">
                                Branding is oxygen for the companies identity building...! design creat design tech....</div>

                            <div className="text-justify text-black dark:text-white z-20 text-[12px] lg:text-sm mac:text-sm mac:leading-[15px] font-normal font-['Inter'] lg:leading-[20px] leading-[13px] lg:p-3 p-3 ">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Tempor incididunt ut labore et.                                </div>

                            <div className='px-3 z-20'>
                                <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">Tag : </span>
                                <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']">#paperrabbit #pr #hashtags</span>
                            </div>
                            <div className='px-3 z-20'>
                                <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">Date :</span>
                                <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']"> DD - MMM - YYYY</span>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogCards blogsimg = {blog2} />
               <BlogCards blogsimg = {blog3} />
               <BlogCards blogsimg = {blog4} />
               <BlogCards blogsimg = {blog1} />
               <BlogCards blogsimg = {blog2} />
               <BlogCards blogsimg = {blog3} />
               <BlogCards blogsimg = {blog4} />
               <BlogCards blogsimg = {blog4} />
               <BlogCards blogsimg = {blog1} />
               <BlogCards blogsimg = {blog2} />
               <BlogCards blogsimg = {blog3} />
            </div>

            <div className="w-[122px] h-11 relative mt-20">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>
        </div>)
}

export default Blog