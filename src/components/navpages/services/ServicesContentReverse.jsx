import React from 'react'
import servicesImage from "../../../assets/services/servicesPage/img.png"

function ServicesContentReverse() {
  return (
    <div className="lg:w-[88rem] w-screen h-full flex lg:flex-row-reverse flex-col justify-center items-center lg:p-0 p-3" >
    <div className="" >
        <img className="w-[43rem] h-[31rem] rounded-[20px]" src={servicesImage} alt="services" />
    </div>

    <div className="lg:w-[50%] lg:h-[31rem] w-full h-full flex flex-col items-center justify-start gap-5 mr-[1.2rem] " >
        <div className="flex flex-col items-center justify-center text-black text-2xl font-bold font-['Inter'] leading-normal ">
            Lorem, ipsum.123
        </div>
        <div className="flex flex-col items-center justify-center text-black text-xs font-bold font-['Inter'] leading-3">
            Lorem ipsum dolor sit amet.
        </div>
        <div className="flex flex-col items-center justify-center text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  </div>
        <div className="w-full flex items-center justify-evenly">
            <div className="h-full gap-3 flex flex-col items-center justify-between text-black lg:text-s text-sm font-bold font-['Inter'] leading-3">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
            </div>
            <div className="h-full gap-3 flex flex-col items-center justify-between text-black lg:text-s text-sm font-bold font-['Inter'] leading-3">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet.</a>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            Lorem.
        </div>
    </div>
</div>  )
}

export default ServicesContentReverse