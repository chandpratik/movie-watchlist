import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Watchlist } from './pages/Watchlist'
import { Watched } from './pages/Watched'
import { Add } from './pages/Add'

import { GlobalProvider } from './context/GlobalState'

import './App.css';

import './lib/font-awesome/css/all.min.css'



function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
