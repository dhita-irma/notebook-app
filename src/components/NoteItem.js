import React from 'react';
import { Button } from 'react-bootstrap';


const NoteItem = ({ noteShowed, deleteNoteHandler }) => {
    if (noteShowed.length === 0) {
        return (
            <div>No notes to be shown.</div>
        )
    } else {
        return(
                <div className="note-item">
                    <h3>{noteShowed.title}</h3>
                    <p>{noteShowed.content}</p>
                    <Button variant="warning" className="mr-3">Edit</Button>
                    <Button variant="danger" onClick={deleteNoteHandler}>Delete</Button>
                </div> 
        );
    }
}

export default NoteItem;
