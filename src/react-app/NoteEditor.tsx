type Note = {
  id: string;
  title: string;
  content: string;
};

type NoteEditorProps = {
  note: Note | undefined;
  updateNote: (id: string, field: string, value: string) => void;
};

export default function NoteEditor({ note, updateNote }: NoteEditorProps) {
  if (!note) return <div>No note selected</div>;

  return (
    <div className="note-editor">
      <input
        aria-label="Note title"
        placeholder="Title"
        value={note.title}
        onChange={(e) => updateNote(note.id, "title", e.target.value)}
      />
      <textarea
        aria-label="Note content"
        placeholder="Write your note here..."
        value={note.content}
        onChange={(e) => updateNote(note.id, "content", e.target.value)}
      />
    </div>
  );
}