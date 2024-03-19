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
import ArticlesPage from './components/navpages/articles/ArticlesPage';
import Blog from './components/blog/Blog';
import HutchPage from './components/navpages/hutch/HutchPage';


function Main(props) {

    const {mode} = props;
    return (
        <>
            <Banner mode={mode}/>
            <Branding />
            <Services />
            <Clients />
            {/* <Portfolio /> */}
            <GlobalTraction />
            {/* <Article /> */}
            <Review />
            {/* <Insights /> */}
            {/* <Aboutus /> */}
            <Workwithus />
            <Blog/>
            {/* <HutchPage/> */}

            <ArticlesPage/>
        </>
    )
}

export default Main