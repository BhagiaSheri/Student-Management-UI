import React from 'react';

const Student = (props) => {

    return (
        <div className="Content">
            <h4>{props.name}</h4>
            <h6>{props.id}</h6>
        </div>
    );
}

export default Student;




