import {React, Fragment} from 'react';
import { Button } from 'react-bootstrap';


const NoteItem = ({ noteShowed, deleteNoteHandler }) => {
    return (
        <div className="note-item">
            {noteShowed.length === 0 ? <div>No notes to be shown.</div> :
                <Fragment>
                    <h3>{noteShowed.title}</h3>
                    <p>{noteShowed.content}</p>
                    <Button variant="warning" className="mr-3">Edit</Button>
                    <Button variant="danger" onClick={deleteNoteHandler}>Delete</Button>
                </Fragment>
            }
        </div>
    );
}

export default NoteItem;
