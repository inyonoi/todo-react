import React,{useState} from "react";

export default function Form(props) {
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [btn,setbtn] = useState(true);
    function handleSubmit(e){
        if(name !== '' && date !== '' && time !== ''){
        e.preventDefault();
        props.addTask(name,date,time);
        setName("");
        setDate("");
        setTime("");
        setbtn(true);
        }
    }
    function handleChangename(e){
        setbtn(true);
        setName(e.target.value);
        if(e.target.value !== "" && date !== "" && time !== "")setbtn(false);
    }
    function handleChangedate(e){
        setbtn(true);
        setDate(e.target.value);
        if(name !== "" && e.target.value !== "" && time !== "")setbtn(false);
    }
    function handleChangetime(e){
        setbtn(true);
        setTime(e.target.value);
        if(name !== "" && date !== "" && e.target.value !== "")setbtn(false);
    }
    return (
        <form onSubmit = {handleSubmit}>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          placeholder = "Task Description"
          name="text"
          autoComplete="off"
          value={name}
          onChange = {handleChangename}
        />
        <input
          type="date"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={date}
          onChange = {handleChangedate}
        />
        <input
          type="time"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={time}
          onChange = {handleChangetime}
        />

        <button 
        type="submit" 
        className="btn"
        disabled = {btn}>
          Add Task
        </button>
      </form>
    );
  }