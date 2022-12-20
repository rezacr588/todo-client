import "./App.css";
import TodosManager from "./Components/TodosManager";
import { TodosProvider } from "./context/todosContext";
import Container from "./Layout/Container";

function App() {
  return (
    <TodosProvider>
      <Container>
        <h1 className="header">Todo List</h1>
        <TodosManager />
      </Container>
    </TodosProvider>
  );
}

export default App;
