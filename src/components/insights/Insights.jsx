import React from 'react';
import insight1 from "../../assets/insights/insights1.jpg";
import insight2 from "../../assets/insights/insights2.jpg";
import insight3 from "../../assets/insights/insights3.jpg";
import insight4 from "../../assets/insights/insights4.jpg";


function Insights() {
    return (
        <div class="flex justify-center items-center mx-auto mr-10 my-70 p-74">
            <div class="w-[1920px] h-[842px] relative mx-4 my-8 p-4 mb-56">

                <div className="w-[369px] h-24 left-[776px] top-0 absolute flex-col justify-start items-start inline-flex">
                    <div className="text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Insight</div>
                    <div className="text-emerald-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Advertising</div>
                </div>

                <div className="w-[1420px] h-[76px] left-[250px] top-[136px] absolute text-center text-black text-2xl font-bold font-['Inter'] leading-9 z-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. <br /><br /></div>
                <div className="w-[1920px] h-[510px] pl-[250px] left-0 top-[252px] absolute justify-end items-start gap-5 inline-flex">
                    <div className="w-[340px] h-[510px] relative backdrop-blur-[20px] flex-col justify-start items-start flex">
                        <img className="w-[340px] h-[510px] rounded-[20px]" src={insight4} alt='' />
                        <div className="w-[66px] h-[65px] relative">
                            <div className="w-[66px] h-[65px] left-0 top-0 absolute bg-gray-50 bg-opacity-70 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" />
                            <div className="w-6 h-[17px] left-[21px] top-[24px] absolute text-justify text-black text-[32px] font-normal font-['Katibeh'] leading-loose">12</div>
                        </div>
                        <div className="w-80 h-[250px] relative">
                            <div className="w-80 h-[250px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]" />
                            <div className="w-[280px] h-[67px] left-[20px] top-[10px] absolute text-black text-2xl font-bold font-['Inter'] leading-loose">Perspiciatis unde dolori Perspiciatis unde dolori<br /> </div>
                            <div className="w-[280px] h-[117px] left-[20px] top-[123px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
                            <div className="w-140 h-18 left-20 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-'Inter' leading-3">Category - </span>
                                <span className="text-zinc-950 text-xs font-normal font-'Inter' leading-3">Lorem ipsum</span>
                            </div>
                            <div className="w-121 h-18 left-170 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-Inter leading-3">Date - </span>
                                <span className="text-zinc-950 text-xs font-normal font-Inter leading-3">DD/MM/YYYY</span>
                            </div></div>
                    </div>
                    <div className="w-[340px] h-[510px] relative flex-col justify-start items-start flex">
                        <img className="w-[340px] h-[510px] rounded-[20px]" src={insight3} alt=" " />
                        <div className="w-[66px] h-[65px] relative">
                            <div className="w-[66px] h-[65px] left-0 top-0 absolute bg-gray-50 bg-opacity-70 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" />
                            <div className="w-6 h-[17px] left-[21px] top-[24px] absolute text-justify text-black text-[32px] font-normal font-['Katibeh'] leading-loose">12</div>
                        </div>
                        <div className="w-80 h-[250px] relative">
                            <div className="w-80 h-[250px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]" />
                            <div className="w-[280px] h-[67px] left-[20px] top-[10px] absolute text-black text-2xl font-bold font-['Inter'] leading-loose">Perspiciatis unde dolori Perspiciatis unde dolori<br /> </div>
                            <div className="w-[280px] h-[117px] left-[20px] top-[123px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
                            <div className="w-140 h-18 left-20 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-'Inter' leading-3">Category - </span>
                                <span className="text-zinc-950 text-xs font-normal font-'Inter' leading-3">Lorem ipsum</span>
                            </div>
                            <div className="w-121 h-18 left-170 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-Inter leading-3">Date - </span>
                                <span className="text-zinc-950 text-xs font-normal font-Inter leading-3">DD/MM/YYYY</span>
                            </div>  </div>
                    </div>
                    <div className="w-[340px] h-[510px] relative backdrop-blur-[20px] flex-col justify-start items-start flex">
                        <img className="w-[340px] h-[510px] rounded-[20px]" src={insight2} alt='' />
                        <div className="w-[66px] h-[65px] relative">
                            <div className="w-[66px] h-[65px] left-0 top-0 absolute bg-gray-50 bg-opacity-70 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" />
                            <div className="w-6 h-[17px] left-[21px] top-[24px] absolute text-justify text-black text-[32px] font-normal font-['Katibeh'] leading-loose">12</div>
                        </div>
                        <div className="w-80 h-[250px] relative">
                            <div className="w-80 h-[250px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]" />
                            <div className="w-[280px] h-[67px] left-[20px] top-[10px] absolute text-black text-2xl font-bold font-['Inter'] leading-loose">Perspiciatis unde dolori Perspiciatis unde dolori<br /> </div>
                            <div className="w-[280px] h-[117px] left-[20px] top-[123px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
                            <div className="w-140 h-18 left-20 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-'Inter' leading-3">Category - </span>
                                <span className="text-zinc-950 text-xs font-normal font-'Inter' leading-3">Lorem ipsum</span>
                            </div>
                            <div className="w-121 h-18 left-170 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-Inter leading-3">Date - </span>
                                <span className="text-zinc-950 text-xs font-normal font-Inter leading-3">DD/MM/YYYY</span>
                            </div>

                        </div>
                    </div>
                    <div className="w-[340px] h-[510px] relative backdrop-blur-[20px] flex-col justify-start items-start flex">
                        <img className="w-[340px] h-[510px] rounded-[20px]" src={insight1} alt='' />
                        <div className="w-[66px] h-[65px] relative">
                            <div className="w-[66px] h-[65px] left-0 top-0 absolute bg-gray-50 bg-opacity-70 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" />
                            <div className="w-6 h-[17px] left-[21px] top-[24px] absolute text-justify text-black text-[32px] font-normal font-['Katibeh'] leading-loose">12</div>
                        </div>
                        <div className="w-80 h-[250px] relative">
                            <div className="w-80 h-[250px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]" />
                            <div className="w-[280px] h-[67px] left-[20px] top-[10px] absolute text-black text-2xl font-bold font-['Inter'] leading-loose">Perspiciatis unde dolori Perspiciatis unde dolori<br /> </div>
                            <div className="w-[280px] h-[117px] left-[20px] top-[123px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
                            <div className="w-140 h-18 left-20 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-'Inter' leading-3">Category - </span>
                                <span className="text-zinc-950 text-xs font-normal font-'Inter' leading-3">Lorem ipsum</span>
                            </div>
                            <div className="w-121 h-18 left-170 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-Inter leading-3">Date - </span>
                                <span className="text-zinc-950 text-xs font-normal font-Inter leading-3">DD/MM/YYYY</span>
                            </div>  </div>
                    </div>
                    <div className="w-[340px] h-[510px] relative backdrop-blur-[20px] flex-col justify-start items-start flex">
                        <img className="w-[340px] h-[510px] rounded-[20px]" src={insight4} alt='' />
                        <div className="w-[66px] h-[65px] relative">
                            <div className="w-[66px] h-[65px] left-0 top-0 absolute bg-gray-50 bg-opacity-70 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" />
                            <div className="w-6 h-[17px] left-[21px] top-[24px] absolute text-justify text-black text-[32px] font-normal font-['Katibeh'] leading-loose">12</div>
                        </div>
                        <div className="w-80 h-[250px] relative">
                            <div className="w-80 h-[250px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]" />
                            <div className="w-[280px] h-[67px] left-[20px] top-[10px] absolute text-black text-2xl font-bold font-['Inter'] leading-loose">Perspiciatis unde dolori Perspiciatis unde dolori<br /> </div>
                            <div className="w-[280px] h-[117px] left-[20px] top-[123px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
                            <div className="w-140 h-18 left-20 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-'Inter' leading-3">Category - </span>
                                <span className="text-zinc-950 text-xs font-normal font-'Inter' leading-3">Lorem ipsum</span>
                            </div>
                            <div className="w-121 h-18 left-170 top-87 absolute text-justify">
                                <span className="text-zinc-950 text-xs font-bold font-Inter leading-3">Date - </span>
                                <span className="text-zinc-950 text-xs font-normal font-Inter leading-3">DD/MM/YYYY</span>
                            </div>    </div>
                    </div>
                </div>

                <div class="relative flex justify-center items-end mt- 10 w-full h-full">
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120px] h-10 pl-[26px] pr-[27px] py-[5px] bg-zinc-950 rounded-[10px] justify-center items-center inline-flex">
                        <div class="h-[30px] px-2.5 justify-between items-center inline-flex">
                            <div class="text-white text-sm font-bold font-['Inter'] leading-[30px]">More</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Insights;