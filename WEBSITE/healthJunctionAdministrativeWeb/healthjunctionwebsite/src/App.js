import React from 'react';


import {Switch,Route} from 'react-router-dom'
import Contact from './Component/aboutUs/contact';
import Home from './Component/homepage/home';
import Accordion from './Component/bloodbanks/FAQ/faq';
import Login from './Component/login';
import Register from './Component/register';
import bloodbank from './Component/bloodbanks/bbHome/bloodbank';
import Homecharity from './Component/charity/CharityHome/homecharity';
import LabsHome from './Component/lab/LabHome/LabHome';
import HealthPointHome from './Component/healthPoints/healthPointsHome/healthPointHome';
import Guidlines from './Component/healthPoints/our Guidlines/guidlines';
import Partner from './Component/charity/our Partner/partner';
function App() {
  return (
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path ="/healthPointHome" exact component={HealthPointHome}/>
          <Route path ="/guidlines" exact component={Guidlines}/>
          <Route path="/bloodbank" component ={bloodbank}/>
          <Route path="/faq" component={Accordion}/>
          <Route path="/homecharity" component={Homecharity}/>
          <Route path="/partner" component={Partner}/>
          <Route path="/LabHome" component={LabsHome}/>
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          
        </Switch>
     
    
  );
}

export default App;
