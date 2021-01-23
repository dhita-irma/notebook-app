import React from "react";
import { Form, Button } from "react-bootstrap";

const NoteForm = ( props ) => {

  const inputTitleHandler = (e) => {
    props.setInputTitle(e.target.value);
  }
  
  const inputContentHandler = (e) => {
    props.setInputContent(e.target.value);
  }

  const submitNoteHandler = (e) => {
    e.preventDefault();

    props.setNotes([
      ...props.notes, {title: props.inputTitle, content: props.inputContent}
    ]);

    props.setNoteShowed({title: props.inputTitle, content: props.inputContent});
    props.setInputTitle("");
    props.setInputContent("");
    props.setShowForm(false);
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          placeholder="Enter title here" 
          value={props.inputTitle} 
          autoComplete="off"
          onChange={inputTitleHandler}/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          placeholder="Enter your notes here"
          value={props.inputContent}
          onChange={inputContentHandler}
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="warning" onClick={submitNoteHandler}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default NoteForm;
