import React from 'react'
import ServicesContent from './ServicesContent'
import ServicesContentReverse from './ServicesContentReverse'

function ServicesPage({data}) {
    const [name1,name2] = data
    return (
        <div className='flex flex-col items-center justify-center gap-20 w-screen h-full mt-[80px]' >
            <ServicesContent name={name1} key={1}  />
            <ServicesContentReverse name={name2} key={2} />
            <ServicesContent />
            <ServicesContentReverse />
            <ServicesContent />
            <ServicesContentReverse />
            <ServicesContent />
            <ServicesContentReverse />
        </div>
    )
}

export default ServicesPage