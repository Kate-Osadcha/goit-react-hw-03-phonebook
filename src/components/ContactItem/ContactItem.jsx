import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import s from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <span className={s.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={s.number}>
        {contact.number}
      </a>
      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="16" height="16" />
      </IconButton>
    </>
  );
};

export default ContactItem;
