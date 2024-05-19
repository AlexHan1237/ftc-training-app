import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/common/SiteNav';
import SiteBreadcrumbs from './components/common/SiteBreadcrumbs.js';
import SiteFooter from './components/common/SiteFooter';
import ContentBrowser from './components/common/ContentBrowser.js';


import './styles.scss';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };


  return (
    <div className="my-div">
        <SiteNav collapsed={collapsed}
          handleCollapsedChange={handleCollapsedChange} />
        {/* <SiteNav2 /> */}
        {/* <div className={`app ${toggled ? 'toggled' : ''}`}> */}
        <div className={`app ${''}`}>
          <ContentBrowser
            collapsed={collapsed}
          />
          <main style={{ height: "100vh" }}>
            <>
            <SiteBreadcrumbs />
            <Outlet />
            <SiteFooter />
            </>
          </main>
        </div>
    </div>
  );
}

export default App;
