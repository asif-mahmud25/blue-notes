import React, { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import firebase from 'firebase';
import db from './firebase';
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    db.collection('notes').orderBy('timestamp', 'desc').onSnapshot(snapshot => {

      setNotes(snapshot.docs.map(el => {
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

  const addNoteHandler = () => {

    db.collection('notes').add({
      title: title,
      body: body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTitle('');
    setBody('');

  }

  let showNotes = notes.map((el) => (
    <Note key={el.id}
      title={el.title}
      body={el.body} />
  ));

  return (
    <div>
      <h1>Blue Notes</h1>
      <input type="text" name="title" value={title} onChange={titleHandler} />
      <textarea type="text" name="body" value={body} onChange={bodyHandler} />
      <button onClick={addNoteHandler}>Submit</button>
      {showNotes}
    </div>
  );
}

export default App;
