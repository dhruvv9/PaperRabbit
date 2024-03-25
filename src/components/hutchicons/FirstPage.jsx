import React, { useEffect, useState } from 'react'
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


import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from "gsap";


gsap.registerPlugin(useGSAP);

function FirstPage() {


    const [visible, setVisible] = useState(false)

    const circle1 = useRef();
    const circle2 = useRef();
    const circle3 = useRef();
    const circle4 = useRef();
    const circle5 = useRef();
    const circle6 = useRef();
    const circle7 = useRef();
    const circle8 = useRef();
    const circle91 = useRef();
    const circle92 = useRef();
    const circle10 = useRef();
    const circle11 = useRef();

    const hutchicons = useRef();


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(!entry.isIntersecting)
            }
        )

        observer.observe(hutchicons.current);

        // observer.unobserve(hutchicons.current)

        return () => observer.disconnect();

    }, [])

    // ,{
    //     root : null,
    //     rootMargin : "0px",
    //     threshold : 1.0
    // }

    useGSAP(() => {

        gsap.from(circle1.current, {  
            // to fromTo
            y: "-=200",
            x: "-=100",
            duration: 2,
           
            yoyo: true,
            delay: 0,
            autoAlpha : -1
        })
        gsap.from(circle2.current, {

            y: "-=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.1,
            autoAlpha : -1


            // ease : "circ.in"

        })
        gsap.from(circle3.current, {

            y: "-=200",
            x: "+=100",
            duration: 2,
           
            yoyo: true,
            delay: 0.2,
            autoAlpha : -1

            // ease : 'circ.in'

        })
        gsap.from(circle4.current, {

            y: "-=200",
            x: "+=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.3,
            autoAlpha : -1

            // ease : 'circ.in'

        })
        gsap.from(circle5.current, {

            x: "-=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.4,
            autoAlpha : -1


            // ease : 'circ.in'
        })
        gsap.from(circle6.current, {
            y: "+=200",
            x: "-=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.5,
            autoAlpha : -1

        })
        gsap.from(circle7.current, {
            y: "+=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.6,
            autoAlpha : -1

        })
        gsap.from(circle8.current, {
            y: "+=200",
            x: "+=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.5,
            autoAlpha : -1

        })
        gsap.from(circle91.current, {
            x: "+=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.8,
            autoAlpha : -1

        })
        gsap.from(circle92.current, {
            x: "-=200",
            y: "+=200",
            duration: 2,
           
            yoyo: true,
            delay: 0.8,
            autoAlpha : -1

        })
        gsap.from(circle10.current, {
            y: "+=200",
            x: "-=100",
            duration: 2,
           
            yoyo: true,
            delay: 0.9,
            autoAlpha : -1

        })
        gsap.from(circle11.current, {
            y: "+=200",
            x: "+=100",
            duration: 2,
           
            yoyo: true,
            delay: 1,
            autoAlpha : -1
        })

    }, [visible])



    return (
        <div div className='w-full h-full flex flex-col items-center justify-center scroll-smooth bg-red-500' ref={hutchicons} >
            <div className='w-full h-full flex flex-col items-center justify-center gap-20 sm:gap-16'  >

                <div className=" relative flex gap-20 sm:gap-4 " ref={hutchicons}>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center " ref={circle1}  >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day1} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle2} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day2} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle3} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day3} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle4} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day4} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                </div>

                <div className='flex relative gap-20 sm:gap-4'>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle5} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day5} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle6} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day6} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle7} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day7} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle8} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day8} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative sm:hidden">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle91} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day9} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>

                </div>


                <div className='flex relative gap-40 sm:gap-8'>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative lg:hidden mac:hidden md:hidden ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle92} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day9} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>


                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle10} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day10} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                    <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative ">
                        <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center" ref={circle11} >
                            <img className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover" alt="image1" src={day11} />
                        </div>
                        <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">Breath</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FirstPage


// useGSAP(() => {

//     gsap.from(circle1.current, {  
//         // to fromTo
//         y: "-=800",
//         x: "-=100",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0,
//         autoAlpha : -1
//     })
//     gsap.from(circle2.current, {

//         y: "-=800",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.1,
//         autoAlpha : -1


//         // ease : "circ.in"

//     })
//     gsap.from(circle3.current, {

//         y: "-=500",
//         x: "+=100",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.2,
//         autoAlpha : -1

//         // ease : 'circ.in'

//     })
//     gsap.from(circle4.current, {

//         y: "-=500",
//         x: "+=200",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.3,
//         autoAlpha : -1

//         // ease : 'circ.in'

//     })
//     gsap.from(circle5.current, {

//         x: "-=1000",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.4,
//         autoAlpha : -1


//         // ease : 'circ.in'
//     })
//     gsap.from(circle6.current, {
//         y: "+=1000",
//         x: "-=800",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.5,
//         autoAlpha : -1

//     })
//     gsap.from(circle7.current, {
//         y: "+=1000",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.6,
//         autoAlpha : -1

//     })
//     gsap.from(circle8.current, {
//         y: "+=1000",
//         x: "+=800",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.5,
//         autoAlpha : -1

//     })
//     gsap.from(circle91.current, {
//         x: "+=1000",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.8,
//         autoAlpha : -1

//     })
//     gsap.from(circle92.current, {
//         x: "-=1000",
//         y: "+=1000",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.8,
//         autoAlpha : -1

//     })
//     gsap.from(circle10.current, {
//         y: "+=500",
//         x: "-=100",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 0.9,
//         autoAlpha : -1

//     })
//     gsap.from(circle11.current, {
//         y: "+=500",
//         x: "+=100",
//         duration: 2,
//        
//         yoyo: true,
//         delay: 1,
//         autoAlpha : -1

//     })

// }, [visible])