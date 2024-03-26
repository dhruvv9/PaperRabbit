import React from 'react'

function BlogCards(props) {
    const blogsimg = props.blogsimg
    return (
        <div className="w-full  h-[435px] lg:h-[600px] relative flex flex-col justify-end items-start ">
                    <img className="w-[280px] lg:w-[340px]  h-[435px] lg:h-[598px] left-0 top-0 absolute  rounded-[20px]" src={blogsimg} alt='' />

                    <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black dark:text-white lg:w-16 lg:h-16 flex flex-col items-center justify-center text-[12px] lg:text-[32px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
                        <div className='w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] ' />
                        334
                    </div>

                    <div className="w-[280px] lg:w-[340px] z-20 lg:h-[255px] h-[220px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items ">
                        <div className="w-[280px] lg:w-[340px] z-20  h-[255px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5 group-hover/items:invisible">
                            <div className='w-full h-full absolute z-10 rounded-[20px] bg-opacity-25 backdrop-blur-2xl dark:bg-opacity-25 dark:backdrop-blur-xl bg-gray-50 dark:bg-black' />
                            <div className='w-full flex z-20 items-center justify-start px-4 pt-3'>
                                <span className="text-black dark:text-white text-xs font-bold font-['Inter']">Author : </span>
                                <span className="text-black dark:text-white text-xs font-normal font-['Inter']">Dishti Raju</span>
                            </div>
                            <div className="text-justify z-20 text-black dark:text-white text-[25px] lg:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-4 ">
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

                        <div className="w-full h-[435px] z-20 lg:h-[600px] lg:top-[-21.5rem] top-[-13.5rem] absolute rounded-[20px] flex flex-col justify-center items-start gap-2 invisible group-hover/items:visible ">
                            <div className='w-full h-full absolute z-10 rounded-[20px] bg-transparent backdrop-blur-2xl dark:bg-opacity-5 dark:backdrop-blur-xl bg-gray-50 dark:bg-black' />
                            <div className='w-full z-20 flex items-center justify-start px-3'>
                                <span className="text-black dark:text-white text-xs font-bold font-['Inter']">Author : </span>
                                <span className="text-black dark:text-white text-xs font-normal font-['Inter']">Dishti Raju</span>
                            </div>
                            <div className="text-justify text-black dark:text-white z-20 text-[25px] lg:text-[40px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[17px] lg:p-3 p-3">
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
    )
}

export default BlogCards