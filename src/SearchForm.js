import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Film from './Film';
import Image from './Image';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: ''
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
        data: r.data }); 
      console.log(r); })
      .catch(e => console.log(e));
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.setState({
      input: e.target.value
    });

  }
  
  getImage = () => {
    axios(`http://img.omdbapi.com/?apikey=c17903f&t&=${this.state.input}`)
    .then(r => {this.setState({
      image: r.data
    })

    })
  }

  render() {
    return (
      <div className="searchForm" onSubmit={this.handleSubmit}>
      
      <form>
        <input type="text" id="search" placeholder="Search for..." onChange={this.handleInputChange} />
        <button type="submit" onClick={this.getImage}>Search</button>
      </form>


        <Film title={this.state.data.Title} year={this.state.data.Year} />
        <Image image={this.state.data.Poster}/>
      </div>
    );
  }
}

export default SearchForm;


// https://stackoverflow.com/questions/51726391/how-to-create-a-search-field-in-reactjs