import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'react-bootstrap';

const CurrencyTable = (props) => {
  const { rates } = props;
  return (
    <div>
      <Row>
        <Col md={3} s={12} />
        <Col md={5} s={12} className='currencyRateTableWrap'>
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
        <Col md={3} s={12} />
      </Row>
    </div>
  );
};

CurrencyTable.propTypes = {
  rates: PropTypes.array
};

export default CurrencyTable;