import React from 'react';

const NoteList = ({ notes }) => {
  return(
    <div className="notelist-container text-left">
      <ul className="note-list">
        {notes.map((item, index) => 
          <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default NoteList;