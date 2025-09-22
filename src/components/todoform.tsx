import React, { useState } from "react";
import styled from "styled-components";
import type { ToDo } from "../types/todo";

interface AddToDoFormProps {
  onAdd: (todo: ToDo) => void;
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(106,160,255,0.25);
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-weight: 600;
  transition: background-color 120ms ease, transform 80ms ease;

  &:hover { background-color: ${({ theme }) => theme.colors.primaryHover}; }
  &:active { transform: translateY(1px); }
`;

const AddToDoForm: React.FC<AddToDoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newToDo: ToDo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    onAdd(newToDo);
    setTitle("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button type="submit">Add To-Do</Button>
    </Form>
  );
};

export default AddToDoForm;
