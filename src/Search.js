import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Film from './Film';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: '',
      image: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  getData = () => {
    axios(`http://www.omdbapi.com/?apikey=c17903f&t=${this.state.input}`)
      .then(r => { this.setState({ 
        data: r.data 
      }); 
      console.log(r); })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="searchForm" > 

        <input type="search" id="search" placeholder="Search for..." onChange={this.handleInputChange} />
        <button type="submit" onClick={this.getData}>Search</button>


        <Film title={this.state.data.Title} year={this.state.data.Year} />
      </div>
    );
  }
}

export default Search;
