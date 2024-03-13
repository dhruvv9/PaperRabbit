import React from "react"
import { Link } from "react-router-dom"

function BackBar() {
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            <div className="relative h-12 w-[45%] flex justify-between items-center">
            <div className="flex flex-col justify-between items-end h-full">
                <div className="flex justify-center items-center text-zinc-950 text-xl font-bold font-['Inter'] leading-[15px]">
                    Name
                </div>
                <div className="flex justify-center items-center text-black text-xs font-normal font-['Inter'] leading-none">
                    <Link to="/" >Home</Link>
                </div>
            </div>
            <div className="flex justify-center items-center text-xl font-bold font-['Inter'] leading-[15px]">
                <button className="text-white bg-black w-20 h-12 rounded-[10px]">Explore</button>
            </div>
        </div>
        </div>
    )
}

export default BackBar