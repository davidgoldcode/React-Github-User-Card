import React from 'react';

function MyCard({props}) {
    
    return (
        <div className='myCard'>
            <img src={props.avatar_url} alt={`photo of ${props.login}`}></img>
            <h2> Name: <br></br>{props.login}</h2>
            <h2> Location: <br></br>{props.location}</h2>
            <h2> Bio: <br></br>{props.bio}</h2>
            <a href={props.url}> Click here for their profile </a>
        </div>
    );
}

export default MyCard;
