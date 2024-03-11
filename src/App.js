import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import ClientsPage from './components/navpages/clients/ClientsPage';
import ServicesPage from './components/navpages/services/ServicesPage';

import Main from "./Main";

function App() {
  return (
    <div>

      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Main/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/clients' element={<ClientsPage/>} />
        </Routes>
        <Footer/>
      </Router>

{/* 
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
      <Workwithus/> */}


    </div>
  );
}

export default App;
