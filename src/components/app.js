import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navigation from "./navigation/navigation-container";
import Crm from "./pages/crm";
import Home from "./pages/home";
// import Forms from "./form/input-forms";

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='app'>
        
          <Router>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/crm" component={Crm} />
            </Switch>
           
            
            </Router>
      </div>
      
    
    );
  }
}
