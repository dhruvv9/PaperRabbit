import React from 'react'
import CommonCards from '../articles_teams_content/CommonCards'
import CommonRows from '../articles_teams_content/CommonRows'
import BackBar from '../back/BackBar'



function ArticlesPage() {
    return (
        <div className='flex flex-col relative mt-[52px]'>
            <BackBar />
            <div className='w-screen h-full flex flex-col mt-20'>

                <div className='w-screen h-full flex flex-col gap-4 justify-center items-center'>
                    <CommonRows />
                    <CommonRows />

                </div>
            </div>
        </div>

    )
}

export default ArticlesPage