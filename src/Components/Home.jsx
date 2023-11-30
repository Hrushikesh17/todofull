import React from 'react'
import NavBar from "./NavBar";
import {Link} from 'react-router-dom'
const HomeHome = () => {
  return (
    <div className='main'>
        
    <div>
      
       <h1 className='head'>WELCOME TO MY TODO APP</h1>
       <div className='link'>
    
       <Link to="/addTodo" href="#" className="btn d1 btn-success btn-lg col col-lg-2">Add Todo</Link>
       <Link to="/viewTodo" href="#" className="btn  d2 btn-warning btn-lg col col-lg-2">View All Todo</Link>
       <h3 className='hh'>Created by Chandrakanti</h3>
      </div>
    </div>
    </div>
  )
}

export default HomeHome
