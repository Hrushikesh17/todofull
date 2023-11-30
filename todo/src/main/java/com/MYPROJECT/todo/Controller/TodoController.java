package com.MYPROJECT.todo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.MYPROJECT.todo.Model.Todo;
import com.MYPROJECT.todo.Service.TodoService;

	
	@CrossOrigin(origins = "http://localhost:3000")
	@Controller
	@RequestMapping("/api/v1")
	public class TodoController {

		@Autowired
		private TodoService service;

		@PostMapping("/save")
		public ResponseEntity<Todo> addEmp(@RequestBody Todo td) {
			return new ResponseEntity<Todo>(service.addTodo(td), HttpStatus.CREATED);
		}

		@GetMapping("/")
		public ResponseEntity<List<Todo>> getAllEmp() {
			return new ResponseEntity<List<Todo>>(service.getAllTodo(), HttpStatus.OK);
		}

		@GetMapping("/{id}")
		public ResponseEntity<Todo> getTodoById(@PathVariable int id) {
			return new ResponseEntity<Todo>(service.getTodoById(id), HttpStatus.OK);
		}

		@GetMapping("/delete/{id}")
		public ResponseEntity<String> deleteTodo(@PathVariable int id) {

			service.deleteTodo(id);
			return new ResponseEntity<String>("Delete Sucessfully", HttpStatus.OK);
		}

		@PostMapping("/update/{id}")
		public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody Todo td) {
			return new ResponseEntity<Todo>(service.updateTodo(id, td), HttpStatus.OK);
		}

	}


