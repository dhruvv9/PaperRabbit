import React from 'react'
import image from "../../../assets/articalimgs/artical1.jpg"

function CommonCards(props) {
  const [img1, img2, img3, brand] = props.images;
  return (
    <div>
        <img class="lg:w-[220px] lg:h-[220px] mac:w-[220px] mac:h-[220px] w-[194px] h-[194px] rounded-[20px]" src={img3} alt='image1' />
    </div>
  )
}

export default CommonCards