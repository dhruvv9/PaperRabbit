import React from "react"
import { Link } from "react-router-dom"
import backarrow from '../../../assets/headerimg/Vector.png'

function BackBar(props) {
    const name = props.name;
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            <div className="relative h-12 lg:w-[45%] w-full flex justify-between items-center mx-10">
            <div className="flex flex-col justify-center gap-4 items-end h-full">
                <div className="flex justify-center items-center text-zinc-950 text-xl font-bold font-['Inter'] leading-[15px]">
                    {name}
                </div>
                <div className="w-full flex justify-start items-center gap-1 text-black text-xs font-normal font-['Inter'] leading-none">
                    <div>
                        <img className="w-2 h-2" src={backarrow} alt="" />
                    </div>
                    <Link to="/" >Home</Link>
                </div>
            </div>
            <div className="flex justify-center items-center  font-bold font-['Inter'] leading-[15px]">
                <button className="text-white bg-black w-20 h-12 text-base rounded-[10px]">Explore</button>
            </div>
        </div>
        </div>
    )
}

export default BackBar