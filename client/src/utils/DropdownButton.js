import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const DropdownButton = (props) => {
  const { label, options, onChangeHandler, groupKey } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { label }
      </Dropdown.Toggle>

      <Dropdown.Menu>
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

DropdownButton.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChangeHandler: PropTypes.func,
  groupKey: PropTypes.string
};

export default DropdownButton;