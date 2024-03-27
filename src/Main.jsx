import React from 'react'

import Aboutus from './components/aboutus/Aboutus';
import Article from './components/article/Article';
import Banner from './components/banner/Banner';
import Branding from './components/branding/Branding';
import Clients from './components/clients/Clients';
import GlobalTraction from './components/globaltraction/GlobalTraction';
import Insights from './components/insights/Insights';
import Portfolio from './components/portfolio/Portfolio';
import Review from './components/review/Review';
import Services from './components/services/Services';
import Workwithus from './components/workwithus/Workwithus';
// import ArticlesPage from './components/navpages/articles/ArticlesPage';
import Blog from './components/blog/Blog';
// import HutchPage from './components/navpages/hutch/HutchPage';
// import Casestudy from './components/navpages/casestudy/Casestudy';
import Hutchicons from './components/hutchicons/Hutchicons';
import Casestudy from './components/navpages/casestudy/Casestudy';
import TeamsPage from './components/navpages/teams/TeamsPage';
import Podcast from './components/podcast/Podcast';


function Main(props) {

    const {mode} = props;
    return (
        <>
            <Banner mode={mode}/>
            <Branding mode={mode} />
            <Hutchicons mode={mode} />
            <Services mode={mode} />
            <Clients mode={mode}/>
            <Portfolio />
            <GlobalTraction mode={mode}/>
            <Article />
            <Review mode={mode}/>
            <Insights />
            <Workwithus mode={mode}/>
            <Blog mode={mode}/>
            <Podcast/>
            <Aboutus />

{/* <Casestudy/> */}
            {/* <HutchPage mode={mode}/> */}

            {/* <ArticlesPage mode={mode}/> */}
            
            {/* <Casestudy mode={mode}/> */}

            {/* <TeamsPage/> */}
        </>
    )
}

export default Main