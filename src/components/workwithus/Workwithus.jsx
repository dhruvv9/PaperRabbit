import React from 'react'
import workwithusimg from '../../assets/workwithus/workwithus.jpg'

function Workwithus() {
  return (
    <div class="w-full h-80 flex justify-center items-center ">
      <div class="lg:w-[1420px] lg:h-80 w-full h-80 relative mx-5 my-8 text-center flex flex-col lg:flex-row items-center lg:justify-between justify-center ">
        <img className="lg:w-[1420px] lg:h-80 w-full h-80 left-0 top-0 absolute rounded-[20px] " src={workwithusimg} alt='' />
        <div className="lg:w-[1420px] lg:h-80 w-full h-80 left-0 top-0 absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-[660px] lg:h-[73px] lg:pl-[60px] flex place-items-center my-10 lg:text-left text-2xl relative text-white lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          Lorem ipsum dolor sit amet, tempor consectetur adipiscing elit, sed tempor
        </div>
        <div className='relative'>        
          <button class="lg:w-[122px] lg:h-[44px] lg:mr-[100px] relative text-xs bg-zinc-950 rounded-[10px] text-white lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex">Work with US</button>
        </div>
      </div>
    </div>
  )
}

export default Workwithus;