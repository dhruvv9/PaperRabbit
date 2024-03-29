
import React from 'react'
import { useState, useRef } from 'react';


import day1 from '../../assets/bannerimgs/1 background.svg'
import day2 from '../../assets/bannerimgs/2 background.png'
import day3 from '../../assets/bannerimgs/3 background.png'
import day4 from '../../assets/bannerimgs/4 background.png'
import day5 from '../../assets/bannerimgs/5 background.png'
import day6 from '../../assets/bannerimgs/6 background.png'
import day7 from '../../assets/bannerimgs/7 background.png'
import day8 from '../../assets/bannerimgs/8 background.png'
import day9 from '../../assets/bannerimgs/9 background.png'
import day10 from '../../assets/bannerimgs/12 background.png'
import day11 from '../../assets/bannerimgs/11 background.png'


import dark1 from '../../assets/bannerimgs/1 background-dark.png'
import dark2 from '../../assets/bannerimgs/2 background-dark.png'
import dark3 from '../../assets/bannerimgs/3 background-dark.png'
import dark4 from '../../assets/bannerimgs/4 background-dark.png'
import dark5 from '../../assets/bannerimgs/5 background-dark.png'
import dark6 from '../../assets/bannerimgs/6 background-dark.png'
import dark7 from '../../assets/bannerimgs/7 background-dark.png'
import dark8 from '../../assets/bannerimgs/8 background-dark.png'
import dark9 from '../../assets/bannerimgs/9 background-dark.png'



