import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default TodoItem;
