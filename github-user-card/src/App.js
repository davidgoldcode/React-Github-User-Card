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
        <h1 className="titleHeader">My Profile</h1>
        <MyCard props={this.state.myProfile}/>
        <h1 className="titleHeader">My Followers</h1>
        <UserCard />
      </div>
    );
  }
}

export default App;
