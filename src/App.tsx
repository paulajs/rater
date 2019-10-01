import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Create } from './pages/Create';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Header></Header>
       <div className="view">
         <Route path="/" exact component={Home} />
         <Route path="/create" component={Create} />
       </div>
      </Router>
    </div>
  );
}

export default App;
