import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion';


function GlobaltractionCard(props) {

  const {id, number, duration} = props.data;

  //--------------------------------------------------creating intersection observer------------------------------------------------------------

  const ref = useRef(null);

  const isInView = useInView(ref);
  const [ counter, setCounter] = useState(0);

  useEffect(()=>{
    let start = 0;
    const end = 100;

    if (start === end) return;

    let incrementtime = (duration / end) * 1000;

    let timer = setInterval(() => {
      start+=1
      setCounter(start);

      if(start === end) clearInterval(timer);

    },incrementtime)

  },[isInView, duration, number])

  //---------------------------------------------creating counter to count-------------------


  return (
    < div key={id} ref={ref} className='h-fit' >
      <span className="text-black dark:text-white text-[40px] lg:text-[84px] mac:text-[84px] font-normal font-['Revelstoke']">{ 1 }</span><span className="text-red-200 text-[40px] lg:text-[84px] mac:text-[84px] font-normal font-['Revelstoke']">+</span>
    </div>
  )
}

export default GlobaltractionCard;