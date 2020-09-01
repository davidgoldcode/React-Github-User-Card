import React from 'react';
import logo from './logo.svg';
import UserCard from './UserCard'
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [], 
      error: '', 
    };
    console.log('constructor is running')
  }

  componentDidMount() {
    console.log('cdm is running')
    axios
      .get('https://api.github.com/users/davidgoldcode/followers')
      .then(res => {
        debugger
        this.setState({
          followers: res.data,
        })
      })
      .catch(err => {
        console.log(err, 'you have an error');
      })
  }

  render() {
    console.log('rendering', this.state.followers)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserCard />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
