import React from "react";
import { useState } from "react";
import TodoService from "../Service/Todo.service";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import bg3 from "../images/bg3.jpg"
const AddTodo = () => {
  const [todo, setTodo] = useState({
    task: "",
    target: "",
    status: ""
  });
  const [msg, setMsg] = useState("");
  // const navigate=useNavigate()
  const handleChange = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, [e.target.name]:value });
  };

  const submitTodo = (e) => {
    e.preventDefault();

    TodoService
      .saveTodo(todo)
      .then((res) => {
        setMsg("Todo Added Sucessfully");
        setTodo({
          task: "",
          target: "",
          status: ""
        }
        // navigate("/")
        )
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="hd" style={{backgroundImage:`url(${bg3})`}}>
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center fs-3">
              Add TODO
              {msg && <p className="text-success">{msg}</p>}
            </div>

            <div className="card-body">
              <form onSubmit={submitTodo}>
                <div className="mb-3">
                  <label>Enter Task</label>
                  <input
                    type="text"
                    className="form-control"
                    name="task"
                    value={todo.task}
                    onChange={handleChange}
                   required />
                </div>

                <div className="mb-3">
                  <label>Enter Target</label>
                  <input
                    type="text"
                    className="form-control"
                    name="target"
                    value={todo.target}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter Status </label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    value={todo.status}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-success">Submit</button>
                  {/* <input
                    type="reset"
                    className="btn btn-danger ms-2"
                    value="Reset"
                  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AddTodo;