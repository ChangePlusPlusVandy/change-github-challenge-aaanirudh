import React from 'react'
import './Member.css'


function Member(props) {
    return(
        <div className='member'>
            <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>{props.name}</p>
            <p>Class: {props.classification}</p>
            <p>Favorite Color: <span style={{color: props.favColor}}>{props.favColor}</span></p>
        </div>
    )
}

export default Member;
