package com.MYPROJECT.todo.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MYPROJECT.todo.Model.Todo;



public interface TodoRepository extends JpaRepository<Todo, Integer> {

}
