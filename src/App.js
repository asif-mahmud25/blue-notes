import React, { useState } from 'react';
import './App.css';
import Note from './components/Note/Note';

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyHandler = (event) => {
    setBody(event.target.value);
  }

  const noteSubmitHandler = () => {
    let newNote = {
      title: title,
      body: body
    }

    setNotes([...notes, newNote]);
  }

  let showNotes = notes.map((el) => (
    <Note title={el.title}
      body={el.body} />
  ));

  return (
    <div>
      <h1>Blue Notes</h1>
      <input type="text" name="title" value={title} onChange={titleHandler} />
      <textarea type="text" name="body" value={body} onChange={bodyHandler} />
      <button onClick={noteSubmitHandler}>Submit</button>
      {showNotes}
    </div>
  );
}

export default App;
