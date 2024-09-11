import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos",
});

export const getTodos = async () => {
  const { data } = await todoClient.get("/");

  return data;
};

export const getTodoDetail = async (id) => {
  const { data } = await todoClient.get(`/${id}`);

  return data;
};

export const postTodo = async (newTodoObj) => {
  const { data } = await todoClient.post("/", newTodoObj);

  return data;
};

export const toggleTodo = async (id, completed) => {
  const { data } = await todoClient.patch(`/${id}`, {
    completed,
  });

  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await todoClient.delete(`/${id}`);

  return data;
};
