import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Store from './components/Store';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
      <Nav />
           <Route exact path="/" component={Home} />
           <Route path="/store/:id?" component={Store} />
      </div>      
      </BrowserRouter>   
    );    
  }

  
}

export default App;
