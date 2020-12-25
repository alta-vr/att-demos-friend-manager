import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home';
import LoggedIn from './Pages/LoggedIn';

import reportWebVitals from './utility/reportWebVitals';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from './AltaAuth';

import config from './config';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider config={config} autoSignIn>
        <BrowserRouter>
            <Switch>
                <Route path={'/logged-in'} component={LoggedIn}/>
                <Route component={Home}/>
            </Switch>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
