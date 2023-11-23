import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';

const ContactsPage = () => {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Form onData={onAddContact} />
      </div>
      
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={onSetFilter} />
        {empty() ? (
          <>
            <ContactList
              contacts={contacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <div>
            Phonebook is empty! <br /> Add your contacts.
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default ContactsPage;