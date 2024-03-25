import React from 'react'


function InsightsCards(props) {
    const insight1 = props.insightimg
    return (
        <div className="lg:w-[340px] w-[280px] lg:h-[510px] h-[460px] relative flex items-end justify-center ">
            {/* <div className="w-[66px] h-[65px] bg-black absolute bg-opacity-25 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" /> */}
            
            <img className="lg:w-[340px]  w-[280px] lg:h-[510px] h-[460px] absolute  rounded-[20px]" src={insight1} alt="review image1" />
            <div className=" lg:w-[340px]  w-[280px] bg-white dark:bg-black bg-opacity-5 backdrop-blur-xl dark:bg-opacity-5 dark:backdrop-blur-xl  opacity-95 rounded-[10px] p-4 m-4 relative text-justify h-[250px]">

                <div className='absolute top-[-1.5rem] z-10 w-[130px] h-6 bg-red-200 rounded-tl-[10px] rounded-tr-[10px] backdrop-blur-[20px] items-center justify-center flex'>
                    New
                </div>

                <div className="text-black dark:text-white text-xl mac:text-lg md:text-sm sm:text-sm z-20 font-bold font-['Inter'] ">Perspiciatis unde dolori Perspiciatis unde dolori</div>
                <div className='flex flex-col items-start justify-start mt-2'>
                    <div className="flex text-justify"><span className="text-black dark:text-white text-xs font-bold font-['Inter'] ">Category - </span><span className="text-black dark:text-white text-xs font-normal font-['Inter'] ">Lorem ipsum</span></div>
                    <div className="flex text-justify"><span className="text-black dark:text-white text-xs font-bold font-['Inter'] ">Date - </span><span className="text-black dark:text-white text-xs font-normal font-['Inter'] ">DD/MM/YYYY</span></div>
                </div>
                <div className="text-black dark:text-white text-sm sm:text-xs md:text-xs font-normal font-['Inter'] leading-1 mt-3  h-[115px] overflow-y-scroll pr-1">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, minima ex libero ipsa quo impedit quibusdam atque alias vel, nihil aliquam adipisci veritatis odit. Eos rem dignissimos dolor alias iure? ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia eum beatae, fuga aliquid similique nisi eligendi. dolor sit amet,  aliqua. Ut enim ad minim veniam.  Ut enim ad minim veniam et dolore magna aliqua. Ut enim ad minim veniam.</div>
            </div>
        </div>
    )
}

export default InsightsCards