import React from 'react';
import data from './data/products'
import NavBar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Products products={data.products} />
      </div>
    </div>
  );
}

export default App;
