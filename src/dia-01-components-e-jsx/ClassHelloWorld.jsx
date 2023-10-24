/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class ClassHelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello World from a class component' };
  }

  render() {
    return <div><h1>{this.state.message}</h1></div>;
  }
}

export { ClassHelloWorld }