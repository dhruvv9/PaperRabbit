import React from "react";
import article1 from "../../assets/articalimgs/artical1.jpg";
import article2 from "../../assets/articalimgs/artical1.jpg";
import article3 from "../../assets/articalimgs/artical1.jpg";
import article4 from "../../assets/articalimgs/artical1.jpg";
import { useState } from "react";

function Article() {
    const [isHovered, setIsHovered] = useState(false);
    const [id, setId] = useState(0);

    const hover = (id) => {
        setIsHovered(!isHovered);
        setId(id);
    };

    return (
        <div class="flex justify-center items-center h-screen mt-20">
            <div class="w-screen h-full lg:w-[1420px] lg:h-[672px] relative flex flex-col items-center justify-center ">
                <div className="relative lg:w-[369px] lg:h-24 flex flex-col justify-start items-start w-full h-full">
                    <div className="text-black text-[44px] lg:text-[64px] font-normal font-['Revelstoke'] leading-[64px]">
                        Article
                    </div>
                    <div className="text-emerald-200  text-5xl lg:text-8xl font-normal font-['Heaven'] leading-[64px]">
                        Advertising
                    </div>
                </div>

                <div className="lg:w-[1420px] lg:h-[76px] relative text-center text-black text-2xl font-bold font-['Inter'] lg:leading-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                    odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                    quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                    mauris. <br />
                    <br />
                </div>

                <div className="relative grid grid-cols-2 grid-rows-2 gap-2 lg:w-[1420px] lg:h-[340px] lg:grid-cols-4 lg:grid-rows-1">
                    <div
                        className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] group/items"
                        // onMouseEnter={() => hover(1)}
                        // onMouseLeave={() => hover(0)}
                        flex items-baseline
                    >
                        <img
                            className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] absolute top-0  rounded-[20px] "
                            src={article1}
                            alt="article1"
                        />

                        {/* {
                            (isHovered && id == 1) ? ( */}
                        <div className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] absolute top-0 z-10 invisible group-hover/items:visible bg-blue-300 bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                            <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                Article hover Dblue
                            </div>
                        </div>
                        {/* ) */}
                        {/* : ( */}
                        <div className="w-[168px] h-10  relative group-hover/items:invisible bg-red-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                                <div className=" text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">
                                    Read More
                                </div>
                            </div>
                        {/* )
                        } */}
                    </div>

                    <div
                        className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] "
                        onMouseEnter={() => hover(2)}
                        onMouseLeave={() => hover(0)}
                    >
                        <img
                            className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px]  rounded-[20px]"
                            src={article2}
                            alt="article2"
                        />
                        {/* {isHovered && id == 2 ? ( */}
                            <div className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] absolute top-0 z-10 bg-red-300  bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        {/* // ) : ( */}
                            <div className="w-[168px] h-10 px-[42px] py-2.5 lg:left-[132px] lg:top-[200px] lg:absolute bg-blue-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">
                                    Read More
                                </div>
                            </div>
                        {/* // )} */}
                    </div>

                    <div
                        className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] "
                        onMouseEnter={() => hover(3)}
                        onMouseLeave={() => hover(0)}
                    >
                        <img
                            className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] rounded-[20px] border border-violet-300 border-opacity-50"
                            src={article4}
                            alt="article4"
                        />
                        {/* {isHovered && id == 3 ? ( */}
                            <div className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] absolute top-0 z-10  bg-blue-300  bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        {/* ) : ( */}
                            <div className="w-[168px] h-10 px-[42px] py-2.5 lg:left-[172px] lg:top-[300px] lg:absolute bg-blue-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">
                                    Read More
                                </div>
                            </div>
                        {/* )} */}
                    </div>

                    <div
                        className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] "
                        onMouseEnter={() => hover(4)}
                        onMouseLeave={() => hover(0)}
                    >
                        <img
                            className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px]  rounded-[20px]"
                            src={article3}
                            alt="article3"
                        />
                        {isHovered && id == 4 ? (
                            <div className="w-[197px] h-[197px] lg:w-[340px] lg:h-[340px] absolute top-0 z-10 bg-red-300 bg-opacity-50 rounded-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase">
                                    Article hover Dblue
                                </div>
                            </div>
                        ) : (
                            <div className="w-[168px] h-10 px-[42px] py-2.5 bottom-0 right-0 z-10 absolute bg-red-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
                                <div className="text-center text-zinc-950 text-sm font-bold font-['Inter'] uppercase leading-tight">
                                    Read More
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-[120px] h-10 pl-[26px] pr-[27px] py-[5px] lg:left-[649px] lg:top-[632px] lg:absolute bg-zinc-950 rounded-[10px] justify-center items-center inline-flex">
                    <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                        <div className="text-white text-sm font-bold font-['Inter'] leading-[30px]">
                            More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
