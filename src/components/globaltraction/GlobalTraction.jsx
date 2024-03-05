import GlobaltractionCard from './GlobaltractionCard';

import data from './data.json';


function GlobalTraction(props) {

  return (
    <div className="w-full lg:h-[470px] flex-col  justify-between items-center relative" >

      <div className="relative w-full">
        <div className=" text-center text-black text-[2.3rem] lg:text-[64px] font-normal font-['Revelstoke'] lg:leading-[64px]">Global</div>
        <div className="ml-5 text-center text-amber-200 text-5xl lg:text-8xl font-normal font-['Heaven'] lg:leading-[64px]">Tractions</div>
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