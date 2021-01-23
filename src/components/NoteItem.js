import React from 'react';


const NoteItem = ({ noteShowed }) => {
    return(
        <div className="note-item">
            <h3>{noteShowed.title}</h3>
            <p>{noteShowed.content}</p>
        </div>
    );
}

export default NoteItem;
