import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BeforeHome from './BeforeHome';
import App from './App';
import Home from './Home';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Link,Route,Switch, withRouter} from 'react-router-dom';
import Home1 from "./Home1";
import history from './services/history';
import AudioMap from './AudioMap'

ReactDOM.render(
  <BrowserRouter history={history}>
   
   <Home/>
  
    <div>
    <Switch>
    <Route exact path="/home1" component={Home1} />
    <Route path="/app" component={App} />
    <Route path="/audiomap" component={AudioMap} />
    </Switch>    
    </div>
     
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<Home/>