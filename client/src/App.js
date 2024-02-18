import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CurrencyTable from './components/CurrencyTable';
import CurrencyConverter from './components/CurrencyConverter';
import axios from 'axios';

const URL = 'http://localhost:8000/exchange_rate';
// const URL = 'https://openexchangerates.org/api/latest.json?app_id=5fcc6db49fdf45cb959de28cce648af2'
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
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
