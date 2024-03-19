import React from 'react'
import { useEffect, useRef, useState } from 'react'
//comment to check commit

function GlobaltractionCard({ data, id }) {

  // console.log(data.counts[id]);
  const { duration, number } = data.counts[id];

  //--------------------------------------------------creating intersection observer------------------------------------------------------------

  const [num, setNum] = useState(0);
  const [isintersecting, setIsintersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry); //needs to be destructured as it gives a array
        setIsintersecting(entry.isIntersecting)
      },
    )

    observer.observe(ref.current);

    return () => observer.disconnect(); //cleanup 

  }, []);

  //---------------------------------------------creating counter to count-------------------


  const [counter, setCounter] = useState(0);
  let startcounter = false;

  if(isintersecting){
    startcounter = isintersecting;
  }

  useEffect(() => {
    let start = 0;
    let end = number;

    if (start === end) return;

    let incrementtime = (duration / end) * 1000;

    let timer = setInterval(() => {
      start+=1
      setCounter(start);

      if(start == end) clearInterval(timer);

    },incrementtime)

  }, [number, duration,startcounter])

  return (
    < div key={id} ref={ref} className='h-fit' >
      <span className="text-black dark:text-white text-[40px] lg:text-[84px] font-normal font-['Revelstoke']">{ counter }</span><span className="text-red-200 text-[40px] lg:text-[84px] font-normal font-['Revelstoke']">+</span>
    </div>
  )
}

export default GlobaltractionCard;