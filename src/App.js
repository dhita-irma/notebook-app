import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import NoteForm from './components/NoteForm';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // States
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Container className="note-container">
        <Row>
          <Col md={12} className="note-header">NOTES</Col>
        </Row>
        <Row>
          <Col md={4} className="sidebar">
            <SearchBar />
            <h5 className="font-weight-bold pt-3">All notes</h5>
          </Col>
          <Col md={8} className="main">
            <div className="text-right">
              <Button variant="warning" onClick={() => setShowForm(!showForm)}>
                { showForm ? "Back" : "Create"}
              </Button>
            </div>
            {showForm ? <NoteForm /> : null }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