import arrowleft from '../../assets/bannerimgs/left arrow.png';
import arrowright from '../../assets/bannerimgs/right arrow.png';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function DummyBanner(props) {
    const { mode } = props;


    const images_day = [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11]
    const images_dark = [dark1, dark2, dark3, dark4, dark5, dark6, dark7, dark8, dark9]

    const title = ['Brave', 'Creative', 'Loyal', 'Lorem1', 'Brave222', 'Creative222', 'Loyal2222', 'Lorem22', 'Patient22']

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(0);

    const [pos, setPos] = useState(false);
    const [position, setPosition] = useState('end')
    const [leftRight , setleftRight] = useState('mr')

    const navigateNext = () => {
        setCurrentIndex((preIndex) => (preIndex === images_day.length - 1 ? 0 : preIndex + 1));
        // setAnimateRight(!animateRight)
        setAnimate(!animate)
        setPos(!pos)
            console.log(pos);
        if(pos){
            setPosition('start')
            setleftRight('ml')
        }else{
            setPosition('end')
            setleftRight('mr')

        }

    };
    const navigatePrevious = () => {
        setCurrentIndex((preIndex) => (preIndex === 0 ? images_day.length - 1 : preIndex - 1));
        // setAnimateRight(!animateRight)
        setAnimate(!animate)
        setPos(!pos)

        if(pos){
            setPosition('start')
        }else{
            setPosition('end')
        }
    }



    const image = useRef();

    useGSAP(() => {
        gsap.from(image.current, {
            // ease:"back",
            autoAlpha: 10,
            // y:'-200',
            scale: 1.2,
            duration: 1.05,
            // yoyo : true,
            // autoAlpha : 0
        })

    }, [animate])

    return (
        <div className = {`w-[100%] h-screen animate relative flex items-end justify-${position} overflow-hidden`}>

            <div className="w-[100%] h-screen absolute overflow-hidden" >
                <img className="absolute top-0 left-0 right-0 z-10 w-[100%] h-screen object-cover  " src={mode ? images_dark[currentIndex] : images_day[currentIndex]} alt='bannerimage' ref={image} />
            </div>

            <div className={`mx-[20px] z-20   flex flex-col items-end justify-start max-w-[583px]  h-[374px] relative lg:${leftRight}-52  mb-[93px]`}>
                <div className="w-full h-full absolute  bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl " />
                <div className="mr-[22px] mt-[15px] sm:mt-[18px] sm:text-[30px] relative  text-black dark:text-white text-[40px] lg:text-[64px] font-normal font-['Katibeh']  lg:h-[31px] h-fit lg:leading-[64px] lg:mt-[30px] lg:mr-[30px] leading-none ">What Makes You</div>
                <div className="mr-[22px] mt-[6px] sm:mt-[0px] sm:text-[45px] relative text-black dark:text-white text-5xl  lg:text-8xl font-normal font-['Revelstoke'] lg:leading-[64px]  lg:mt-[20px] lg:mr-[30px]">{title[currentIndex]}!</div>
                <div className="mr-[22px] mt-[10px] ml-[20px] sm:text-[14px] relative text-left text-black dark:text-white text-[14px] lg:text-[15px] font-normal font-['Inter'] leading-normal lg:mt-[30px] lg:mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency Combining strategic thinking and sharp design to build great brands in this cut throat business competition.</div>

                <div className="mr-[22px] mt-[10px] sm:text-[30px] relative text-justify text-black dark:text-white text-[32px] font-normal font-['Heaven'] leading-normal lg:text-5xl  lg:mt-[15px] lg:mr-[30px]"># What makes you creative</div>

                <div className="mr-[22px] mt-[14px] h-[64px] w-[10rem]  lg:h-11 relative lg:mt-[15px] lg:mr-[30px]">
                    <button className="l w-[9rem] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs lg:text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                </div>
            </div>
{/* 
            {(currentIndex + 1) % 2 === 0 ? <div className="mx-[20px] z-20   flex flex-col items-end justify-start max-w-[583px]  h-[374px] relative lg:ml-52  mb-[93px]">
                <div className="w-full h-full absolute  bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl " />
                <div className="mr-[22px] mt-[15px] sm:mt-[18px] sm:text-[30px] relative  text-black dark:text-white text-[40px] lg:text-[64px] font-normal font-['Katibeh']  lg:h-[31px] h-fit lg:leading-[64px] lg:mt-[30px] lg:mr-[30px] leading-none ">What Makes You</div>
                <div className="mr-[22px] mt-[6px] sm:mt-[0px] sm:text-[45px] relative text-black dark:text-white text-5xl  lg:text-8xl font-normal font-['Revelstoke'] lg:leading-[64px]  lg:mt-[20px] lg:mr-[30px]">{title[currentIndex]}!</div>
                <div className="mr-[22px] mt-[10px] ml-[20px] sm:text-[14px] relative text-left text-black dark:text-white text-[14px] lg:text-[15px] font-normal font-['Inter'] leading-normal lg:mt-[30px] lg:mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency Combining strategic thinking and sharp design to build great brands in this cut throat business competition.</div>

                <div className="mr-[22px] mt-[10px] sm:text-[30px] relative text-justify text-black dark:text-white text-[32px] font-normal font-['Heaven'] leading-normal lg:text-5xl  lg:mt-[15px] lg:mr-[30px]"># What makes you creative</div>

                <div className="mr-[22px] mt-[14px] h-[64px] w-[10rem]  lg:h-11 relative lg:mt-[15px] lg:mr-[30px]">
                    <button className="l w-[9rem] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs lg:text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                </div>
            </div> :

                <div className="mx-[20px] z-20   flex flex-col items-end justify-start max-w-[583px]  h-[374px] relative lg:mr-52  mb-[93px]">
                    <div className="w-full h-full absolute  bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl " />
                    <div className="mr-[22px] mt-[15px] sm:mt-[18px] sm:text-[30px] relative  text-black dark:text-white text-[40px] lg:text-[64px] font-normal font-['Katibeh']  lg:h-[31px] h-fit lg:leading-[64px] lg:mt-[30px] lg:mr-[30px] leading-none ">What Makes You</div>
                    <div className="mr-[22px] mt-[6px] sm:mt-[0px] sm:text-[45px] relative text-black dark:text-white text-5xl  lg:text-8xl font-normal font-['Revelstoke'] lg:leading-[64px]  lg:mt-[20px] lg:mr-[30px]">{title[currentIndex]}!</div>
                    <div className="mr-[22px] mt-[10px] ml-[20px] sm:text-[14px] relative text-left text-black dark:text-white text-[14px] lg:text-[15px] font-normal font-['Inter'] leading-normal lg:mt-[30px] lg:mr-[30px]">We are barnd enthusiasts. We are storyteller. We are a full service creative agency Combining strategic thinking and sharp design to build great brands in this cut throat business competition.</div>

                    <div className="mr-[22px] mt-[10px] sm:text-[30px] relative text-justify text-black dark:text-white text-[32px] font-normal font-['Heaven'] leading-normal lg:text-5xl  lg:mt-[15px] lg:mr-[30px]"># What makes you creative</div>

                    <div className="mr-[22px] mt-[14px] h-[64px] w-[10rem]  lg:h-11 relative lg:mt-[15px] lg:mr-[30px]">
                        <button className="l w-[9rem] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs lg:text-sm font-normal font-['Inter'] leading-none ">Let's Make Art</button>
                    </div>
                </div>
            } */}




            <button onClick={navigatePrevious} >
                <img className="absolute justify-center z-20 items-center inline-flex left-[120px] top-[40%] mac:top-[35%] w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 " src={arrowleft} alt='' />
            </button>


            <button onClick={navigateNext} >
                <img className=" absolute justify-center z-20 items-center inline-flex right-[120px] top-[40%] mac:top-[35%] w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 " src={arrowright} alt='' />
            </button>

            {/* <div className="sam-[240px] h-5 lg:left-[50%] lg:bottom-[3rem] bottom-[1.5rem] z-20 absolute bg-gray-300 rounded-xl flex items-center justify-center gap-4">
        {currentIndex === 0 ? <div className="w-2 h-2  relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 1 ? <div className="w-2 h-2  relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 2 ? <div className="w-2 h-2  relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 3 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 5 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 6 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 7 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 8 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 9 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
        {currentIndex === 10 ? <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
    </div> */}

            <div className="w-[126px] z-50 lg:left-[50%] lg:bottom-[5rem] bottom-[2.5rem] absolute">
                {currentIndex === 0 ? <div className="w-2 h-2 left-[20px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[20px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 1 ? <div className="w-2 h-2 left-[30px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[30px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 2 ? <div className="w-2 h-2 left-[40px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[40px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 3 ? <div className="w-2 h-2 left-[50px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[50px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 4 ? <div className="w-2 h-2 left-[60px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[60px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 5 ? <div className="w-2 h-2 left-[70px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[70px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 6 ? <div className="w-2 h-2 left-[80px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[80px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 7 ? <div className="w-2 h-2 left-[90px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[90px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 8 ? <div className="w-2 h-2 left-[100px] top-[5px] absolute bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 left-[100px] top-[5px] absolute bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
            </div>

        </div>
    )
}

export default DummyBanner