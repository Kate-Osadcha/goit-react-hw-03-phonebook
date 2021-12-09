import s from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={s.number}>
        {contact.number}
      </a>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
