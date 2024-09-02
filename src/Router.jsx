import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./page/HomePage";
import TodoDetailPage from "./page/TodoDetailPage";
import TodoProvider from "./context/TodoContext";

const Router = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};

export default Router;
