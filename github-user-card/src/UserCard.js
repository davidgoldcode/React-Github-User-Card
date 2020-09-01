import React from 'react';
import axios from 'axios';
import './App.css';

class UserCard extends React.Component {
    constructor() {
        super();
        this.state = {
            userProfiles: [],
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
                    userProfiles: res.data, 
                })
            })
            .catch(err => {
                console.log(err, 'you have an error');
            })
    }

    render() {
        console.log('rendering', this.state.userProfiles)
        return (
            <>{
                this.state.userProfiles.map((item) => ( 
                    <div className='userCard gitCard'> 
                        <div className='imgDiv'>
                            <img src={item.avatar_url} alt={`photo of ${item.login}`}></img>
                            <div className='infoDiv'>
                                <h2> Name: <br></br>{item.login}</h2>
                                <h2> Location: <br></br>{item.location}</h2>
                                <h2> Bio: <br></br>{item.bio}</h2>
                            </div>
                        </div>
                        <a href={item.url}> Click here for their profile </a>
                    </div>
                    ))
            }</>
        );
    }
}   

export default UserCard;
