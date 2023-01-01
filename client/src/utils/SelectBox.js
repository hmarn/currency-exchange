import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const SelectBox = (props) => {
  const { label, options, onChangeHandler, groupKey } = props;

  return (

    <Form.Select
      aria-label={label}
      onChange={onChangeHandler}
      className='selectBox'
      defaultValue={props.defaultValue || ''}
    >
      <option> {label} </option>
      { options.map((key) => {
            return (
              <option
                key={`option-${groupKey}-${key}`}
                value={key}
              >
                { key }
              </option>
            );
          })
        }
    </Form.Select>
  );
};

SelectBox.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChangeHandler: PropTypes.func,
  groupKey: PropTypes.string,
  defaultValue: PropTypes.string
};

export default SelectBox;