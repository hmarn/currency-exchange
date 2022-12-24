import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'react-bootstrap';

const CurrencyTable = (props) => {
  const { rates } = props;
  return (
    <div>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Table striped hover className='currencyRateTable'>
            <thead>
              <tr>
                <th> Currency</th>
                <th> Rates</th>
              </tr>
            </thead>
            <tbody>
              { Object.keys(rates).map((key) => {
                return (
                  <tr key={key}>
                    <td> <span> { key } </span></td>
                    <td> <span> { rates[key] } </span> </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default CurrencyTable;