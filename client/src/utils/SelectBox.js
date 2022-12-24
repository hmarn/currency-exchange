import React from 'react';
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

export default SelectBox;