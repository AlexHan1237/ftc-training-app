import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css'
import './styles.scss';

import SiteNav from './components/common/SiteNav';
import SiteBreadcrumbs from './components/common/SiteBreadcrumbs';
import SiteFooter from './components/common/SiteFooter';
import ContentBrowser from './components/common/ContentBrowser';
import LandingPage from './components/auth/LandingPage';

Amplify.configure(awsExports);

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 105000);
  }, []);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };


  if (!showSplashScreen) {
    return (
      <div className="my-div">
        <SiteNav collapsed={collapsed} handleCollapsedChange={handleCollapsedChange} />
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

  return <LandingPage setShowSplashScreen={setShowSplashScreen} />;
}

export default App;
