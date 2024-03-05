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
        <div className="w-full h-[940px] relative flex flex-col items-center justify-start gap-10 mt-[50px] ">

            <div className="flex-col items-center justify-center relative mt-[96px] ">
                <div className="relative text-center text-zinc-950 text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Our</div>
                <div className="relative text-center text-sky-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Clientele</div>
            </div>

            <div className="w-[1420px] grid lg:grid-cols-6 md:grid-cols-3 md:grid-rows-4 lg:grid-rows-2 relative gap-5">
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[135px] h-[53px] " src={client1  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[95px] h-[61px] " src={client2  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[76px] h-[110px] " src={client3  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[106px] h-[117px] " src={client4  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[145px] h-[134px] " src={client5  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className="flex items-center justify-center w-[220px] h-[220px]" /> */}
                    <img className="w-[149px] h-[55px] " src={client6  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[119px] h-[117px] " src={client7  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[139px] h-[76px] " src={client8  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[168px] h-[84px] " src={client9  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[105px] h-[105px] " src={client10  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[149px] h-[55px] " src={client11  } />
                </div>
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                    {/* <div className=" left-0 top-0 absolute" /> */}
                    <img className="w-[209px] h-[81px] " src={client12  } />
                </div>
            </div>

            <div className="w-[122px] h-11 relative">
                <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-sm font-normal font-['Inter'] leading-none ">View More</button>
            </div>

        </div>
    )
}

export default Clients