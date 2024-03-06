import React from 'react'
import main from "../../assets/bannerimgs/bannerimg1.jpg";
import { useState } from 'react';
import main3 from '../../assets/bannerimgs/main3.jpg'
import main4 from '../../assets/bannerimgs/main4.jpg';
import main5 from '../../assets/bannerimgs/main5.jpg';
import main6 from '../../assets/bannerimgs/main6.jpg';
import arrowleft from '../../assets/bannerimgs/Arrow---Left-2.jpg';
import arrowright from '../../assets/bannerimgs/Arrow---Right-2.jpg';


function Banner() {

    const images = [main, main3, main4, main5, main6]
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigateNext = () => {
        setCurrentIndex((preIndex) => (preIndex === images.length - 1 ? 0 : preIndex + 1));
    };
    const navigatePrevious = () => {
        setCurrentIndex((preIndex) => (preIndex === 0 ? images.length - 1 : preIndex - 1));
    }

    return (
        <div className="relative flex flex-col items-center justify-center lg:w-full h-screen">
            <img className="absolute -z-10 w-full h-full" src={images[currentIndex]} alt='' />

            <div className="mx-[20px] m-5 md:ml-10 bottom-[58px] right-[10px] absolute flex flex-col items-end justify-start lg:w-[646px] lg:h-[415px] lg:right-[15rem] lg:bottom-[10rem] lg:absolute lg:z-20">
                <div className="w-full h-full absolute  bg-white bg-opacity-5 rounded-[20px] backdrop-blur-2xl lg:w-[646px] lg:h-[416px]" />
                <div className="mr-[22px] mt-[15px] relative text-justify text-black text-[40px] lg:text-[64px] font-normal font-['Katibeh'] lg:w-[340px] lg:h-[31px] lg:leading-[64px] lg:mt-[30px] lg:mr-[30px] ">What Makes You</div>
                <div className="mr-[22px] mt-[6px] relative text-justify text-black text-5xl leading-18 lg:text-8xl font-normal font-['Revelstoke'] lg:leading-[64px] lg:mt-[20px] lg:mr-[30px]">Creative!</div>
                <div className="mr-[22px] mt-[10px] ml-[20px] relative text-right text-black text-[14px] lg:text-[15px] font-normal font-['Inter'] leading-normal lg:mt-[30px] lg:mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency Combining strategic thinking and sharp design to build great brands in this cut throat business competition.</div>

                <div className="mr-[22px] mt-[10px] relative text-justify text-black text-[32px] font-normal font-['Heaven'] leading-normal lg:text-5xl  lg:mt-[15px] lg:mr-[30px]"># What makes you creative</div>

                <div className="mr-[22px] mt-[14px] h-[64px] w-[110px] lg:w-[122px] lg:h-11 relative lg:mt-[15px] lg:mr-[30px]">
                    <button className="lg:w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-xs lg:text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                </div>
            </div>

            <button onClick={navigatePrevious}>
                <img className="absolute justify-center items-center inline-flex w-2 h-2 left-[16px] top-[454px] lg:w-[72px] lg:h-[72px] lg:px-[21px] lg:py-[18px] lg:left-[178px] lg:top-[504px]  " src={arrowleft} alt='' />
            </button>
            <button onClick={navigateNext} >
                <img className=" absolute justify-center items-center inline-flex w-2 h-2 right-[16px] top-[454px] lg:w-[72px] lg:h-[72px] lg:px-[21px] lg:py-[18px] lg:right-[178px] lg:top-[504px] " src={arrowright} alt='' />
            </button>

            <div className="w-[126px] lg:left-[50%] bottom-[2rem] absolute">
               {currentIndex == 0 ? <div className="w-2 h-2 left-[20px] top-[5px] absolute bg-zinc-900 rounded-full" /> : <div className="w-2 h-2 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" /> }
               {currentIndex == 1 ? <div className="w-2 h-2 left-[30px] top-[5px] absolute bg-zinc-900 rounded-full" /> : <div className="w-2 h-2 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" /> }
               {currentIndex == 2 ? <div className="w-2 h-2 left-[40px] top-[5px] absolute bg-zinc-900 rounded-full" /> : <div className="w-2 h-2 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" /> }
               {currentIndex == 3 ? <div className="w-2 h-2 left-[50px] top-[5px] absolute bg-zinc-900 rounded-full" /> : <div className="w-2 h-2 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" /> }
               {currentIndex == 4 ? <div className="w-2 h-2 left-[60px] top-[5px] absolute bg-zinc-900 rounded-full" /> : <div className="w-2 h-2 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" /> }
            </div>
        </div>
    )
}

export default Banner;