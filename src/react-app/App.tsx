import React, { useState, useEffect } from 'react';
import './nova-main.css';  // your custom styles
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    if (savedNotes.length === 0) {
      return [{
        id: Date.now().toString(),
        title: 'Untitled Note',
        content: '',
      }];
    }
    return savedNotes;
  });

  const [activeNoteId, setActiveNoteId] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    return savedNotes.length > 0 ? savedNotes[0].id : null;
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setActiveNoteId(newNote.id);
  };

  const updateNote = (id: string, field: 'title' | 'content', value: string) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  };

  const activeNote = notes.find(n => n.id === activeNoteId);

  return (
    <div className="section" style={{ display: 'flex', gap: '20px' }}>
      <NoteList
        notes={notes}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        createNote={createNote}
      />
      <NoteEditor
        note={activeNote}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;