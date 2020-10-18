import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import GlobalStyle from './globalStyles'
import { Navbar, Footer } from './components'

import Home from './pages/Homepage/Home'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exac component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
