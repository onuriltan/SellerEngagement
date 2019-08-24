import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Products from './components/Products'
import Product from './components/Product'

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/product/:id' component={Product} />
          <Route path='*' exact={true} component={Products} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
