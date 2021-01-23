import React from "react";
import { Form, Button } from "react-bootstrap";

const NoteForm = ( props ) => {
  
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          placeholder="Enter title here" 
          value={props.inputTitle} 
          autoComplete="off"
          onChange={props.inputTitleHandler}/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          placeholder="Enter your notes here"
          value={props.inputContent}
          onChange={props.inputContentHandler}
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="warning" onClick={props.submitNoteHandler}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default NoteForm;
