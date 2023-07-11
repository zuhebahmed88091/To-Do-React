import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <InputTodo />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
      <InputTodo addTodoItem={addTodoItem} />
    </div>
  );
};
export default TodosLogic;
