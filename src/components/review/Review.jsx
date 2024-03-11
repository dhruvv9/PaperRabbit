import React from 'react';
import review1 from '../../assets/review/review1.jpg';
import review2 from '../../assets/review/review2.jpg';
import review3 from '../../assets/review/review3.jpg';
import ReviewCards from './ReviewCards';



function Review() {

      return (
            <div className="w-full h-full pb-14 flex-col justify-start items-center gap-[0.18px] inline-flex">
                  <div className="w-[247px] h-[158.82px] relative">
                        <div className="w-[247px] h-[83.32px] left-0 top-[75.51px] absolute text-center text-blue-300 text-8xl font-normal font-['Heaven'] leading-[64px]">Reviews</div>
                        <div className="w-[156px] h-[83.32px] left-[47px] top-0 absolute text-center text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Happy</div>
                  </div>
                  {/* <div className="w-full h-[464.95px] pt-8 pb-[32.95px] justify-end items-center inline-flex"> */}
                  <div className="w-full h-[400px] relative flex items-start gap-4 overflow-x-scroll no-scrollbar">

                        <div className="w-[340px] h-[400px] relative flex items-end justify-end ml-[50px] lg:ml-[570px] ">
                              <img className="w-[340px] h-[400px] absolute -z-10 rounded-[20px]" src={review1} alt="review image1" />
                              <div className="  w-[340px]  opacity-95 rounded-[10px] backdrop-blur-[20px] p-4 m-4 relative text-justify h-[150px]"><span className="text-zinc-950 text-sm font-bold font-['Inter']">Flexinutria </span><span className="text-zinc-950 text-sm font-normal font-['Inter']">|</span><span className="text-zinc-950 text-sm font-bold font-['Inter']"> </span><span className="text-zinc-950 text-sm font-normal font-['Inter']">Company <br /></span>
                                    <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-1 mt-3  h-[85px] overflow-y-scroll no-scrollbar">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, minima ex libero ipsa quo impedit quibusdam atque alias vel, nihil aliquam adipisci veritatis odit. Eos rem dignissimos dolor alias iure? ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia eum beatae, fuga aliquid similique nisi eligendi. dolor sit amet,  aliqua. Ut enim ad minim veniam.  Ut enim ad minim veniam et dolore magna aliqua. Ut enim ad minim veniam.</div>
                              </div>
                        </div>    

                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />
                        <ReviewCards />

                  </div>
                  {/* </div> */}
            </div>

      )
}

export default Review;