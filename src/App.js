import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
// import { listTraineeCredits } from './graphql/queries';
// import {
//   createTraineeCredit,
//   updateTraineeCredit,
// } from "./graphql/mutations";
import { useAuthenticator } from '@aws-amplify/ui-react';
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

const client = generateClient();

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchTraineeCredits();
  }, []);

  async function fetchTraineeCredits() {
    try {
      // const apiData = await client.graphql({ query: listTraineeCredits });
      // const creditsFromAPI = apiData.data.listNotes.items;
      // console.log('User credit list', creditsFromAPI);
      // setCredits(creditsFromAPI);
    } catch (error) {
      console.log('error in fetching credits', error);
    }
  };

  async function awardCredit(event) {
    event.preventDefault();
    // const form = new FormData(event.target);
    // const data = {
    //   name: form.get("name"),
    //   description: form.get("description"),
    // };
    // await client.graphql({
    //   query: createTraineeCredit,
    //   variables: { input: data },
    // });
    // fetchTraineeCredits();
    // event.target.reset();
  };

  const { user, signOut } = useAuthenticator((context) => [context.user]);
  if (user) {
    return (
      <div className="my-div">
        <SiteNav collapsed={collapsed} handleCollapsedChange={handleCollapsedChange} logOut={signOut} />
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

  return <LandingPage />;
}

export default App;
