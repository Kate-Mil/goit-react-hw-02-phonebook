import css from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <form className={css.contact__form}>
      <label className={css.contact__lable}>
        Name
        <input
          className={css.contact__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button className={css.contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
