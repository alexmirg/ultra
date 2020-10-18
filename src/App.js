import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './globalStyles'
import { Navbar, Footer, ScrollToTop } from './components'

import Home from './pages/Homepage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
