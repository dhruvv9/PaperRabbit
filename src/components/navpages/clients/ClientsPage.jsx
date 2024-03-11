import React from 'react'
import ClientsContent from './ClientsContent'

function ClientsPage() {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-center'>
        <div className='lg:w-[88rem] w-screen grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 gap-5'>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        <ClientsContent/>
        </div>
    </div>
  )
}

export default ClientsPage