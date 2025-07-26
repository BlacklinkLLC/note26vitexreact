import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";
import { useState, useEffect } from 'react';
export type NoteField = "title" | "content";

export type Note = {
  id: string;
  title: string;
  content: string;
};

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  useEffect(() => {
    // Example initial notes
    setNotes([
      { id: "1", title: "Note 1", content: "This is note 1" },
      { id: "2", title: "Note 2", content: "This is note 2" },
    ]);
    setSelectedNoteId("1");
  }, []);

  const updateNote = (id: string, field: NoteField, value: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <main style={{ display: "flex", gap: "1rem" }}>
      <NoteList
        notes={notes}
        selectedNoteId={selectedNoteId}
        selectNote={setSelectedNoteId}
      />
      <NoteEditor note={selectedNote} updateNote={updateNote} />
    </main>
  );
}