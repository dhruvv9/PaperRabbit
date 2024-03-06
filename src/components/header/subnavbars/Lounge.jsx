import React from 'react'

function Lounge() {
    return (
        <div className="w-screen h-[360px] absolute z-50 mt-[400px] flex justify-center items-center gap-4 bg-gray-50 bg-opacity-70 backdrop-blur-2xl">
            <div className="w-screen h-[360px] absolute bg-gray-50 bg-opacity-70 backdrop-blur-2xl" />
            <div className='flex justify-start items-start gap-5'>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 text-xs font-light font-['Inter'] leading-none">Services</div>
                    <div className=" text-black text-2xl font-semibold font-['Inter'] leading-normal mt-[20px] ">Bloge</div>
                    <div className=" text-black text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">Article</div>
                    <div className=" text-black text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">CaseStudy</div>
                    <div className=" text-black text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">Insight</div>
                    <div className=" text-black text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">Podcast</div>
                </div>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 text-xs font-light font-['Inter'] leading-none ">Other Lounge</div>
                    <div className=" text-black text-sm font-normal font-['Inter'] leading-none mt-[20px]">FAQ</div>
                    <div className=" text-black text-sm font-normal font-['Inter'] leading-none mt-[16px]">RESOURCE</div>
                    <div className=" text-black text-sm font-normal font-['Inter'] leading-none mt-[16px]">GALLERY</div>
                </div>
               
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 text-xs font-light font-['Inter'] leading-none">Quick Links</div>
                    <div className=" text-black text-sm font-normal font-['Inter'] leading-none mt-[20px]">Lorum Ipsum</div>
                    <div className=" text-black text-sm font-normal font-['Inter'] leading-none mt-[16px]">Lorum Ipsum</div>
                    <div className=" text-black text-sm font-normal font-['Inter'] leading-none mt-[16px]">Lorum Ipsum</div>
                </div>
            </div>
        </div>
    )
}

export default Lounge;