import './App.css';
import AddTodo from './Components/AddTodo';
import NavBar from './Components/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewTodo from './Components/ViewTodo';
import EditTodo from './Components/EditTodo';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter >
      <Routes>
          <Route path="/" element={<Home/>}></Route>
         <Route path="/viewTodo" element={<ViewTodo />}></Route>
        <Route path="/addTodo" element={<AddTodo />}></Route>
        <Route path="/viewTodo/editTodo/:id" element={<EditTodo />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
