import React, { useState } from "react";

import hatch1 from "../../assets/brandingimg/hatch1.svg";
import hatch2 from "../../assets/brandingimg/hatch2.svg";
import hatch from "../../assets/brandingimg/hatch.svg";

import { Link } from "react-router-dom";


function DummyBranding() {
    const [mouse, setMouse] = useState(false);
    const [id, setId] = useState(0);

    const mousehover = (id) => {
        setMouse(!mouse);
        setId(id);
    };

    return (
        <div className="w-full z-20 relative flex flex-col items-center justify-start gap-12  bg-white dark:bg-black h-screen">

            <div className="w-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Advertising</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">branding</div>
                </div>
            </div>

            {/* <div className="w-full sam-full  flex flex-col lg:flex-row items-center justify-center relative "> */}

            <div className="lg:grid lg:grid-cols-2 relative lg:grid-rows-1 sam-[58%] lg:max-w-[58%] mac:max-w-[75%]   mac:grid mac:grid-cols-2  mac:grid-rows-1 ram-[75%] flex flex-col items-center justify-center  lg:mb-20 " >
                <div className=" relative flex items-center justify-center mt-5">
                    <img
                        className=" lg:min-w-[100%]  mac:min-w-[100%]"
                        src={hatch}
                        alt=""
                    />

                    <div className="max-w-[49%] ram-[242px] ram2-[186px] left-[-10rem] bottom-[-10rem] mac:left-[-8rem] mac:bottom-[-9rem] hidden absolute  lg:inline-flex mac:inline-flex">
                        <img
                            className=" "
                            src={hatch1}
                            alt=""
                        />
                    </div>


                    <div className="max-w-[39%] ram-[242px] ram2-[186px]  top-3 right-[-5rem] hidden absolute  lg:inline-flex mac:inline-flex">
                        <img
                            className=" "
                            src={hatch2}
                            alt=""
                        />
                    </div>

                    <div
                        className="w-5 h-5 right-48 top-16 hidden lg:block mac:block  absolute"
                        onMouseEnter={() => mousehover(1)}
                        onMouseLeave={() => mousehover(0)}
                    >
                        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                        <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-sky-200 rounded-full" />
                    </div>
                    <div
                        className="w-5 h-5 left-28 top-28 hidden lg:block mac:block absolute"
                        onMouseEnter={() => mousehover(2)}
                        onMouseLeave={() => mousehover(0)}
                    >
                        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                        <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-emerald-200 rounded-full" />
                    </div>
                    <div
                        className="w-5 h-5 bottom-18 right-56 mac:bottom-18 mac:right-24 hidden lg:block mac:block absolute "
                        onMouseEnter={() => mousehover(3)}
                        onMouseLeave={() => mousehover(0)}
                    >
                        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                        <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-red-200 rounded-full" />
                    </div>
                    <div
                        className="w-5 h-5 z-10 bottom-16 left-56 hidden lg:block mac:block absolute "
                        onMouseEnter={() => mousehover(4)}
                        onMouseLeave={() => mousehover(0)}
                    >
                        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                        <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-yellow-200 rounded-full" />
                    </div>

                    {/* ----------------------------popups-------------------------------------------- */}

                    {mouse && id === 1 && (
                        <div className="w-80 right-56 top-16  absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
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
                        <div className="w-80  left-32 top-32 mac:left-[160px] mac:top-[5px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
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
                        <div className="w-80  left-[140px] top-[155px] mac:left-[40px] mac:top-[155px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
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

                <div className="lg:min-w-[100%]  mac:min-w-[100%] h-full sam-full  sam2-[820px] lg:pl-[6rem] lg:p-0 ram-full  ram2-[820px] mac:pl-[4rem] mac:p-0 relative flex flex-col items-center justify-center gap-5 place-items-center">
                    <div className="h-full relative text-justify text-black dark:text-white text-sm mac:text-xs mac:leading-[20px] leading-[20px] lg:text-sm font-normal font-['Inter'] p-4 ">
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

                    <div className="w-full relative p-[1rem] flex items-center justify-end gap-6 lg:mt-3 ">
                        <div className="w-[122px] h-11 relative">
                            <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none "><Link to='/clients' >View More</Link></button>
                        </div>
                        <div className="w-[122px] h-11 relative">
                            <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none "><Link to='/clients' >View More</Link></button>
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
    )
}

export default DummyBranding;