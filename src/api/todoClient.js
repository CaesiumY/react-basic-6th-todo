import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos",
});
