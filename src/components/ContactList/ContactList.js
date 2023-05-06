import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

export default function ContactList({ visibleContacts }) {
  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
