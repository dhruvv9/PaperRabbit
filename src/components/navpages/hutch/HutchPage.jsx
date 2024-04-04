import React from 'react'
import HutchPageCards from './HutchPageCards'
import HutchPageCards2 from './HutchPageCards2'

function HutchPage() {
    return (
        <div className='w-full flex flex-col items-center justify-center place-content'>
            <div className='lg:w-[74%] gap-8 items-center justify-center mac:w-[80%] w-full h-full grid lg:grid-cols-4 lg:grid-rows-2 mac:grid-cols-4 mac:grid-rows-4  grid-rows-4 grid-cols-2 '>
                <HutchPageCards/>
                <HutchPageCards2/>
                <HutchPageCards/>
                <HutchPageCards2/>
                <HutchPageCards/>
                <HutchPageCards2/>
                <HutchPageCards/>
                <HutchPageCards2/>
                <HutchPageCards/>
                <HutchPageCards2/>
                <HutchPageCards/>
                <HutchPageCards2/>
            </div>
        </div>
    )
}

export default HutchPage