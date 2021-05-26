import react, { useState,useEffect } from 'react';
import { Button,Input,InputLabel,FormControl } from '@material-ui/core';
import './App.css';
import Todolist from './Components/Todolist';
import db from './firebase';
import firebase from 'firebase';

function App() {
 
  const [todos, settodos] = useState([])
  const [input,setinput] = useState("")


  const addtodo = (e)=>{
    e.preventDefault()
    settodos([...todos,input])
    setinput("")

    db.collection('todoapp').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  useEffect(() => {
    db.collection('todoapp').orderBy("timestamp","desc").onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc => doc.data()))
      settodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
    })
 }, []);

  return (
    <div className="App">
      <h1>Hello Welcome to my todo app</h1>
      <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Add todo here please</InputLabel>
        <Input value= {input} onChange={e=>setinput(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>


        <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="secondary">
          AddTodo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todolist todo = {todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
