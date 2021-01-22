import React from "react";
import { Form, Button } from "react-bootstrap";

const NoteForm = ({ notes, setNotes, inputTitle, setInputTitle, inputContent, setInputContent })  => {

  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value);
  }
  
  const inputContentHandler = (e) => {
    setInputContent(e.target.value);
  }

  const submitNoteHandler = (e) => {
    e.preventDefault();

    setNotes([
      ...notes, {title: inputTitle, content: setInputContent}
    ]);

    console.log(notes);
    setInputTitle("");
    setInputContent("");
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          placeholder="Enter title here" 
          value={inputTitle} 
          onChange={inputTitleHandler}/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          placeholder="Enter your notes here"
          value={inputContent}
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
