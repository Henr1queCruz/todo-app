import { Reorder } from 'framer-motion';
import CheckIcon from './UI/Icons/CheckIcon';
import CrossIcon from './UI/Icons/CrossIcon';

export default function Todo({ todo, onDeleteTodo, onCompleteTodo }) {
  return (
    <Reorder.Item
      className="flex justify-between items-center px-6 py-5 sm:px-5 sm:py-4 border-b dark:border-darkTheme-veryDarkGrayishBlue2"
      value={todo}
      key={todo}
    >
      <div
        className="group flex gap-4 text-18 sm:text-xs cursor-pointer relative"
        onClick={() => onCompleteTodo(todo.id)}
      >
        <input
          type="checkbox"
          className={`rounded-full h-6 w-6 sm:h-5 sm:w-5 bg-transparent relative border-lightTheme-veryLightGrayishBlue dark:border-darkTheme-veryDarkGrayishBlue2
          group-hover:border-lightTheme-darkGrayishBlue
      ${todo.completed ? 'bg-checkBackground' : ''}`}
          name={todo.text}
        />

        <span className="absolute h-6 w-6 rounded-full">
          {todo.completed && (
            <CheckIcon className="absolute top-2 left-[6px] sm:top-[5px] sm:left-1" />
          )}
        </span>

        <label
          className={`cursor-pointer ${
            todo.completed
              ? 'line-through text-lightTheme-lightGrayishBlue dark:text-darkTheme-veryDarkGrayishBlue'
              : 'dark:text-darkTheme-lightGrayishBlue'
          }`}
          htmlFor={todo.text}
        >
          {todo.text}
        </label>
      </div>
      <button onClick={() => onDeleteTodo(todo.id)}>
        <CrossIcon className="w-4 h-4 sm:w-3 sm:h-3" />
      </button>
    </Reorder.Item>
  );
}
