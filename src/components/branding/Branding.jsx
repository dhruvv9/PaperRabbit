import React, { useState } from "react";

import hatch1 from "../../assets/brandingimg/hatch1.jpg";
import hatch2 from "../../assets/brandingimg/hatch2.jpg";
import hatch from "../../assets/brandingimg/hatch.jpg";

function Branding() {
    const [mouse, setMouse] = useState(false);
    const [id, setId] = useState(0);

    const mousehover = (id) => {
        setMouse(!mouse);
        setId(id);
    };

    return (
        <div className="w-full relative flex flex-col items-center justify-around mt-10 lg:mt-20 ">

            <div className="w-full relative flex flex-col justify-center items-center">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Advertising</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">branding</div>
                </div>
            </div>

            {/* <div className="w-screen lg:w-screen  flex flex-col lg:flex-row items-center justify-center relative "> */}

                <div className="lg:grid lg:grid-cols-2 relative lg:grid-rows-1 lg:w-[58%]  mac:grid mac:grid-cols-2  mac:grid-rows-1 mac:w-[100%] flex flex-col items-center justify-center mac:p-5 lg:mb-20 " >
                    <div className="w-full relative flex items-center justify-center mt-5">
                        <img
                            className="w-[406px] h-[310px] lg:w-[700px] lg:h-[528px] mac:w-[500px] mac:h-[328px] relative rounded-[20px] "
                            src={hatch}
                            alt=""
                        />

                        <div className="w-[349px] h-[268px] mac:w-[242px] mac:h-[186px] left-[-5rem] bottom-[-4rem] mac:left-[0rem] mac:bottom-[-4rem] hidden absolute  justify-center items-center lg:inline-flex mac:inline-flex">
                            <img
                                className="mac:w-[242px] mac:h-[186px] rounded-[20px] "
                                src={hatch2}
                                alt=""
                            />
                        </div>
                        <div className="w-[242px] h-[186px] mac:w-[242px] mac:h-[186px] top-[0rem] right-[-5rem] hidden absolute justify-center items-center lg:inline-flex mac:inline-flex">
                            <img
                                className="w-[242px] h-[186px] rounded-[20px] "
                                src={hatch1}
                                alt=""
                            />
                        </div>

                        <div
                            className="w-5 h-5 left-[-10rem] top-[5rem] hidden lg:block relative"
                            onMouseEnter={() => mousehover(1)}
                            onMouseLeave={() => mousehover(0)}
                        >
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-sky-200 rounded-full" />
                        </div>
                        <div
                            className="w-5 h-5 left-[-31rem] top-[0rem] hidden lg:block relative"
                            onMouseEnter={() => mousehover(2)}
                            onMouseLeave={() => mousehover(0)}
                        >
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-emerald-200 rounded-full" />
                        </div>
                        <div
                            className="w-5 h-5 left-[-38rem] top-[12rem] hidden lg:block relative "
                            onMouseEnter={() => mousehover(3)}
                            onMouseLeave={() => mousehover(0)}
                        >
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-red-200 rounded-full" />
                        </div>
                        <div
                            className="w-5 h-5 z-10 left-[-8rem] top-[-5rem] hidden lg:block relative "
                            onMouseEnter={() => mousehover(4)}
                            onMouseLeave={() => mousehover(0)}
                        >
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-yellow-200 rounded-full" />
                        </div>

                        {/* ----------------------------popups-------------------------------------------- */}

                        {mouse && id === 1 && (
                            <div className="w-80 left-[542px] top-[364px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                                {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                                    Perspiciatis unde dolori perspiciatis unde dolori
                                    <br />{" "}
                                </div>
                                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud. Incididunt ut labore et
                                    dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.
                                    Incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                                    veniam, quis nostrud.
                                </div>
                            </div>
                        )}

                        {mouse && id === 2 && (
                            <div className="w-80  left-[230px] top-[2px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                                {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                                    Perspiciatis unde dolori perspiciatis unde dolori
                                    <br />{" "}
                                </div>
                                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud. Incididunt ut labore et
                                    dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.
                                    Incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                                    veniam, quis nostrud.
                                </div>
                            </div>
                        )}

                        {mouse && id === 3 && (
                            <div className="w-80  left-[140px] top-[155px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                                {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                                    Perspiciatis unde dolori perspiciatis unde dolori
                                    <br />{" "}
                                </div>
                                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud. Incididunt ut labore et
                                    dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.
                                    Incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                                    veniam, quis nostrud.
                                </div>
                            </div>
                        )}

                        {mouse && id === 4 && (
                            <div className="w-80 left-[285px] top-[200px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                                {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                                    Perspiciatis unde dolori perspiciatis unde dolori
                                    <br />{" "}
                                </div>
                                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud. Incididunt ut labore et
                                    dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.
                                    Incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                                    veniam, quis nostrud.
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-screen h-full lg:w-full  lg:h-[820px] lg:pl-[7rem] lg:p-0 mac:w-full  mac:h-[820px] mac:pl-[7rem] mac:p-0 relative flex flex-col items-center justify-center gap-5 place-items-center">
                        <div className="relative text-justify text-black dark:text-white text-sm leading-[20px] lg:text-sm font-normal font-['Inter'] p-4 ">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                        </div>

                        <div className="w-full relative p-[1rem] flex items-center justify-center lg:mt-3 ">
                            <div className="w-[120px] h-10 mx-2 bg-zinc-950 dark:bg-white rounded-[10px] justify-center items-center inline-flex">
                                <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                                    <div className="text-white dark:text-black text-sm font-bold font-['Inter'] leading-[30px]">
                                        Know More
                                    </div>
                                </div>
                            </div>
                            <div className="w-[120px]  h-10 mx-2 bg-zinc-950 dark:bg-white rounded-[10px] justify-center items-center inline-flex">
                                <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                                    <div className="text-white dark:text-black  text-sm font-bold font-['Inter'] leading-[30px]">
                                        Reach Us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* <div className="w-5 h-5 relative">
                    <div className="w-5 h-5  absolute rounded-full border border-white" />
                    <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-red-200 rounded-full" />
                </div> */}


            {/* </div> */}
        </div>
    );
}

export default Branding;
