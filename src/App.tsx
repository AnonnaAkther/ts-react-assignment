import { TextField, Button } from '@mui/material';
import React, { useCallback, useReducer, useRef } from 'react';
import './App.css';

interface Todo {
  id: number,
  text: string,
}
type ActionType = {type: "ADD"; text: string} | {type: "REMOVE"; id: number}

function App() {
  // useReducer
  function reducer(state: Todo[], action: ActionType){
    switch(action.type){
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
        case "REMOVE":
          return state.filter(({id}) => id !== action.id);
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);
  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(()=>{
    if(newTodoRef.current){
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = "";
    }
  }, [])
  return (

    <div className="App">
      <h1 style={{color: "blue"}}>Please Add Your Name</h1>
      <input type="text" ref={newTodoRef} style={{height: "50%", width: "30%", padding: "10px", margin: "10px"}}  />
      {/* <TextField 
      id="outlined-basic" 
      label="Your Name" 
      variant="outlined"
      type="text"
      ref={newTodoRef}
       /> */}
      <Button variant="contained" onClick={onAddTodo} >ADD</Button>
      {
        todos.map(todo => (
          <div key={todo.id}>
            {todo.text}
            <Button variant="contained" onClick={()=> dispatch({type: "REMOVE", id: todo.id})}>REMOVE</Button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
