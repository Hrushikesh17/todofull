
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoService from "../Service/Todo.service";
import NavBar from "./NavBar";
import bg3 from "../images/bg3.jpg"
const EditTodo = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    target: "",
    status: ""
  },[]);
  const [msg, setMsg] = useState("");

  const data = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    TodoService
      .getTodoById(data.id)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, [e.target.name]: value });
  };

  const updateTodo = (e) => {
    e.preventDefault();
    TodoService
      .updateTodo(todo.id, todo)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <NavBar></NavBar>
    <div>
      
      <div className="hd" style={{backgroundImage:`url(${bg3})`}}>
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center fs-3">
                Edit Todo
                {msg && <p className="text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <form onSubmit={updateTodo}>
                  <div className="mb-3">
                    <label>Enter Task</label>
                    <input
                      type="text"
                      className="form-control"
                      name="task"
                      value={todo.task}
                      onChange={handleChange}
                    />
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
    </div>
    </>
  );
};

export default EditTodo;