import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import SearchForm from './SearchForm';

class App extends Component {
  render() {
    return (

      <div>
        {/* <div className="Working">
          <h2>Working Search</h2>
          <Search/>
        </div> */}
      
      <div className="testing">
        <h2>Testing with Form</h2>
        <SearchForm/>
      </div>
      </div>

    );
  }
}

export default App;
