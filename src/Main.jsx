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


function Main() {
    return (
        <>
            <Banner />
            <Branding />
            <Services />
            <Clients />
            <Portfolio />
            <GlobalTraction />
            <Article />
            <Review />
            <Insights />
            <Aboutus />
            <Workwithus />
        </>
    )
}

export default Main