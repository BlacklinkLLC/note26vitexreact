import React from "react";
import { Note } from "./App";

type NoteListProps = {
  notes: Note[];
  selectedNoteId: string | null;
  selectNote: (id: string) => void;
};

export default function NoteList({
  notes,
  selectedNoteId,
  selectNote,
}: NoteListProps) {
  return (
    <aside>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            style={{
              cursor: "pointer",
              fontWeight: note.id === selectedNoteId ? "bold" : "normal",
            }}
            onClick={() => selectNote(note.id)}
          >
            {note.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}