import React, { useEffect, useState } from "react";
import styled from "styled-components";
import type { ToDo } from "./types/todo";
import AddToDoForm from "./components/todoform";
import ToDoList from "./components/todolist";
import { fetchToDos, addToDo, updateToDo, deleteToDo } from "./api/mockapi";

const Container = styled.div`
  max-width: 860px;
  margin: 48px auto;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 24px ${({ theme }) => theme.spacing.md};
    padding: 16px;
  }
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchToDos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  const handleAdd = async (todo: ToDo) => {
    const newToDo = await addToDo(todo);
    setTodos((prev) => [...prev, newToDo]);
  };

  const handleUpdate = async (todo: ToDo) => {
    const updated = await updateToDo(todo);
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = async (id: number) => {
    await deleteToDo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Container>
      <h1 style={{
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: '8px'
      }}>To‑Do</h1>
      <p style={{ marginBottom: 24 }}>Capture tasks, stay organized, and ship faster.</p>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <>
          <AddToDoForm onAdd={handleAdd} />
          <ToDoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
        </>
      )}
    </Container>
  );
};

export default App;
