import React from "react";

type Note = {
  id: string;
  title: string;
  content: string;
};

type NoteListProps = {
  notes: Note[];
  activeNoteId: string | null;
  setActiveNoteId: (id: string) => void;
  createNote: () => void;
};

export default function NoteList({
  notes,
  activeNoteId,
  setActiveNoteId,
  createNote,
}: NoteListProps) {
  return (
    <aside>
      <button onClick={createNote}>New Note</button>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            style={{
              cursor: "pointer",
              fontWeight: note.id === activeNoteId ? "bold" : "normal",
            }}
            onClick={() => setActiveNoteId(note.id)}
          >
            {note.title || "Untitled"}
          </li>
        ))}
      </ul>
    </aside>
  );
}