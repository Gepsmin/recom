
import React from 'react';
import Home from "./components/Home";
import Me from './components/Me';
import Size from './components/Size';
import Tshirt from './components/outfit/Tshirt';
import './css/base.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => { 
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Home} exact></Route>
        <Route path={"/me"} component={Me} exact></Route>
        <Route path={"/size"} component={Size} exact></Route>
        <Route path={"/me/tshirt"} component={Tshirt} exact></Route>
        <Route path={"/me/coat"} component={Size} exact></Route>
        <Route path={"/me/bra"} component={Size} exact></Route>
        <Route path={"/me/skirt"} component={Size} exact></Route>
        <Route path={"/me/hat"} component={Size} exact></Route>
        
      </Switch>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
    </Router>
    
  );
}

export default App;
