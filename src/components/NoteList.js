import React from 'react';

const NoteList = ({ notes, showNoteHandler }) => {
  return(
    <div className="notelist-container text-left">
      <ul className="note-list">
        {notes.map((item) => 
          <li className="note-list-item" key={item.id} id={item.id} onClick={showNoteHandler}>
            {item.title}
          </li>)}
      </ul>
    </div>
  );
}

export default NoteList;