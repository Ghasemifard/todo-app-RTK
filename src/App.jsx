// import './App.css';
import AddTodoForm from './components/Todo/AddTodoForm';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <div className='container pt-3'>
      <h1 className='text-center'>Todo App With RTK</h1>
      <AddTodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
