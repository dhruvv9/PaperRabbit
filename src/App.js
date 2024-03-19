import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import ClientsPage from './components/navpages/clients/ClientsPage';
import ServicesPage from './components/navpages/services/ServicesPage';

import Main from "./Main";
import { useState } from "react";
import ArticlesPage from "./components/navpages/articles/ArticlesPage";
import TeamsPage from "./components/navpages/teams/TeamsPage";
import HutchPage from "./components/navpages/hutch/HutchPage";

function App() {
  const names = ['shyam', 'dhruv']

  const [mode, setMode] = useState(false);
  console.log(mode + "this is inside main");

  return (
    <div className={`${mode ? 'dark' : ''} dark:bg-black `}>
      <Router>
        <Header setMode={setMode} mode={mode} />
        <Routes>
          <Route path='/' element={<Main mode={mode} />} />
          <Route path='/services' element={<ServicesPage data={names} id={1} />} />
          <Route path='/clients' element={<ClientsPage />} />
          <Route path='/articles' element={<ArticlesPage/>} />
          <Route path='/teams' element={<TeamsPage/>} />
          <Route path='/hutch' element={<HutchPage/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
