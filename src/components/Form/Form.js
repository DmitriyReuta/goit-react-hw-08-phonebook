import React, { useState } from 'react';
import Button from '@mui/material/Button';

export function Form({ onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleChange}
        />
      </div>
      <div>
        Phone number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          onChange={handleChange}
        />
      </div>
      <Button
        variant="contained"
        size="small"
        type="submit"
        disabled={!name || !number}
      >
        Add contact
      </Button>
    </form>
  );
}