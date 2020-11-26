import React from 'react';
import style from './Note.module.css';

const Note = (props) => {
    return (
        <div className={style.noteBox}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <h3 onClick={() => props.delete(props.id)}>Delete</h3>
        </div>
    )
}

export default Note;