import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteItem from "./components/NoteItem";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // States
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [noteShowed, setNoteShowed] = useState([]);

  // useEffect
  useEffect(() => {
    getLocalNotes();
  }, []);

  useEffect(() => {
    saveLocalNotes();
  }, [notes]);

  // Handlers
  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value);
  }
  
  const inputContentHandler = (e) => {
    setInputContent(e.target.value);
  }

  const submitNoteHandler = (e) => {
    e.preventDefault();

    const newID = Math.random() * 1000;

    setNotes([
      ...notes, {title: inputTitle, content: inputContent, id: newID}
    ]);
    
    setNoteShowed({title: inputTitle, content: inputContent, id: newID});
    setInputTitle("");
    setInputContent("");
    setShowForm(false);
  }

  const showNoteHandler = (e) => {
    const id = e.target.id;
    setNoteShowed(notes.find(note => note.id == id));
  }

  // Save to local storage
  const saveLocalNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const getLocalNotes = () => {
    if (localStorage.getItem('notes') === null) {
      localStorage.setItem('notes', JSON.stringify([]));
    } else {
      let notesLocal = JSON.parse(localStorage.getItem('notes'));
      setNotes(notesLocal);
    }
  };

  return (
    <div className="App">
      <Container className="note-container">
        <Row>
          <Col md={12} className="note-header">
            NOTES
          </Col>
        </Row>
        <Row>
          <Col md={4} className="sidebar">
            <SearchBar />
            <h5 className="font-weight-bold pt-3">All notes</h5>
            <NoteList notes={notes} showNoteHandler={showNoteHandler}/>
          </Col>
          <Col md={8} className="main">
            <div className="text-right">
              <Button variant="warning" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Back" : "Create"}
              </Button>
            </div>
            {showForm ? 
              <NoteForm 
                inputTitle={inputTitle}
                inputContent={inputContent}
                inputTitleHandler={inputTitleHandler}
                inputContentHandler={inputContentHandler}
                submitNoteHandler={submitNoteHandler}/> : 
              <NoteItem noteShowed={noteShowed} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
