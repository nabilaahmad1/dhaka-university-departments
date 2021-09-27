import React from 'react';
import './ShowNames.css'

const ShowNames = (props) => {
    return (
        <div className="showName">
            <p>{props.funded.departmentName}</p>
        </div>
    );
};

export default ShowNames;