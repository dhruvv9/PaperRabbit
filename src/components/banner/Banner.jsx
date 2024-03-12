import React, { useEffect } from 'react'
import main from "../../assets/bannerimgs/bannerimg1.jpg";
import { useState } from 'react';

import main3 from '../../assets/bannerimgs/main3.jpg'
import main4 from '../../assets/bannerimgs/main4.jpg';
import main5 from '../../assets/bannerimgs/main5.jpg';
import main6 from '../../assets/bannerimgs/main6.jpg';


import day1 from '../../assets/bannerimgs/1 background.png'
import day2 from '../../assets/bannerimgs/2 background.png'
import day3 from '../../assets/bannerimgs/3 background.png'
import day4 from '../../assets/bannerimgs/4 background.png'
import day5 from '../../assets/bannerimgs/5 background.png'
import day6 from '../../assets/bannerimgs/6 background.png'
import day7 from '../../assets/bannerimgs/7 background.png'
import day8 from '../../assets/bannerimgs/8 background.png'
import day9 from '../../assets/bannerimgs/9 background.png'

import dark1 from '../../assets/bannerimgs/1 background-dark.png'
import dark2 from '../../assets/bannerimgs/2 background-dark.png'
import dark3 from '../../assets/bannerimgs/3 background-dark.png'
import dark4 from '../../assets/bannerimgs/4 background-dark.png'
import dark5 from '../../assets/bannerimgs/5 background-dark.png'
import dark6 from '../../assets/bannerimgs/6 background-dark.png'
import dark7 from '../../assets/bannerimgs/7 background-dark.png'
import dark8 from '../../assets/bannerimgs/8 background-dark.png'
import dark9 from '../../assets/bannerimgs/9 background-dark.png'



import arrowleft from '../../assets/bannerimgs/Arrow---Left-2.jpg';
import arrowright from '../../assets/bannerimgs/Arrow---Right-2.jpg';


