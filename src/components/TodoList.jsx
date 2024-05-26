import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import { DUMMY_TODOS } from '../dummy-todos';
import GroupFilterButton from './GroupFilterButton';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || DUMMY_TODOS;
    return savedTodos;
  });
  const [filterStatus, setFilterStatus] = useState('all');
  const isSmallScreen = useMediaQuery({ query: '(max-width: 540px)' });
  const todosLeft = todos.filter((todo) => !todo.completed).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleEnterKey = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const todoText = data.todo;

    if (todoText.trim() !== '') {
      setTodos((prevState) => {
        const newTodo = { id: uuidv4(), text: todoText, completed: false };
        return [newTodo, ...prevState];
      });
    }

    event.target.reset();
  };

  const handleComplete = (id) => {
    setTodos((prevState) => {
      const todosList = [...prevState];
      const selectedTodoId = todosList.findIndex((todo) => todo.id === id);
      const selectedTodo = todosList[selectedTodoId];
      const editedTodo = {
        ...selectedTodo,
        completed: !selectedTodo.completed,
      };
      todosList[selectedTodoId] = editedTodo;
      return todosList;
    });
  };

  const handleDelete = (id) => {
    setTodos((prevState) => {
      const filterTodoList = prevState.filter((todo) => todo.id !== id);
      return filterTodoList;
    });
  };

  const handleDeleteCompleted = () => {
    setTodos((prevState) => {
      const notCompletedTodos = prevState.filter((todo) => !todo.completed);
      return notCompletedTodos;
    });
  };

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'active') return !todo.completed;
    if (filterStatus === 'completed') return todo.completed;
    return true;
  });

  return (
    <>
      <form
        onSubmit={(event) => handleEnterKey(event)}
        className="bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue px-6 py-3 sm:px-4 sm:py-2 rounded-md mb-6 sm:mb-4 flex items-center gap-3"
      >
        <input
          disabled
          type="checkbox"
          className="rounded-full h-6 w-6 sm:h-5 sm:w-5 bg-transparent border-lightTheme-veryLightGrayishBlue dark:border-darkTheme-veryDarkGrayishBlue2"
        />
        <input
          type="text"
          placeholder="Create a new todo..."
          className="w-full border-none text-18 sm:text-xs bg-transparent focus:ring-transparent caret-brightBlue dark:text-darkTheme-lightGrayishBlue"
          name="todo"
          required
        />
      </form>
      <div className="bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue rounded-md shadow-lightShadow dark:shadow-darkShadow mb-10 sm:mb-4">
        <Reorder.Group
          values={filteredTodos}
          onReorder={filterStatus === 'all' ? setTodos : () => {}}
        >
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={handleDelete}
              onCompleteTodo={handleComplete}
            />
          ))}
        </Reorder.Group>
        <div className="flex justify-between px-6 py-4 text-sm sm:text-xs text-lightTheme-darkGrayishBlue dark:text-darkTheme-darkGrayishBlue">
          <p>
            {todosLeft} {todosLeft > 1 ? 'items' : 'item'} left
          </p>
          {!isSmallScreen && (
            <div className="flex gap-3 font-bold">
              <GroupFilterButton
                filterStatus={filterStatus}
                handleFilterStatus={handleFilterStatus}
              />
            </div>
          )}
          <button
            onClick={handleDeleteCompleted}
            className="hover:text-lightTheme-veryDarkGrayishBlue dark:hover:text-darkTheme-lightGrayishBlue"
          >
            Clear Completed
          </button>
        </div>
      </div>

      {isSmallScreen && (
        <div className="flex gap-5 justify-center rounded-md font-bold p-4 text-sm text-lightTheme-darkGrayishBlue dark:text-darkTheme-darkGrayishBlue bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue mb-6">
          <GroupFilterButton
            filterStatus={filterStatus}
            handleFilterStatus={handleFilterStatus}
          />
        </div>
      )}

      <div className="text-center text-sm text-lightTheme-darkGrayishBlue dark:text-darkTheme-veryDarkGrayishBlue">
        Drag and drop to reorder list (only available in all filters)
      </div>
    </>
  );
}
