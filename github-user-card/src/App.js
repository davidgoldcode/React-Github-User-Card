import React from 'react';
import logo from './logo.svg';
import UserCard from './UserCard'
import MyCard from './MyCard'
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myProfile: [], 
      error: '', 
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/davidgoldcode')
      .then(res => {
        this.setState({
          myProfile: res.data,
        })
      })
      .catch(err => {
        console.log(err, 'you have an error');
      })
  }

  render() {
    return (
      <div className="App">
        <MyCard props={this.state.myProfile}/>
        <UserCard />
      </div>
    );
  }
}

export default App;
