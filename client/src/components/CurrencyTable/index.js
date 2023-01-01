import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'react-bootstrap';

const CurrencyTable = (props) => {
  const { rates } = props;
  return (
    <div>
      <Row>
        <Col md={3} xs={1} />
        <Col md={5} xs={1} className='currencyRateTableWrap'>
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
        <Col md={3} xs={1} />
      </Row>
    </div>
  );
};

CurrencyTable.propTypes = {
  rates: PropTypes.array
};

export default CurrencyTable;