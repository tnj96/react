import React, { Component } from 'react';
import './App.css';

class Image extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (

      <div>
        <p> {this.props.poster}</p>
      </div>


    );
  }
}

export default Image;
