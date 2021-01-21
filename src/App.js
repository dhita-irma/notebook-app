import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Row, Col } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <header>
        {/* <h1>Notebook</h1> */}
      </header>
      <Container className="note-container">
        <Row>
          <Col md={12} className="note-header">NOTES</Col>
        </Row>
        <Row>
          <Col md={4} className="sidebar">
            <Button variant="outline-warning">Create Note</Button>
          </Col>
          <Col md={8} className="main">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
