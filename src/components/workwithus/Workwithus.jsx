import React from 'react'
import workwithusimg from '../../assets/workwithus/workwithus.jpg'

function Workwithus() {
  return (
    <div class="flex justify-center items-center ">
    <div class="w-[1420px] h-[300px] relative mx-4 my-8 p-4  text-center">
        <img className="w-[1420px] h-[300px] left-0 top-0 absolute rounded-[20px]" src={workwithusimg} alt='' />
        <div class="w-[948px] h-[100px] left-[236px] top-[100px] absolute text-black text-5xl font-bold font-['Inter'] leading-[48px]">Lorem ipsum dolor sit amet, tempor<br/>consectetur adipiscing elit, sed tempor</div>
        <button class="w-[122px] left-[1159px] top-[143px] absolute  bg-zinc-950 rounded-[10px] text-white text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex">Work with US</button>
    </div>
</div>
  )
}

export default Workwithus;