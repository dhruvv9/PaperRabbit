import React from 'react'

function Portfolio () {
    return (
        <div className=" w-full top-10 left-0 right-20 fixed h-[360px] z-50 flex justify-center items-center gap-4 bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl invisible group-hover/item:visible">
        <div className=" lg:w-full top-0 h-[360px] absolute bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl" />
            <div className=' lg:w-[58rem] flex justify-start items-start gap-5'>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none">Portfolio</div>
                    <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[20px] ">Branding</div>
                    <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[20px] ">UI/UX</div>
                    <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">Website</div>
                    <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">Editorials</div>
                    <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">Social Network</div>
                  </div>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none ">Other Portfolio</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[20px]">Packing</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">Interactive</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">Campaigns</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">Motion Grapic</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">Illustration/Comic book</div>
                </div>

                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none">Quick Links</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[20px]">Lorum Ipsum</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">Lorum Ipsum</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">Lorum Ipsum</div>
                </div>
               
            </div>
        </div>
    )
}

export default Portfolio;