
import Aboutus from './components/aboutus/Aboutus';
import Article from './components/article/Article';
import Banner from './components/banner/Banner';
import Branding from './components/branding/Branding';
import Clients from './components/clients/Clients';
import Footer from './components/footer/Footer';
import GlobalTraction from './components/globaltraction/GlobalTraction';
import Header from './components/header/Header';
import Insights from './components/insights/Insights';
import Portfolio from './components/portfolio/Portfolio';
import Review from './components/review/Review';
import Services from './components/services/Services';
import Workwithus from './components/workwithus/Workwithus';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Services/>
      <Clients/>
      <Portfolio/>
      <GlobalTraction/>
      <Article/>
      <Review/>
      <Insights/>
      <Aboutus/>
      <Workwithus/>
      <Footer/>
    </div>
  );
}

export default App;
