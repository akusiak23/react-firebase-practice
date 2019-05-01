import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Route } from 'react-router-dom';
import './App.css';
import fire from './config/fire';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
      else {
        this.setState({
          user: null
        })
      }
    })
  } 

  render() {
    return (
      <div>
        {this.state.user ? <Home /> : <Login />}
      </div>
    )
  }
}

export default App