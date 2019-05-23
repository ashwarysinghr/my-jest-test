import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car';
import * as actions from './actions';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const { handleCarStart, isRunning } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {isRunning ? 'The car is running  ' : 'Click to start the car'}
        </p>
        <Car color='blue' handleCarStart={handleCarStart} />
      </div>
    );
  }
}

App.defaultProps = {
  isRunning: false,
  handleCarStart: () => {
    console.log('car started');
  }
}

const mapStateToProps = (state) => ({
  isRunning: state.isRunning
})

const mapDispatchToProps = ({
  ...actions
})

export default connect(mapStateToProps, mapDispatchToProps)(App);