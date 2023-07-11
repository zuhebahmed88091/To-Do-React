import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      alert('Please add item');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
export default InputTodo;
