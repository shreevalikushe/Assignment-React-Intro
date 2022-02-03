import "./App.css";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
