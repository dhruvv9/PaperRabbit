import React from 'react';
import Generalfaqs from './Generalfaqs';
import Faqlinks from './Faqlinks';

function Faq() {
    return (
        <div className="lg:w-full w-[27.375rem] md:w-[65rem] flex flex-col  items-center lg:h-[210.375rem] h-[350rem]  relative bg-neutral-100">
            <div className='general_faq lg:w-[81rem] w-[25.375rem]  mt-[10rem] justify-center item-center lg:h-[75.125rem] relative'>
                <div className=" flex justify-center items-center  relative text-black lg:text-[32px] font-bold font-['Inter'] leading-loose">
                    General FAQ</div>

                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />
                <Generalfaqs />

                <Faqlinks />


                <div className=" flex justify-center items-center mt-[48rem] relative text-black lg:text-[32px] font-bold font-['Inter'] leading-loose">
                    Industrial Faq</div>
                    <Generalfaqs />
                    <Generalfaqs />
                    <Generalfaqs />
                    <Generalfaqs />
                    <Generalfaqs />
                    <Generalfaqs />
                    <Generalfaqs />


                   

             






















            </div>

        </div>
    )
}

export default Faq