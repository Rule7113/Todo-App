import React from "react";
import styled from "styled-components";
import type { ToDo } from "../types/todo";
import ToDoItem from "./todoitem";

interface ToDoListProps {
  todos: ToDo[];
  onUpdate: (todo: ToDo) => void;
  onDelete: (id: number) => void;
}

const Empty = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ToDoList: React.FC<ToDoListProps> = ({ todos, onUpdate, onDelete }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <Empty>No tasks yet. Add your first To‑Do above.</Empty>
      ) : (
        todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default ToDoList;
