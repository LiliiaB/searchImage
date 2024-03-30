import { FiSearch } from 'react-icons/fi';
import css from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  function saveInput(event) {
    const inputValue = event.target.value;
    setQuery(inputValue);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={saveInput}
        value={query}
      />
    </form>
  );
};
