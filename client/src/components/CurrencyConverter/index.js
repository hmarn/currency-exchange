import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import moment from 'moment';
import SelectBox from '../../utils/SelectBox';

const CurrencyConverter = (props) => {
  const { timestamp, rates, base } = props.data;
  const updatedDate = moment.unix(timestamp).format('dddd, MMMM Do, YYYY h:mm:ss A');
  const currencyCodes =  Object.keys(rates);
  const [hostCurrency, setHostCurrency] = useState(base);
  const [hostAmount, setHostAmount] = useState(rates[hostCurrency]);
  const [destinationCurrency, setDestinationCurrency] = useState('SGD');
  const [destinationAmount, setDestinationAmount] = useState(rates[destinationCurrency]);

  const converter = ({fromCurrency, fromAmount, toCurrency }) => {
    const baseAmount = (fromAmount / rates[fromCurrency]) * rates[base];
    const result = (rates[base] * baseAmount) * rates[toCurrency];
    return result;
  };

  const handleOnChangeHostAmount = (e) => {
    const amount = e.target.value;
    setHostAmount(amount);

    if (hostCurrency !== 0 && destinationCurrency !== 0) {
      const destinationResult = converter({
                                  fromCurrency: hostCurrency,
                                  fromAmount: amount,
                                  toCurrency: destinationCurrency
                                });
      setDestinationAmount(destinationResult);
    }
  };

  const handleHostCurrencyChange = (e) => {
    const currency = e.target.value;
    setHostCurrency(currency);

    if (destinationAmount !== 0) {
      const destinationResult = converter({
                                  fromCurrency: currency,
                                  fromAmount: hostAmount,
                                  toCurrency: destinationCurrency
                                });
      setDestinationAmount(destinationResult);
    }
  };

  const handleDestinationCurrencyChange = (e) => {
    const currency = e.target.value;
    setDestinationCurrency(currency);

    if (hostAmount !== 0) {
      const destinationResult = converter({
                                  fromCurrency: hostCurrency,
                                  fromAmount: hostAmount,
                                  toCurrency: currency
                                });
      setDestinationAmount(destinationResult);
    }
  };

  return (
    <div className='converterBox'>
      <Row className='converterRow'>
        <Col md={12} xs={1}>
          <p className='dataInfo'>Updated at: <b>{ updatedDate }</b> </p>
        </Col>
      </Row>

      <Row className='converterRow'>
        <Col md={4} xs={1}>
          <h3> FROM </h3>
          <SelectBox
            label='Host Currency'
            options={currencyCodes}
            onChangeHandler={handleHostCurrencyChange}
            groupKey='host'
            defaultValue={hostCurrency}
          />
          <input className='inputBox form-control' type='number' onChange={handleOnChangeHostAmount} value={hostAmount} />
        </Col>
        <Col md={4} xs={1}>
          <h3> TO </h3>
          <SelectBox
            label='Destination Currency'
            options={currencyCodes}
            onChangeHandler={handleDestinationCurrencyChange}
            groupKey='destination'
            defaultValue={destinationCurrency}
          />
          <input className='inputBox form-control' disabled type='number' name='destinationAmount' value={destinationAmount}/>
        </Col>
      </Row>
    </div>
  );
};

CurrencyConverter.propTypes = {
  data: PropTypes.instanceOf({
    timestamp: PropTypes.any,
    rates: PropTypes.array,
    base: PropTypes.string
  })
};

export default CurrencyConverter;