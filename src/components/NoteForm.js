import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const NoteForm = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="Enter title here" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          placeholder="Enter your notes here"
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default NoteForm;
