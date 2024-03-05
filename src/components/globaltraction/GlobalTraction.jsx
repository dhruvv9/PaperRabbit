import GlobaltractionCard from './GlobaltractionCard';

import data from './data.json';


function GlobalTraction(props) {

  return (
    <div className="w-full h-[470px] flex-col  justify-between items-center relative" >

      <div className="relative w-full">
        <div className=" text-center text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Global</div>
        <div className="ml-5 text-center text-amber-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Tractions</div>
      </div>

      <div className="flex justify-center items-center relative mt-[3.4rem]" >
        <div className="w-[159px] h-[155px] mx-[8rem]">
          <div className=" text-center text-red-200 text-[34px] font-normal font-['Revelstoke']">Projects</div>
          <div className=" text-center"> <GlobaltractionCard data={data} id={0} />  </div>
        </div>
        <div className="w-[131px] h-[155px] mx-[8rem]">
          <div className=" text-center text-emerald-200 text-[34px] font-normal font-['Revelstoke']">StartUps</div>
          <div className=" text-center"><GlobaltractionCard data={data} id={1} /> </div>
        </div>
        <div className="w-[154px] h-[155px] mx-[8rem]">
          <div className="text-center text-sky-200 text-[34px] font-normal font-['Revelstoke']"> Countries</div>
          <div className=" text-center"><GlobaltractionCard data={data} id={2} /> </div>
        </div>
        <div className="w-[120px] h-[155px] mx-[8rem]">
          <div className=" text-center text-amber-200 text-[34px] font-normal font-['Revelstoke']">Years  </div>
          <div className=" text-center"><GlobaltractionCard data={data} id={3} /> </div>
        </div>
      </div>

    </div>
  )

}

export default GlobalTraction;