import React, { Component } from 'react';

class Film extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

      <div>
        <p>{this.props.title} </p>
        <p>{this.props.year}</p>
      </div>
    

    );
  }
}

export default Film;
