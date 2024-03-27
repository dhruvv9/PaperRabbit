import React from 'react'
import CommonRows from '../articles_teams_content/CommonRows'
import img1 from '../../../assets/teamsimg/img2.png'
import img2 from '../../../assets/teamsimg/img5.png'
import img3 from '../../../assets/teamsimg/img6.png'
import brand from '../../../assets/teamsimg/quote5.svg'


function TeamsPage() {

  const images = [img1,img2,img3,brand];

  return (
    <div className='w-full h-full flex flex-col mt-20'>

    <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
        <CommonRows images = {images} />
        <CommonRows images = {images} />
    </div>
</div>  
)
}

export default TeamsPage