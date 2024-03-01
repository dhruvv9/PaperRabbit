import React from 'react'
import main from "../../assets/bannerimgs/bannerimg1.jpg";
import { useState } from 'react';
import main3 from '../../assets/bannerimgs/main3.jpg'
import main4 from '../../assets/bannerimgs/main4.jpg';
import main5 from '../../assets/bannerimgs/main5.jpg';
import main6 from '../../assets/bannerimgs/main6.jpg';
import arrowleft from '../../assets/bannerimgs/Arrow---Left-2.jpg';
import arrowright from '../../assets/bannerimgs/Arrow---Right-2.jpg';


function Banner() {

    const images = [main, main3, main4, main5, main6]
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigateNext = () => {
        setCurrentIndex((preIndex) => (preIndex === images.length - 1 ? 0 : preIndex + 1));
    };
    const navigatePrevious = () => {
        setCurrentIndex((preIndex) => (preIndex === 0 ? images.length - 1 : preIndex - 1));
    }


    return (
        <div className="flex items-center justify-center   z-10">
            <div className="w-[1920px] h-[1080px] pt-16 relative z-0">
                <div className="w-[1920px] h-[1080px] left-[-6px] top-[16px] absolute z-10">
                    <img className="w-[1920px] h-[1080px] left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[416px] bg-white bg-opacity-5 rounded-[20px] backdrop-blur-2xl" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                        <div className="w-[122px] h-11 bg-zinc-950 rounded-[10px]" />
                                                    <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>

                    <button onClick={navigatePrevious}>
                        <img className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
                    </button>
                    <button onClick={navigateNext} >
                        <img className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    </button>

                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div>
                {/* <div className="w-[1920px] h-[1080px] left-[-6px] top-0 absolute">
                    <img className="w-[1920px] h-[1080px]  left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[415px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px]" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                            <div className="w-[122px] h-11 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />
                            <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>
                    <button onClick={navigatePrevious} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
                    <button onClick={navigateNext} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="w-[1920px] h-[1080px] left-[-6px] top-0 absolute">
                    <img className="w-[1920px] h-[1080px]  left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[415px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px]" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                            <div className="w-[122px] h-11 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />
                            <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>
                    <button onClick={navigatePrevious} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
                    <button onClick={navigateNext} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="w-[1920px] h-[1080px] left-[-6px] top-0 absolute">
                    <img className="w-[1920px] h-[1080px]  left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[415px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px]" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                            <div className="w-[122px] h-11 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />
                            <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>
                    <button onClick={navigatePrevious} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
                    <button onClick={navigateNext} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="w-[1920px] h-[1080px] left-[-6px] top-0 absolute">
                    <img className="w-[1920px] h-[1080px]  left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[415px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px]" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                            <div className="w-[122px] h-11 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />
                            <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>
                    <button onClick={navigatePrevious} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
                    <button onClick={navigateNext} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="w-[1920px] h-[1080px] left-[-6px] top-0 absolute">
                    <img className="w-[1920px] h-[1080px]  left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[415px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px]" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                            <div className="w-[122px] h-11 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />
                            <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>
                    <button onClick={navigatePrevious} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex" src={arrowleft} alt='' />
                    <button onClick={navigateNext} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="w-[1920px] h-[1080px] left-[-6px] top-0 absolute">
                    <img className="w-[1920px] h-[1080px]  left-0 top-0 absolute" src={images[currentIndex]} alt='' />
                    <div className="w-[646px] h-[415px] left-[1024px] top-[565px] absolute">
                        <div className="w-[646px] h-[415px] left-0 top-0 absolute bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px]" />
                        <div className="left-[30px] top-[185px] absolute text-justify text-black text-[15px] font-normal font-['Inter'] leading-normal">We are barnd enthusiasts. We are storyteller. We are a full service creative agency <br />Combining strategic thinking and sharp design to build great brands in this cut-<br />throat business competition.</div>
                        <div className="left-[248px] top-[81px] absolute text-justify text-black text-8xl font-normal font-['Revelstoke'] leading-[64px]">Creative!</div>
                        <div className="w-[340px] h-[31px] left-[265px] top-[30px] absolute text-justify text-black text-[64px] font-normal font-['Katibeh'] leading-[64px]">What Makes You</div>
                        <div className="left-[200px] top-[287px] absolute text-justify text-black text-5xl font-normal font-['Heaven'] leading-normal"># What makes you creative</div>
                        <div className="w-[122px] h-11 left-[494px] top-[341px] absolute">
                            <div className="w-[122px] h-11 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />
                            <div className="left-[14px] top-[14px] absolute text-justify text-neutral-100 text-sm font-normal font-['Inter'] leading-none">Let’s Make Art</div>
                        </div>
                    </div>
                    <button onClick={navigatePrevious} >
                        <img className='className="w-[72px] h-[72px] px-[21px] py-[18px] left-[178px] top-[504px] absolute justify-center items-center inline-flex' src={arrowleft} alt='' />

                    </button>
                    <button onClick={navigateNext} className="w-[72px] h-[72px] px-[21px] py-[18px] left-[1670px] top-[504px] absolute justify-center items-center inline-flex" src={arrowright} alt='' />
                    <div className="w-[126px] left-[897px] top-[1044px] absolute">
                        <div className="w-1.5 h-1.5 left-[20px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[30px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[40px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[50px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[60px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[70px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[80px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[90px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[110px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[100px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[120px] top-[5px] absolute bg-zinc-500 rounded-full" />
                        <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-4 h-4 opacity-60 rounded-full" />
                            <div className="w-3 h-3 bg-zinc-950 rounded-full" />
                        </div>
                    </div>
                </div> */}

            </div>
        </div>)
}

export default Banner;