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
        <div className="w-full h-screen relative flex flex-col items-center justify-center">
            <img className="absolute -z-10 w-full h-full" src={images[currentIndex]} alt='' />

            <div className="w-[646px] h-[415px] md:relative lg:right-[15rem] lg:bottom-[10rem] lg:absolute lg:z-20 flex flex-col items-end justify-start">
                <div className="w-[646px] h-[416px] absolute  bg-white bg-opacity-5 rounded-[20px] backdrop-blur-2xl" />
                <div className="w-[340px] h-[31px] relative text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px] mt-[30px] mr-[30px] ">What Makes You</div>
                <div className=" relative text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px] mt-[20px] mr-[30px]">Creative!</div>
                <div className="relative text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal mt-[30px] mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>

                <div className="relative text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal mt-[15px] mr-[30px]"># What makes you creative</div>

                <div className="w-[122px] h-11 relative mt-[15px] mr-[30px]">
                    <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                </div>
            </div>

            <button onClick={navigatePrevious}>
                <img className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
            </button>
            <button onClick={navigateNext} >
                <img className="w-[72px] h-[72px] px-[21px] py-[18px] right-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
            </button>

            <div className="w-[126px] left-[50%] bottom-[2rem] absolute">
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