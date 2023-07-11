import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className={css.listSection}>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <ul>
        {' '}
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={() => handleDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
