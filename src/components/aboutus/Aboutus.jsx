 import React from 'react'
import pic1 from "../../assets/aboutuspngs/aboutus1.png";
import pic2 from "../../assets/aboutuspngs/aboutus2.png"
import pic3 from "../../assets/aboutuspngs/aboutus3.png"
import pic4 from "../../assets/aboutuspngs/aboutus4.png"
import pic5 from "../../assets/aboutuspngs/aboutus5.png"
import aboutuslogo from "../../assets/aboutuspngs/aboutuslogo.svg"

function Aboutus() {
    return (
        <div class="flex justify-center items-center mx-auto ml-80 my-70 p-74">
            <div class="w-[1920px] h-[842px] relative mx-4 my-8 p-4 mb-56">

                <div className="w-[696px] left-[400px] top-[176px]  absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <div className="w-[220px] h-60 left-[333px] top-[344px] absolute text-center text-black text-sm font-normal font-['Inter'] leading-normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br /><br />_ DARSHAN PRAKASH</div>
                <div className="w-[210px] h-[226px] left-[819px] top-[344px] absolute text-center text-black text-sm font-normal font-['Inter'] leading-normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />_ DISHTI</div>
                <div className="w-[696px] left-[333px] top-[600px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <img className="w-[286px] h-[220px] left-0 top-[491px] absolute rounded-[10px]" src={pic3} alt='pic3' />
                <img className="w-[150px] h-[115.38px] left-[1076px] top-[445px] absolute rounded-md" src={pic4} alt='pic4' />
                <img className="w-[213.83px] h-[200px] left-[48px] top-[120px] absolute rounded-[10px]" src={pic1} alt='pic1' />
                <img className="w-[123px] h-[123px] left-[1218px] top-[672px] absolute rounded" src={pic5} alt='pic5' />
                <img className="w-[200px] h-[200px] left-[1150px] top-[141px] absolute rounded-[10px]" src={pic2} alt='pic2' />
                <div className="w-[369px] h-24 left-[485px]  top-0 absolute">
                    <div className="left-0 top-[32px] absolute text-red-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Advertising</div>
                    <div className="left-[100px] top-0 absolute text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">ABOUT US</div>
                </div>
                <div className="w-[120px] h-10 pl-[26px] pr-[27px] py-[5px] left-[609px] top-[775px] absolute bg-zinc-950 rounded-[10px] justify-center items-center inline-flex">
                    <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                        <div className="text-white text-sm font-bold font-['Inter'] leading-[30px]">More</div>
                    </div>
                </div>
                <div className="w-[200px] h-[200px] left-[586px] top-[360px] absolute justify-start items-center inline-flex">
                    <div className="w-[220px] h-[220px] relative flex-col justify-start items-start flex">
                        <div className="w-[220px] h-[220px] relative">
                            <div className="w-[142.58px] h-[179.56px] left-[38.71px] top-[20.22px] absolute">

                                <img className="logoimg" src={aboutuslogo} alt='logo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Aboutus;