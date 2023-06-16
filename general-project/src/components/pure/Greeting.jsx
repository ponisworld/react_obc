import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 22,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>You're {this.state.age} years old </h2>
      </div>
    );
  }
}

Greeting.propTypes = {};

export default Greeting;
