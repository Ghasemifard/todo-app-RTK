import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../../features/todo/todoSlice";
import { useEffect } from "react";

// const todos = [
//     {id:1,title:"todo1",completed:false},
//     {id:1,title:"todo1",completed:false},
// ]

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  return (
    <div>
      <h2>Todo List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