function Banner(props) {

    const { mode } = props;


    const images_day = [day1, day2, day3, day4, day5, day6, day7, day8, day9]
    const images_dark = [dark1, dark2, dark3, dark4, dark5, dark6, dark7, dark8, dark9]

    const title = ['Brave', 'Creative', 'Loyal', 'Lorem1', 'Brave222', 'Creative222', 'Loyal2222', 'Lorem22', 'Patient22']

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(0);

    const navigateNext = () => {
        setCurrentIndex((preIndex) => (preIndex === images_day.length - 1 ? 0 : preIndex + 1));
        setAnimate(!animate)
    };
    const navigatePrevious = () => {
        setCurrentIndex((preIndex) => (preIndex === 0 ? images_day.length - 1 : preIndex - 1));
        setAnimate(!animate)
    }


    return (
        <div className="animate relative flex flex-col items-center justify-center lg:w-full h-screen">
            {/* <div className={`${(animate) ? 'animate-fade animate-duration-[2000ms] animate-ease-linear absolute' : ''}`} > */}
                <img className="absolute top-0 left-0 right-0 -z-10 w-screen h-screen     animate-fade animate-duration-[2000ms] animate-ease-linear  " src={mode ? images_dark[currentIndex] : images_day[currentIndex]} alt='bannerimage' />
            {/* </div> */}

            {currentIndex % 2 == 0 ? <div className="mx-[20px] m-5 md:ml-10 bottom-[58px] right-[10px] absolute flex flex-col items-end justify-start lg:w-[646px] lg:h-[415px] lg:right-[15rem] lg:bottom-[10rem] lg:absolute lg:z-20">
                <div className="w-full h-full absolute  bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl lg:w-[646px] lg:h-[416px]" />
                <div className="mr-[22px] mt-[15px] relative text-justify text-black dark:text-white text-[40px] lg:text-[64px] font-normal font-['Katibeh'] lg:w-[340px] lg:h-[31px] lg:leading-[64px] lg:mt-[30px] lg:mr-[30px] ">What Makes You</div>
                <div className="mr-[22px] mt-[6px] relative text-justify text-black dark:text-white text-5xl leading-18 lg:text-8xl font-normal font-['Revelstoke'] lg:leading-[64px] lg:mt-[20px] lg:mr-[30px]">{title[currentIndex]}!</div>
                <div className="mr-[22px] mt-[10px] ml-[20px] relative text-right text-black dark:text-white text-[14px] lg:text-[15px] font-normal font-['Inter'] leading-normal lg:mt-[30px] lg:mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency Combining strategic thinking and sharp design to build great brands in this cut throat business competition.</div>

                <div className="mr-[22px] mt-[10px] relative text-justify text-black dark:text-white text-[32px] font-normal font-['Heaven'] leading-normal lg:text-5xl  lg:mt-[15px] lg:mr-[30px]"># What makes you creative</div>

                <div className="mr-[22px] mt-[14px] h-[64px] w-[110px] lg:w-[122px] lg:h-11 relative lg:mt-[15px] lg:mr-[30px]">
                    <button className="lg:w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs lg:text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                </div>
            </div> :

                <div className="mx-[20px] m-5 md:ml-10 bottom-[58px] right-[10px] absolute flex flex-col items-end justify-start lg:w-[646px] lg:h-[415px] lg:left-[15rem] lg:bottom-[10rem] lg:absolute lg:z-20">
                    <div className="w-full h-full absolute  bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl lg:w-[646px] lg:h-[416px]" />
                    <div className="mr-[22px] mt-[15px] relative text-justify text-black dark:text-white text-[40px] lg:text-[64px] font-normal font-['Katibeh'] lg:w-[340px] lg:h-[31px] lg:leading-[64px] lg:mt-[30px] lg:mr-[30px] ">What Makes You</div>
                    <div className="mr-[22px] mt-[6px] relative text-justify text-black dark:text-white text-5xl leading-18 lg:text-8xl font-normal font-['Revelstoke'] lg:leading-[64px] lg:mt-[20px] lg:mr-[30px]">{title[currentIndex]}!</div>
                    <div className="mr-[22px] mt-[10px] ml-[20px] relative text-right text-black dark:text-white text-[14px] lg:text-[15px] font-normal font-['Inter'] leading-normal lg:mt-[30px] lg:mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency Combining strategic thinking and sharp design to build great brands in this cut throat business competition.</div>

                    <div className="mr-[22px] mt-[10px] relative text-justify text-black dark:text-white text-[32px] font-normal font-['Heaven'] leading-normal lg:text-5xl  lg:mt-[15px] lg:mr-[30px]"># What makes you creative</div>

                    <div className="mr-[22px] mt-[14px] h-[64px] w-[110px] lg:w-[122px] lg:h-11 relative lg:mt-[15px] lg:mr-[30px]">
                        <button className="lg:w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs lg:text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                    </div>
                </div>
            }




            <button onClick={navigatePrevious}>
                <img className="absolute justify-center items-center inline-flex w-2 h-2 left-[16px] top-[454px] lg:w-[72px] lg:h-[72px] lg:px-[21px] lg:py-[18px] lg:left-[178px] lg:top-[504px]  " src={arrowleft} alt='' />
            </button>
            <button onClick={navigateNext} >
                <img className=" absolute justify-center items-center inline-flex w-2 h-2 right-[16px] top-[454px] lg:w-[72px] lg:h-[72px] lg:px-[21px] lg:py-[18px] lg:right-[178px] lg:top-[504px] " src={arrowright} alt='' />
            </button>

            <div className="w-[126px] lg:left-[50%] bottom-[5rem] absolute">
                {currentIndex == 0 ? <div className="w-2 h-2 left-[20px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[20px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 1 ? <div className="w-2 h-2 left-[30px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[30px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 2 ? <div className="w-2 h-2 left-[40px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[40px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 3 ? <div className="w-2 h-2 left-[50px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[50px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 4 ? <div className="w-2 h-2 left-[60px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[60px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 5 ? <div className="w-2 h-2 left-[70px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[70px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 6 ? <div className="w-2 h-2 left-[80px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[80px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 7 ? <div className="w-2 h-2 left-[90px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[90px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex == 8 ? <div className="w-2 h-2 left-[100px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[100px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
            </div>
        </div>
    )
}

export default Banner;