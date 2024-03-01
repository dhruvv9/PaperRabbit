import React from 'react'
import article1 from '../../assets/articalimgs/artical1.jpg';
import article2 from '../../assets/articalimgs/artical1.jpg';
import article3 from '../../assets/articalimgs/artical1.jpg';
import article4 from '../../assets/articalimgs/artical1.jpg';
import { useState } from "react";

function Article() {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div class="flex justify-center items-center h-screen mt-20">
            <div class="w-[1420px] h-[672px] relative">

                <div className="w-[369px] h-24 left-[525px] top-0 absolute flex-col justify-start items-start inline-flex">
                    <div className="text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Article</div>
                    <div className="text-emerald-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Advertising</div>
                </div>
                <div className="w-[1420px] h-[76px] left-0 top-[136px] absolute text-center text-black text-2xl font-bold font-['Inter'] leading-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. <br /><br /></div>
                <div className="w-[1420px] h-[340px] left-0 top-[252px] absolute">
                    <div className="w-[340px] h-[340px] left-0 top-0 absolute "
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} >

                        <img className="w-[340px] h-[340px] left-0 top-0 absolute rounded-[20px] " src={article1} alt='article1' />
                        {isHovered && (
                            <div className="w-[340px] h-[340px] left-0 top-0 absolute bg-blue-300 bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        )}
                        <div className="w-[168px] h-10 px-[42px] py-2.5 left-[172px] top-[300px] absolute bg-blue-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">Read More</div>
                        </div>
                    </div>
                    <div className="w-[340px] h-[340px] left-[360px] top-0 absolute"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} >
                        <img className="w-[340px] h-[340px] left-0 top-0 absolute rounded-[20px]" src={article2} alt='article2' />
                        {isHovered && (
                            <div className="w-[340px] h-[340px] left-0 top-0 absolute bg-red-300  bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        )}
                        <div className="w-[168px] h-10 px-[42px] py-2.5 left-[172px] top-[300px] absolute bg-red-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">Read More</div>
                        </div>
                    </div>

                    <div className="w-[340px] h-[340px] left-[720px] top-0 absolute"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}  >
                        <img className="w-[340px] h-[340px] left-0 top-0 absolute rounded-[20px] border border-violet-300 border-opacity-50" src={article4} alt='article4'/>
                        {isHovered && (
                            <div className="w-[340px] h-[340px] left-0 top-0 absolute  bg-blue-300  bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        )}
                        <div className="w-[168px] h-10 px-[42px] py-2.5 left-[172px] top-[300px] absolute bg-blue-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">Read More</div>
                        </div>
                    </div>



                    <div className="w-[340px] h-[340px] left-[1080px] top-0 absolute"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} >
                        <img className="w-[340px] h-[340px] left-0 top-0 absolute rounded-[20px]" src={article3} alt='article3' />
                        {isHovered && (
                            <div className="w-[340px] h-[340px] left-0 top-0 absolute bg-red-300 bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        )}
                        <div className="w-[168px] h-10 px-[42px] py-2.5 left-[172px] top-[300px] absolute bg-red-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">Read More</div>
                        </div>
                    </div>
                </div>
                <div className="w-[120px] h-10 pl-[26px] pr-[27px] py-[5px] left-[649px] top-[632px] absolute bg-zinc-950 rounded-[10px] justify-center items-center inline-flex">
                    <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                        <div className="text-white text-sm font-bold font-['Inter'] leading-[30px]">More</div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Article;