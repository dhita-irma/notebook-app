import React from 'react';


const NoteList = ({ notes, showNoteHandler }) => {
  return(
    <div className="notelist-container text-left">
      <div className="note-list">
        {notes.map((item) => 
          <p className="note-list-item" key={item.id} id={item.id} onClick={showNoteHandler}>
            {item.title}
          </p>)}
      </div>
    </div>
  );
}

export default NoteList;