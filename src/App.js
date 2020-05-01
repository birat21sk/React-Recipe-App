import React,{useState, useEffect} from 'react'; 
import './App.css'
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
   return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
