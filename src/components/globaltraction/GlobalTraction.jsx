import React, { useEffect, useRef, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer';
import GlobaltractionCard from './GlobaltractionCard';

import data from './data.json';


function GlobalTraction(props) {

  const [number, setNumber] = useState(0);
  const [isintersecting, setIsintersecting] = useState(false);

  const ref = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{ 
        setIsintersecting(entry.isIntersecting)
      },
    )

    observer.observe(ref.current);

    return ()=> observer.disconnect();
  },[]);


  useEffect(()=>{
    if(isintersecting){
      setInterval((number)=>{
        if(number < 100){
          setNumber(number+1)
        }
      },100);
      console.log(isintersecting);
    }
  },[isintersecting])

  //------------------------------------------------------------------ END OF INTERSECTION OBSERVER -------------------------------------------------------------

  const [counter, setCounter] = useState(0);
  let duration = 2

  useEffect(()=>{
    let start = 0;
    let end = 100;

    if(start === end ) return;

    let durations = (duration / end ) * 1000;

    let timer = setInterval(()=>{
      start=start + 1;
      setCounter(start);

      return ()=> clearInterval(timer);
    })
  },[isintersecting])

  // const [isinview, setIsinview] = useState(false);

  // const { ref, inview, entry } = useInView({
  //   threshold: 0,
  //   rootMargin : '5000px'
  // })

  // // setIsinview(inview)
  // if(inview){
  //   setIsinview(inview)
  // }

  // console.log(isinview);

  // useEffect(() => {
  //   setInterval((number) => {
  //     if (number < 1000) {
  //       setNumber(number + 1)
  //       console.log(number);
  //     }
  //   }, 200)
  // }, [isinview]);

  return (
    <div className="w-[1920px] h-[470px] flex justify-center items-center relative" ref={ref}>

      <div className="left-[1000px] top-[60px]  flex justify-center items-center absolute">
        <div className="left-0 top-[64px] absolute text-center text-amber-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Tractions</div>
        <div className="left-[49px] top-0 absolute text-center text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Global</div>
      </div>
      {/* <InView>
        {
          ({ ref, inview, entry }) =>
          ( */}
      <div className="w-[1212px] h-[155px] flex justify-center items-center  left-[600px] top-[238px] absolute" >
        <div className="w-[159px] h-[155px] left-0 top-0 absolute">
          <div className="left-[16px] top-0 absolute text-center text-red-200 text-[34px] font-normal font-['Revelstoke']">Projects</div>
          <div className="left-0 top-[54px] absolute text-center"> <GlobaltractionCard data ={data.json} />  </div>
        </div>
        <div className="w-[131px] h-[155px] left-[373px] top-0 absolute">
          <div className="left-0 top-0 absolute text-center text-emerald-200 text-[34px] font-normal font-['Revelstoke']">StartUps</div>
          <div className="left-0 top-[54px] absolute text-center"><span className="text-black text-[84px] font-normal font-['Revelstoke']">55</span><span className="text-emerald-200 text-[84px] font-normal font-['Revelstoke']">+</span></div>
        </div>
        <div className="w-[154px] h-[155px] left-[718px] top-0 absolute">
          <div className="left-0 top-0 absolute text-center text-sky-200 text-[34px] font-normal font-['Revelstoke']"> Countries</div>
          <div className="left-[16px] top-[54px] absolute text-center"><span className="text-black text-[84px] font-normal font-['Revelstoke']">07</span><span className="text-sky-200 text-[84px] font-normal font-['Revelstoke']">+</span></div>
        </div>
        <div className="w-[120px] h-[155px] left-[1092px] top-0 absolute">
          <div className="left-[20px] top-0 absolute text-center text-amber-200 text-[34px] font-normal font-['Revelstoke']">Years  </div>
          <div className="left-0 top-[54px] absolute text-center"><span className="text-black text-[84px] font-normal font-['Revelstoke']">16</span><span className="text-amber-200 text-[84px] font-normal font-['Revelstoke']">+</span></div>
        </div>
      </div>
      {/*     )
       }

       </InView> */}
    </div>
  )

}

export default GlobalTraction;