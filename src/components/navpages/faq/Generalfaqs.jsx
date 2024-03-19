import React from 'react';
import Plus_jpg from '../../../assets/faqassets/Plus.jpg';


function Generalfaqs() {
  return (
    <div className='lg:w-[81rem] w-[25.375rem] mt-[5rem] lg:h-[38.125px]  justify-center items-center inline-flex relative'>
    <div className='self-stretch  flex-col justify-start items-start gap-5 inline-flex'>

        <div className="lg:w-[70rem] w-[23rem] h-[6rem]  relative bg-gray-50 bg-opacity-70 rounded-[0.624rem] backdrop-blur-[20px]" >
            <div className="lg:flex lg:justify-center lg:items-center p-4 text-black lg:text-base text-xs font-normal font-['Inter'] leading-normal">Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und perspiciatis unde omnis perspiciatis und?    <img className='plus  w-10 ml-[10rem] h-10 relative ' src={Plus_jpg} alt='' />


            </div>



        </div>
    </div>

</div>
  )
}

export default Generalfaqs


