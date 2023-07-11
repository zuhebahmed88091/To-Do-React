import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodosList;
