import './App.css';
import React, { useState } from 'react';
import Todo from "./components/Todo";
import Form from "./components/Form";
import{nanoid} from "nanoid";

function App(props) {
  console.log("hello");
  const [tasks,setTasks] = useState(props.tasks);
  function addTask(name,date,time){
    const newTask = {id:`todo-${nanoid()}`,name,completed:false,date,time};
    setTasks([...tasks,newTask]);
  }
  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task)=>{
      if(id === task.id){
        return{...task,completed:!task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id){
    const remainingTasks = tasks.filter((task)=>id !=task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks.map((task) => (
    <Todo id={task.id} 
          name={task.name}
          date = {task.date}
          time = {task.time}
          completed={task.completed} 
          key={task.id}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask = {deleteTask}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>PS6: You don't really know a framework until you TODO LIST</h1>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <Form addTask={addTask}
      />
    </div>
  );
}

export default App;
