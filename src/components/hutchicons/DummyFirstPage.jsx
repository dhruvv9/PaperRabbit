import day1 from '../../assets/bannerimgs/1 background.png'
import day2 from '../../assets/bannerimgs/2 background.png'
import day3 from '../../assets/bannerimgs/3 background.png'
import day4 from '../../assets/bannerimgs/4 background.png'
import day5 from '../../assets/bannerimgs/5 background.png'
import day6 from '../../assets/bannerimgs/6 background.png'
import day7 from '../../assets/bannerimgs/7 background.png'
import day8 from '../../assets/bannerimgs/8 background.png'
import day9 from '../../assets/bannerimgs/9 background.png'
import day10 from '../../assets/bannerimgs/10 background.png'
import day11 from '../../assets/bannerimgs/11 background.png'

import React, { useEffect, useState } from 'react'


import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from "gsap";


gsap.registerPlugin(useGSAP);

function DummyFirstPage() {

    const [visible, setVisible] = useState(false)

    const hutchicons = useRef();


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(true)
            }
        )

        observer.observe(hutchicons.current);

        // observer.unobserve(hutchicons.current)

        return () => observer.disconnect();
        
    }, [])


    useGSAP(() => {
        gsap.from(".top", {
            autoAlpha: -1, 
            stagger: 0.1,
            // duration: 1,

            scale: -1,
            transformOrigin : "center center"
        }
        );
    }, { scope: hutchicons , dependencies: [visible] } )


    return (
        <div div className='w-full h-full flex flex-col items-center justify-center scroll-smooth'  >
            <div className='w-full h-full flex flex-col items-center justify-center gap-20 sm:gap-16' ref={hutchicons} >

                <div className=" relative flex gap-20 sm:gap-4 "  ref={hutchicons}>
                    <div className=" w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center " >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day1} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day2} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day3} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day4} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                </div>

                <div className='flex relative gap-20 sm:gap-4'  ref={hutchicons}>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day5} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day6} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day7} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day8} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top sm:hidden">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day9} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                </div>


                <div className='flex relative gap-40 sm:gap-8'  ref={hutchicons}>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top lg:hidden mac:hidden md:hidden ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day9} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>


                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day10} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center"  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day11} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DummyFirstPage