import './Sidebar.css';

const Sidebar = ({ onAddNote, notes, onDeleteNote, activeNote, setActiveNote }) => {
    const sortedNotes=notes.sort((a,b)=>b.modDate - a.modDate);
    return (
        <div className='app-sidebar'>
            <div className="app-sidebar-header">
                <h1>note</h1>
                <button onClick={onAddNote}>add</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>remove</button>
                        </div>
                        <p>{note.content}</p>
                        <small>
                            {new Date(note.date).toLocaleString("ja-JP", { year: "numeric", month: "2-digit", hour: "2-digit", minute: "2-digit", })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;