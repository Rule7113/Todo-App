import type { ToDo } from "../types/todo";

// Mock data 
let todos: ToDo[] = [
  { id: 1, title: "Requirements", description: "Add all CRUD operations", completed: false },
  { id: 2, title: "Build To-Do App", description: "Use TypeScript and styled-components", completed: false },
];

// Simulated network delay
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API Calls below
// GET: fetch To-Do list
export const fetchToDos = async (): Promise<ToDo[]> => {
  await simulateDelay(500);
  return [...todos];
};

// POST: add new To-Do
export const addToDo = async (todo: ToDo): Promise<ToDo> => {
  await simulateDelay(500);
  todos.push(todo);
  return todo;
};

// PUT: update existing To-Do
export const updateToDo = async (updated: ToDo): Promise<ToDo> => {
  await simulateDelay(500);
  todos = todos.map(todo => (todo.id === updated.id ? updated : todo));
  return updated;
};

// DELETE: remove To-Do
export const deleteToDo = async (id: number): Promise<void> => {
  await simulateDelay(500);
  todos = todos.filter(todo => todo.id !== id);
};
