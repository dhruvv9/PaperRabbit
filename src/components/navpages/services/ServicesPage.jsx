import React from 'react'
import ServicesContent from './ServicesContent'
import ServicesContentReverse from './ServicesContentReverse'

function ServicesPage() {
    return (
        <div className='flex flex-col items-center justify-center gap-20 w-screen h-full' >
            <ServicesContent />
            <ServicesContentReverse />
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