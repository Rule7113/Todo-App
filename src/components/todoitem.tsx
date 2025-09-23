import React, { useState } from "react";
import styled from "styled-components";
import type { ToDo } from "../types/todo";

interface ToDoItemProps {
  todo: ToDo;
  onUpdate: (todo: ToDo) => void;
  onDelete: (id: number) => void;
}
// Styling with styled components
const Item = styled.div`
  background: ${({ theme }) => theme.colors.surfaceElevated};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Title = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};

  &.edit { background: ${({ theme }) => theme.colors.warning}; border-color: transparent; }
  &.delete { background: ${({ theme }) => theme.colors.danger}; border-color: transparent; }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const EditGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TextInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(106,160,255,0.25);
  }
`;

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleSave = () => {
    onUpdate({ ...todo, title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  // Logic and layout of the todo items
  return (
    <Item>
      {isEditing ? (
        <EditGrid>
          <TextInput value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <TextInput value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
          <Button className="edit" onClick={handleSave}>Save</Button>
        </EditGrid>
      ) : (
        <>
          <Content>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onUpdate({ ...todo, completed: !todo.completed })}
            />
            <Title completed={todo.completed}>{todo.title}</Title>
            <p style={{ gridColumn: '1 / -1', marginTop: 6 }}>{todo.description}</p>
          </Content>
          <ButtonGroup>
            <Button className="edit" onClick={() => setIsEditing(true)}>Edit</Button>
            <Button className="delete" onClick={() => onDelete(todo.id)}>Delete</Button>
          </ButtonGroup>
        </>
      )}
    </Item>
  );
};

export default ToDoItem;
