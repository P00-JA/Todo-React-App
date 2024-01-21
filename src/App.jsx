import Input from "./Components/Input";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Trash from "./Components/Trash/Trash";
import Filter from "./Components/Filter/Filter";
import Date from "./Components/Date/Date";
import { useState } from "react";
import moment from 'moment';
import "./App.css";





const App = () => {
  const [input, setInput] = useState("");
  const [dateInput,setDate] = useState('');
  const [display, setDisplay] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onDateChange = (e) =>{
    setDate(e.target.value);
  }
  const onClick = () => {
    if (input != "" && dateInput!='') {
      setDisplay([...display, {content: input,date: dateInput,isChecked: false }]);
      console.log([...display,{content: input,date: dateInput,isChecked: false }]);
      setInput("");
      setDate("");
    }else{
      alert("Please fill the Task and due date!")
    }
  };

  const enter_keyPress = (e) =>{
    if(e.key=='Enter'){
      onClick();
    }
  }

  const clearCompleted = () =>{
    const filterOut =display.filter(i=>{
      return !i.isChecked;
    });
    console.log(filterOut);
    setDisplay(filterOut);
  }

  const clearAll =() =>{
    const conformation = confirm("Are you sure you want to delete all tasks?");
    if(conformation){
      setDisplay([]);
    };
    console.log(display);
  }

  const storeData =(arr) =>{
    const todoCopy = [...arr];
    localStorage.setItem('ToDoList',todoCopy);
  };

  return (
    <div className="main">
      <h2>To-do-list</h2>
      <div className="taskAdder">
        <div className="inputs">
        <Input
          type="text"
          placeholder="Type Task.."
          onChange={onChange}
          onKeyDown={enter_keyPress}
          value={input}
        /><Date className='date-pick' onChange={onDateChange}/>
        </div>
        <div className="buttonWrap">
        <Button onClick={onClick}>Add</Button>
        <Button onClick={clearCompleted} className='filter'><Filter></Filter></Button>
        <Button onClick={clearAll}><i className="fa-solid fa-trash-can"></i></Button>
        </div>
        <div className="message">Clear<br/>Completed!</div>
      </div>
      <div className="container">
        {display.map((item, i) => {
          return (
            <div className="todo" key={i}>
              <Checkbox
                id={i}
                onChange={(e) => {
                  const todoCopy = [...display];
                  todoCopy[i].isChecked = e.target.checked;
                  setDisplay(todoCopy);
                  console.log(todoCopy[i]);
                  console.log(e.target.checked, i);
                }}
              />
              <p
                className={item.isChecked === true ? "checked" : ""}
                key={i}
              >
                {item.content} | {item.date}
              </p>
              <Trash className='trash' onClick={(e)=>{
                const todo = [...display];
                console.log(todo[i]);
                todo.splice(i,1);
                setDisplay(todo);
              }}></Trash>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
