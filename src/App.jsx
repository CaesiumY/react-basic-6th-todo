import TodoProvider from "./context/TodoContext";
import Router from "./Router";

const App = () => {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
};

export default App;
