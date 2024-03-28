import React from 'react'
import client1 from '../../assets/clients/agora.png'
import client2 from '../../assets/clients/edgefitness.png'
import client3 from '../../assets/clients/clicktocarrer.png'
import client4 from '../../assets/clients/pint.png'
import client5 from '../../assets/clients/violetpetal.png'
import client6 from '../../assets/clients/theara.png'
import client7 from '../../assets/clients/profunda.png'
import client8 from '../../assets/clients/biere.png'
// import client9 from '../../assets/clients/darkrobber.png'
// import client10 from '../../assets/clients/Aiyaana_Final_Logo_10_oct_2019 1.png'
// import client11 from '../../assets/clients/arvind.png'
// import client12 from '../../assets/clients/purple.png'
import { Link } from 'react-router-dom'

function Clients() {
    return (
        <div className="w-full lg:h-full relative flex flex-col items-center justify-center gap-10 mt-10 lg:mt-20">

            <div className="w-full h-full relative flex flex-col justify-center items-center">
                <div class="w-[24rem] h-[6rem] relative content-center">
                    <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">Clients</div>
                    <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">Our</div>
                </div>
            </div>

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                class="w-[100%] h-[220px] lg:w-[55%] mac:w-[70%] lg:mt-20 relative inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" class="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right">
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
                <ul x-ref="logos" class=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right">
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

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                class="w-[100%] h-[220px] lg:w-[55%] mac:w-[74%] relative inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" class="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left">
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
                <ul x-ref="logos" class=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left">
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
                <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none "><Link to='/clients' >View More</Link></button>
            </div>

        </div>
    )
}

export default Clients

