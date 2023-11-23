import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};