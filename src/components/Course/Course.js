import React from "react";


const Course = (props) => {

    return (
        <div className="Course">
            <li>{props.id} - {props.name}</li>
        </div>
    );
}

export default Course