import TodoContainer from "./components/TodoContainer";
import TodoProvider from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <TodoContainer />
    </TodoProvider>
  );
};

export default App;
