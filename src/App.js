import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/common/SiteNav';
import SiteNav2 from './components/common/SiteNav2';
import SiteFooter from './components/common/SiteFooter';

import Homepage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import SiteMapContext from './SiteMapContext.js';

function App() {
  const [SiteMap, setSiteMap] = useState(null);
  
  useEffect(() => {
    fetch('/sitemap/SiteMap.json')
      .then(response => response.json())
      .then(data => setSiteMap(data));
  }, []);




  return (
    <div className="my-div">
    <SiteMapContext.Provider value={SiteMap}>
      <SiteNav />
      <SiteNav2/>
      <Routes>
        <Route path='*' element={<Homepage />} />
        <Route paht='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <SiteFooter />
    </SiteMapContext.Provider>
    </div>
  );
}

export default App;
