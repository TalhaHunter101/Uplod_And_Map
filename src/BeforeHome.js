import React, { Component } from 'react';
import {BrowserRouter, Link,Route,Switch, withRouter} from 'react-router-dom';
import Home from "./Home";
import App from "./App";
import Home1 from "./Home1";
//<Route exact path = "/" component = {Home}   />
class BeforeHome extends Component
{

    render(){

return (

<BrowserRouter>   
<div>
<Switch>
    
    <Home/>
    
    <Route exact path="/home1" component={withRouter(Home1)} />
    <Route path="/app" component={App} />
    </Switch>    
</div>
</BrowserRouter>  

);
    }
}

export default BeforeHome;
