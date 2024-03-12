import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import ClientsPage from './components/navpages/clients/ClientsPage';
import ServicesPage from './components/navpages/services/ServicesPage';

import Main from "./Main";
import { useState } from "react";

function App() {
  const names = ['shyam', 'dhruv']

  const [mode, setMode] = useState(false);
  console.log(mode + "this is inside main");

  return (
    <div className={`${mode ? 'dark' : ''}`}>
      <Router>
        <Header setMode={setMode} mode={mode} />
        <Routes>
          <Route path='/' element={<Main mode={mode} />} />
          <Route path='/services' element={<ServicesPage data={names} id={1} />} />
          <Route path='/clients' element={<ClientsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
