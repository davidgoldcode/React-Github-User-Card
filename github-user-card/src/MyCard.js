import React from 'react';
import './App.css';

function MyCard({props}) {
    
    return (
        <div className='myCard gitCard'>
            <h1>My Profile</h1>
            <div className='imgDiv'>
                <img src={props.avatar_url} alt={`photo of ${props.login}`}></img>
                <div className='infoDiv'>
                    <h2> Name: <br></br>{props.login}</h2>
                    <h2> Location: <br></br>{props.location}</h2>
                    <h2> Bio: <br></br>{props.bio}</h2>
                </div>
            </div>
            <a href={props.url}> Click here for their profile </a>
        </div>
    );
}

export default MyCard;
