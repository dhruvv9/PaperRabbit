import React from 'react';
import portfolioimg from '../../assets/portfolio.jpg';
import img1 from '../../assets/1.jpg'

function Portfoliolayer() {
    return (
        <div className="w-full h-[322.938rem] flex justify-center item-center relative bg-neutral-100">


            <img className="w-full h-[532px] absolute" src={portfolioimg} alt='' />

            <div className='w-full h-[220px]  top-[38rem] relative  '>
                <div className='flex-cols-2 w-[610px] items-center justify-start'>


                    <div className="w-[100px] h-[100px] ml-[25rem]  item-center relative rounded-[300px]" >
                        <img className='' src={img1} alt='' />
                    </div>
                    <div className='text-black text-2xl w-[200px] ml-[25rem] mt-6 font-bold font-[Inter] leading-normal'>Company Name</div>
                    <div className='text-black text-2xl w-[120px] ml-[25rem] mt-2 font-bold font-[Inter] leading-normal'>Domain</div>






                </div>
                <div className="w-[1179px]  relative text-justify ml-[50rem] top-[-165px] flex-row items-center text-black text-2xl font-bold font-['Inter'] leading-[48px]">Perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde omnis undemns omnis undemns<br />perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde omnis undemns omnis undemns<br />perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde omnis undemns omnis undemns </div>

            </div>
            <div className='w-[1000px] h-[220px] flex justify-center ml-[10rem]items-center top-[1000px] relative  '>

            <div className="relative text-black flex flex-justify-center items-center text-[32px] font-bold font-[Inter] leading-loose">Process(icon)</div>

            </div>
            </div>


       














    )
}

export default Portfoliolayer