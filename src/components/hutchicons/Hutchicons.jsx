import React, { useState } from 'react'
import day1 from '../../assets/bannerimgs/1 background.png'
import day2 from '../../assets/bannerimgs/2 background.png'
import day3 from '../../assets/bannerimgs/3 background.png'


import arrowleft from '../../assets/bannerimgs/left arrow.png';
import arrowright from '../../assets/bannerimgs/right arrow.png';
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import hutchimg from '../../assets/bannerimgs/hutchiconimg.svg'
// import DummyFirstPage from './DummyFirstPage';
import Dummy2 from './Dummy2';

function Hutchicons({ mode }) {

    // const mode = props.mode;

    const [currentIndex, setCurrentIndex] = useState(0);

    const page = [day1, day2, day3]

    const pages = [<FirstPage mode={mode} />, <SecondPage />, <ThirdPage />]


    const navigateNext = () => {
        setCurrentIndex((previndex) => (previndex === page.length - 1 ? 0 : previndex + 1))
    }

    const navigatePrevious = () => {
        setCurrentIndex((previndex) => (previndex === 0 ? page.length - 1 : previndex - 1))
    }

    return (
        <div className="w-[100%] h-[1180px] sm:h-[800px] relative flex flex-col items-center justify-center overflow-hidden pt-20" >
            <img className="w-[100%] h-full object-cover left-0 top-0 absolute backdrop-blur-sm" src={hutchimg} alt='banner' />
            <div className="w-full h-full left-0 top-0 absolute bg-white dark:bg-black bg-opacity-5 backdrop-blur-xl dark:bg-opacity-5 dark:backdrop-blur-xl" />

            {pages[currentIndex]}

            {/* <Dummy2 mode={mode} /> */}

            <button onClick={navigatePrevious}>
                <img className="absolute justify-center items-center inline-flex left-[120px] top-[40%] sm:left-[20px] sm:top-[20%] w-8 h-8  lg:w-10 lg:h-10  mac:w-10 mac:h-10 " src={arrowleft} alt='' />
            </button>
            <button onClick={navigateNext} >
                <img className=" absolute justify-center items-center inline-flex right-[120px] top-[40%] sm:right-[20px] sm:top-[20%] w-8 h-8  lg:w-10 lg:h-10  mac:w-10 mac:h-10 " src={arrowright} alt='' />
            </button>

            <div className="w-[70px] h-5 lg:left-[50%] lg:bottom-[5rem] bottom-[2.5rem] absolute bg-gray-300 rounded-xl flex items-center justify-center gap-4">
                {currentIndex === 0 ? <div className="w-2 h-2  relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 1 ? <div className="w-2 h-2  relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
                {currentIndex === 2 ? <div className="w-2 h-2  relative bg-zinc-900 dark:bg-white rounded-full" /> : <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />}
            </div>

            <div className="w-[151.48px] h-[120px] left-[177px] top-[528px] absolute">
                <div className="w-[46.34px] h-[120px] left-[105.14px] top-0 absolute bg-white bg-opacity-25 rounded-[50px] shadow border border-gray-50 border-opacity-50" />
                <div className="w-[88.54px] left-[57px] top-[7.42px] absolute">
                    <div className="w-[34.46px] h-[34.46px] left-[54.08px] top-0 absolute">
                        <div className="w-[34.46px] h-[34.46px] left-0 top-0 absolute bg-black bg-opacity-25 rounded-full" />
                        <div className="w-[14.59px] h-[23.55px] left-[9.50px] top-[5.65px] absolute">
                        </div>
                    </div>
                    <div className="w-[32.65px] h-[26.89px] left-0 top-[7.58px] absolute text-right text-black text-opacity-25 text-sm font-normal font-['Revelstoke']">ALL</div>
                </div>
                <div className="w-[145.54px] left-0 top-[43px] absolute">
                    <div className="w-[34.46px] h-[34.46px] left-[111.08px] top-0 absolute">
                        <div className="w-[34.46px] h-[34.46px] left-0 top-0 absolute rounded-full" />
                        <div className="w-[22.57px] h-[17.82px] left-[5.94px] top-[8.09px] absolute">
                        </div>
                    </div>
                    <div className="w-[90.28px] h-[26.89px] left-0 top-[4px] absolute text-right text-black text-sm font-normal font-['Revelstoke']">Selective</div>
                </div>
                <div className="w-[141.54px] left-[4px] top-[79px] absolute">
                    <div className="w-[34.46px] h-[34.46px] left-[107.08px] top-0 absolute">
                        <div className="w-[34.46px] h-[34.46px] left-0 top-0 absolute rounded-full" />
                    </div>
                    <div className="w-[86.44px] h-[26.89px] left-0 top-0 absolute text-right text-black text-sm font-normal font-['Revelstoke']">Trending</div>
                </div>
            </div>

        </div>

    )
}

export default Hutchicons