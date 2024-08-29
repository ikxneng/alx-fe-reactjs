import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from "../components/TodoList";

test('renders the initial state with a few demo todos' , () => {
    render(<TodoList />);

    expect (screen.getByText('Setup the Todo List Component')).toBeInTheDocument();
    expect (screen.getByText('Write Tests Using Jest and React Testing Library')).toBeInTheDocument();
    expect (screen.getByText('Run Tests')).toBeInTheDocument();

    expect(screen.getByText('Todo List')).toBeInTheDocument();

})

test('allows users to add a new todo', () => {
    
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, {target: {value: 'New Todo Item'}});

    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
});

test('toggles a todo item between completed and not completed', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Setup the Todo List Component');

    expect(todoItem).not.toHaveStyle('text-decloration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decloration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
})

test('allows users to delete a Todo', () =>{
    render(<TodoList />);

    const todoItem = screen.getByText('Setup the Todo List Component');
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
})