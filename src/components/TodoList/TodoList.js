import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({ items, onDeleted }) {
  return (
    <ul className="todo-list">
      {items.map((e) => (
        <TodoItem items={e} key={e.id} onDeleted={() => onDeleted(e.id)} />
      ))}
    </ul>
  );
}

export default TodoList;
