import React from 'react';

const Note = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}

export default Note;