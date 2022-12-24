import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const DropdownButton = (props) => {
  const { label, options, onChangeHandler, noOption, groupKey } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { label }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        { noOption && <Dropdown.Item > '--' </Dropdown.Item> }
        { options.map((key) => {
            return (
              <Dropdown.Item
                key={`option-${groupKey}-${key}`}
                onClick={(e) => onChangeHandler(e, key)}
                value={key}
              >
                { key }
              </Dropdown.Item>
            );
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;