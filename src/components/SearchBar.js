import React from "react";
import { Form, Button, Col } from "react-bootstrap";


const SearchBar = () => {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
          />
        </Col>
        <Col xs="auto">
          <Button variant="warning" type="submit" className="mb-2">
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchBar;
