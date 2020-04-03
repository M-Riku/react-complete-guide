import React from 'react'

import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="User">
            <p>User infomation</p>
            <p>username: {props.username}</p>
        </div>
    )
};

export default userOutput;