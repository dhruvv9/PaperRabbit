import React from 'react'
import review1 from '../../assets/review/review1.jpg';

function ReviewCards() {
    return (
        <div className="w-[340px] h-[400px] relative flex items-end justify-end ">
            <img className="w-[340px] h-[400px] absolute -z-10 rounded-[20px]" src={review1} alt="review image1" />
            <div className="  w-[340px]  opacity-95 rounded-[10px] backdrop-blur-[20px] p-4 m-4 relative text-justify h-[150px]"><span className="text-zinc-950 text-sm font-bold font-['Inter']">Flexinutria </span><span className="text-zinc-950 text-sm font-normal font-['Inter']">|</span><span className="text-zinc-950 text-sm font-bold font-['Inter']"> </span><span className="text-zinc-950 text-sm font-normal font-['Inter']">Company <br /></span>
                <div className="text-zinc-950 text-sm font-normal font-['Inter'] leading-1 mt-3  h-[85px] overflow-y-scroll no-scrollbar">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, minima ex libero ipsa quo impedit quibusdam atque alias vel, nihil aliquam adipisci veritatis odit. Eos rem dignissimos dolor alias iure? ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia eum beatae, fuga aliquid similique nisi eligendi. dolor sit amet,  aliqua. Ut enim ad minim veniam.  Ut enim ad minim veniam et dolore magna aliqua. Ut enim ad minim veniam.</div>
            </div>
        </div>
    )
}

export default ReviewCards