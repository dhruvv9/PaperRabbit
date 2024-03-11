import React from "react"
import clientimg from "../../../assets/clients/clientspage/img.png"
import link from "../../../assets/clients/clientspage/link.png"

function ClientsContent() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center lg:p-0 p-2 lg:mb-20">
            <div>
                <img className="w-[21rem] lg:h-[21rem]  h-[15rem] rounded-[20px]" src={clientimg} alt="clientsimage" />
            </div>
            <div className="w-full flex flex-col items-center justify-center" >
                <div className="flex items-center justify-center gap-3">
                    <div>
                        <img className="w-[2rem] h-[2rem] " src={link} alt="clientsimage" />
                    </div>
                    <div className="flex items-center justify-center text-black g:text-[2rem] text-[1.5rem] font-normal font-['Katibeh'] leading-10">
                        Name of the company
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-black lg:text-[2rem] text-[1.5rem] font-normal font-['Katibeh'] leading-loose">
                    Domain - Lorum Ipsum
                </div>
                <div className="flex flex-col items-center justify-center text-black lg:text-[2rem] text-[1.5rem] font-normal font-['Katibeh'] leading-loose">
                    Industry - Lorum Ipsum
                </div>
            </div>
        </div>
    )
}

export default ClientsContent