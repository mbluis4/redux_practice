import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <VisibilityFilters />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
