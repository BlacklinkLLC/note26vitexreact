
import { Note, NoteField } from "./App";

type NoteEditorProps = {
  note: Note | undefined;
  updateNote: (id: string, field: NoteField, value: string) => void;
};

export default function NoteEditor({ note, updateNote }: NoteEditorProps) {
  if (!note) return <div>No note selected</div>;

  return (
    <section>
      <input
        value={note.title}
        onChange={(e) => updateNote(note.id, "title", e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={note.content}
        onChange={(e) => updateNote(note.id, "content", e.target.value)}
        placeholder="Content"
      />
    </section>
  );
}