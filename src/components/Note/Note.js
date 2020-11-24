import React from 'react';

const Note = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Note;