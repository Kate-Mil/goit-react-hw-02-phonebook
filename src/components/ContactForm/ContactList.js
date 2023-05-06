import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ name, number }) {
  return (
    <li className={css.contact__item}>
      {name}: {number}
    </li>
  );
}

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
