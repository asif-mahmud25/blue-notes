import React, { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import db from './firebase';
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    db.collection('notes').onSnapshot(snapshot => {
      
      setNotes(snapshot.docs.map(el=> {
        return {
          id: el.id,
          title: el.data().title,
          body: el.data().body
        }
      }));

    });
  }, []);

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
    <Note key={el.id}
      title={el.title}
      body={el.body} />
  ));

  console.log(notes);

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
