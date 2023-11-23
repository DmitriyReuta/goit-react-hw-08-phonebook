import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <div key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <Button
            variant="contained"
            size="small"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};