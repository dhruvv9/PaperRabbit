import React from "react";
import workwithusimg from "../../assets/workwithus/workwithus.jpg";

function Workwithus() {
  return (
    <div class="w-full h-80 flex justify-center items-center mt-20 ">
      <div class="lg:w-[1420px] lg:h-80 w-full h-80 relative mx-5 my-8 text-center flex flex-col lg:flex-row items-center lg:justify-between justify-center ">
        <img
          className="lg:w-[1420px] lg:h-80 w-full -z-20 h-80 left-0 top-0 absolute rounded-[20px] "
          src={workwithusimg}
          alt=""
        />
        <div className=" lg:h-80 w-full h-80 left-0 top-0 -z-10 absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-full lg:h-full lg:pl-[60px] flex flex-col justify-center  gap-3 my-10 lg:text-left text-2xl relative text-white lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          <div className="w-full flex items-start sm:justify-center gap-4">
            <span className="text-white text-[58px] sm:text-[28px] font-bold font-['Inter']">
              Perspective Inside
            </span>
            <span className="text-red-200 text-[58px] sm:text-[28px] font-bold font-['Inter']">
              You!
            </span>
          </div>
          <div class="w-full flex items-start text-white sm:text-xs text-lg font-normal font-['Inter']">
            Let’s makes you build your dream into a reality and gain growth to
            your business.
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          <button class="lg:w-[122px] lg:h-[44px] lg:mr-[100px] relative text-xs bg-zinc-950 rounded-[10px] text-white lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex">
            Work with US
          </button>
          <button class=" lg:w-[122px] lg:h-[44px] lg:mr-[100px] relative text-xs bg-zinc-950 rounded-[10px] text-white lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex block-bg">
            Work with US
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workwithus;
