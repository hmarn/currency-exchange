import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Currency Exchange</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>You Send :</p>
          </Col>
          <Col>
            <p>Recipient Get :</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
