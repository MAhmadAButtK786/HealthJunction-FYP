import React from 'react';


import {Switch,Route} from 'react-router-dom'
import Contact from './Component/contact';
import Home from './Component/home';
import About from './Component/about';

function App() {
  return (
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
     
    
  );
}

export default App;
