import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navigation from "./navigation/navigation-container";
import Crm from "./pages/crm";
import Home from "./pages/home";

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='app'>
          <Router>
        
            
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/crm" component={Crm} />
            </Switch>
            <Navigation />
            </Router>
      </div>
      
    
    );
  }
}
