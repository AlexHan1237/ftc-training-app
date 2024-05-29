import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import App from './App';
import { SiteMap } from './SiteMap';
import SiteMapContext from './SiteMapContext.js';

import Homepage from './components/home/HomePage';

//import { Authenticator } from "@aws-amplify/ui-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SiteMapContext.Provider value={SiteMap}>
        {/* <Authenticator.Provider> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        return (
                        <Route path='home' element={<Homepage />} />
                        <Route path='/' element={<Homepage />} />

                        {SiteMap.chapters.map((chapterObj) => {
                            return (
                                chapterObj.sections.map((sectionObj) => {
                                    let DynamicComponent = require('./pages/' + sectionObj.Page).default;
                                    return (<Route path={sectionObj.Link} element={<DynamicComponent />} />);
                                }));
                        })});
                    </Route>
                </Routes>
            </BrowserRouter>
        {/* </Authenticator.Provider> */}
    </SiteMapContext.Provider>
);

