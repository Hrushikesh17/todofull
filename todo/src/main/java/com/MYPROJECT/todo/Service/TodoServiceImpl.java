package com.MYPROJECT.todo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MYPROJECT.todo.Model.Todo;
import com.MYPROJECT.todo.Repositry.TodoRepository;



@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepository repository;

	@Override
	public Todo addTodo(Todo emp) {
		return repository.save(emp);
	}

	@Override
	public List<Todo> getAllTodo() {

		return repository.findAll();
	}

	@Override
	public Todo getTodoById(int id) {
		return repository.findById(id).get();
	}

	@Override
	public void deleteTodo(int id) {
		Todo td = repository.findById(id).get();
		if (td != null) {
			repository.delete(td);
		}
	}

	@Override
	public Todo updateTodo(int id,Todo td) {

		Todo oldTodo = repository.findById(id).get();

		if (oldTodo != null) {
			td.setId(id);
			return repository.save(td);
		}

		return null;
	}

}
