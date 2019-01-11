import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Products />
         
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Products />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
