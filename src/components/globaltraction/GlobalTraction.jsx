import GlobaltractionCard from './GlobaltractionCard';

import data from './data.json';


function GlobalTraction(props) {

  return (
    <div className="lg:w-[1420px] w-full lg:mx-auto lg:h-[470px] flex-col  justify-between items-center relative mt-20" >

<div className="w-full  relative flex flex-col justify-center items-center">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Traction</div>
                    <div class="w-full left-0 top-0 absolute text-black lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Global</div>
                </div>
            </div>

      <div className="lg:flex w-full h-full place-items-center grid grid-cols-2 grid-rows-2 lg:justify-center lg:items-center relative " >
        <div className="relative flex flex-col items-center justify-center w-[159px] h-[155px] lg:mx-[8rem]">
          <div className=" text-center text-red-200 text-xl lg:text-[34px] font-normal font-['Revelstoke']">Projects</div>
          <div className=" text-center"> <GlobaltractionCard data={data} id={0} />  </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[131px] h-[155px] lg:mx-[8rem]">
          <div className=" text-center text-emerald-200 text-xl lg:text-[34px] font-normal font-['Revelstoke']">StartUps</div>
          <div className=" text-center"><GlobaltractionCard data={data} id={1} /> </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[154px] h-[155px] lg:mx-[8rem]">
          <div className="text-center text-sky-200 text-xl lg:text-[34px] font-normal font-['Revelstoke']"> Countries</div>
          <div className=" text-center"><GlobaltractionCard data={data} id={2} /> </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[120px] h-[155px] lg:mx-[8rem]">
          <div className=" text-center text-amber-200 text-xl lg:text-[34px] font-normal font-['Revelstoke']">Years  </div>
          <div className=" text-center"><GlobaltractionCard data={data} id={3} /> </div>
        </div>
      </div>

    </div>
  )

}

export default GlobalTraction;