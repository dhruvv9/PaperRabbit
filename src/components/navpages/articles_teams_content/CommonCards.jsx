import React from 'react'
import image from "../../../assets/articalimgs/artical1.jpg"

function CommonCards() {
  return (
    <div>
        <img class="lg:w-[220px] lg:h-[220px] w-[194px] h-[194px] rounded-[20px]" src={image} alt='image1' />
    </div>
  )
}

export default CommonCards