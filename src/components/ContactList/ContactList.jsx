import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

import s from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <ContactItem
            contact={contact}
            onDeleteContact={() => {
              onDeleteContact(contact.id); // Метод на клике, принимает ID контакта
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
