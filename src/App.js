import React, { Component } from 'react';
import { Button } from 'reactstrap';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
       <center> <Counter nama="Counter :)" /></center>
      </div>
    ) 
}
}

export default App;

class Counter extends Component {
  state = {
    number: 0
  };

  naik = () => {
    console.log('naik,naik');
    this.setState({
      number: this.state.number + 1
    });
  };

  turun = () => {
    console.log('naik,naik');
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h2>{this.state.number}</h2>
        <Button color="success" onClick={this.naik}>naik</Button><br/><br/>
        <Button color="danger" onClick={this.turun}>turun</Button>
      </div>
    );
  }
}
