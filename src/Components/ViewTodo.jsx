import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import todoService from "../Service/Todo.service";
import { Link } from "react-router-dom";
import {FaEdit,FaEye,FaTrashAlt} from "react-icons/fa";
import NavBar from "./NavBar";
import bg3 from "../images/bg3.jpg"
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    todoService
      .getAllTodo()
      .then((res) => {
        console.log(res.data);
        setTodoList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (id) => {
    todoService
      .deleteTodo(id)
      .then((res) => {
        setMsg("Delete Sucessfully");
        init();
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
      <h1 className="text-center mt-3 text-light">TODO APP</h1>
      {msg && <p className="text-center text-success">{msg}</p>}
      <table className="table table-striped table-hover mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">Task</th>
            <th scope="col">Target</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((e, num) => (
            <tr>
              <th scope="row">{num + 1}</th>
              <td>{e.task}</td>
              <td>{e.target}</td>
              <td>{e.status}</td>    
              <td>
                
                <Link to={"editTodo/" + e.id} className="btn btn-sm btn-info" >
                <FaEdit/>
                </Link>
                <a
                  onClick={() => deleteTodo(e.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  <FaTrashAlt/>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default Home;