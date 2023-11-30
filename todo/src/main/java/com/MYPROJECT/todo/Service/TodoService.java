package com.MYPROJECT.todo.Service;

import java.util.List;

import com.MYPROJECT.todo.Model.Todo;

public interface TodoService {

	public Todo addTodo(Todo td);

	public List<Todo> getAllTodo();

	public Todo getTodoById(int id);

	public void deleteTodo(int id);

	public Todo updateTodo(int id, Todo td);

}
