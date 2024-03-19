import React from 'react'
import BackBar from '../back/BackBar';
import Casestudycontent from './Casestudycontent';
import CasestudyContentReverse from './CasestudyContentReverse';

function Casestudy() {
  return (
    <div className='flex flex-col relative mt-[52px]'>
    <BackBar name ='Services' />
    <div className='flex flex-col items-center justify-center gap-20 w-screen h-full mt-10' >
        <Casestudycontent  />
        <CasestudyContentReverse />
        <Casestudycontent />
        <CasestudyContentReverse />
        <Casestudycontent />
        <CasestudyContentReverse />
        <Casestudycontent />
        <CasestudyContentReverse />
    </div>
</div>
  )
}

export default Casestudy;