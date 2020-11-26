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

  const deleteNote = (id) => {
    db.collection('notes').doc(id).delete();
  }

  let showNotes = notes.map((el) => (
    <Note key={el.id}
      id={el.id}
      title={el.title}
      body={el.body}
      delete={deleteNote} />
  ));

  return (
    <div className="container">

      <h1 className="logo-heading">Blue Notes</h1>

      <div className="input-section">
        <input type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={titleHandler} />

        <textarea
          type="text"
          placeholder="Note"
          name="body"
          value={body}
          onChange={bodyHandler} />

        <button onClick={addNoteHandler}>Submit</button>
      </div>

      <div className="space"></div>

      {showNotes}

    </div>
  );
}

export default App;
