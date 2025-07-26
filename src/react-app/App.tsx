import React, { useState, useEffect } from 'react';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

type NoteField = "title" | "content";

type Note = {
  id: string;
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
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

  const [activeNoteId, setActiveNoteId] = useState<string | null>(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    return savedNotes.length > 0 ? savedNotes[0].id : null;
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
    };
    setNotes((prevNotes: Note[]) => [newNote, ...prevNotes]);
    setActiveNoteId(newNote.id);
  };

  const updateNote = (id: string, field: NoteField, value: string) => {
    setNotes((prevNotes: Note[]) =>
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
      <NoteEditor note={activeNote} updateNote={updateNote} />
    </div>
  );
}

export default App;