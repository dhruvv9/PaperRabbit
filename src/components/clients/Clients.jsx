import React from 'react'
import client1 from '../../assets/clients/agora.png'
import client2 from '../../assets/clients/edgefitness.png'
import client3 from '../../assets/clients/clicktocarrer.png'
import client4 from '../../assets/clients/pint.png'
import client5 from '../../assets/clients/violetpetal.png'
import client6 from '../../assets/clients/theara.png'
import client7 from '../../assets/clients/profunda.png'
import client8 from '../../assets/clients/biere.png'
import client9 from '../../assets/clients/darkrobber.png'
import client10 from '../../assets/clients/Aiyaana_Final_Logo_10_oct_2019 1.png'
import client11 from '../../assets/clients/arvind.png'
import client12 from '../../assets/clients/purple.png'

function Clients() {
    return (
        <div className="w-full lg:h-full relative flex flex-col items-center justify-center gap-10 mt-10 lg:mt-20">

            <div className="w-full h-full relative flex flex-col justify-center items-center">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Clients</div>
                    <div class="w-full left-0 top-0 absolute text-black lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Our</div>
                </div>
            </div>

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                class="w-screen h-[420px] lg:w-[55%] relative  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" class="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li className='group/items' >
                        <img className="w-[135px] h-[53px] " src={client1} alt="client1" />
                    </li>
                    <li>
                        <img src={client2} alt="client2" />
                    </li>
                    <li>
                        <img src={client3} alt="client3" />
                    </li>
                    <li>
                        <img src={client4} alt="client4" />
                    </li>
                    <li>
                        <img src={client5} alt="client5" />
                    </li>
                    <li>
                        <img src={client6} alt="client6" />
                    </li>
                    <li>
                        <img src={client7} alt="client7" />
                    </li>
                    <li>
                        <img src={client8} alt="client8" />
                    </li>
                </ul>
                <ul x-ref="logos" class=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img className="w-[135px] h-[53px] " src={client1} alt="client1" />
                    </li>
                    <li>
                        <img src={client2} alt="client2" />
                    </li>
                    <li>
                        <img src={client3} alt="client3" />
                    </li>
                    <li>
                        <img src={client4} alt="client4" />
                    </li>
                    <li>
                        <img src={client5} alt="client5" />
                    </li>
                    <li>
                        <img src={client6} alt="client6" />
                    </li>
                    <li>
                        <img src={client7} alt="client7" />
                    </li>
                    <li>
                        <img src={client8} alt="client8" />
                    </li>
                </ul>
            </div>


            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>

        </div>
    )
}

export default Clients


{/* 

<div className="w-screen lg:w-[1420px] lg:mx-auto place-items-center grid grid-cols-2 grid-rows-6   lg:grid-cols-6 md:grid-cols-3 md:grid-rows-4 lg:grid-rows-2 relative lg:gap-5">
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[135px] h-[53px] " src={client1} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[95px] h-[61px] " src={client2} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[76px] h-[110px] " src={client3} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[106px] h-[117px] " src={client4} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[145px] h-[134px] " src={client5} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[149px] h-[55px] " src={client6} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[119px] h-[117px] " src={client7} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[139px] h-[76px] " src={client8} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[168px] h-[84px] " src={client9} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[105px] h-[105px] " src={client10} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[149px] h-[55px] " src={client11} />
                </div>
                <div className="flex items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px]">
                    <img className="w-[209px] h-[81px] " src={client12} />
                </div>
            </div> 
        
        */}
