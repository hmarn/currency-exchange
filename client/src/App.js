import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CurrencyTable from './components/CurrencyTable';
import CurrencyConverter from './components/CurrencyConverter';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const url = 'http://localhost:8000/exchange_rate';

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    })
    .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col className='header'>
            <h1>Currency Exchange</h1>
          </Col>
        </Row>

        { data.length !== 0 && <CurrencyConverter data={data} /> }

        { data.length !== 0 && <CurrencyTable rates={data.rates} /> }
      </Container>
    </div>
  );
}

export default App;
