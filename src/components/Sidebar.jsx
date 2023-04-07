export default function Sidebar(props) {
  const sortedNotes = props.notes.sort(
    (a, b) => b.lastModified - a.lastModified
  );

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button className="sidebar-button" onClick={props.newNote}>
          Add
        </button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }) => (
          <div
            key={id}
            className={`app-sidebar-note ${
              id === props.currentNote.id && "active"
            }`}
            onClick={() => props.setCurrentNoteId(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button
                className="sidebar-button"
                onClick={(e) => props.deleteNote(e, id)}
              >
                Delete
              </button>
            </div>
            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Created at{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
