import react,{useEffect, useState ,} from "react";
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Messages from "./Messages.js"
import "./Message.css"
import db from "./firebase";


function App() {

  useEffect(() => {
    setuser(prompt("enter your name"))
    },[])

  useEffect(()=>{
    db.collection("messages").onSnapshot(snap=>{
      setmessage(snap.docs.map(doc => doc.data()))
    })
    },[])


  const [input,setinput] =useState("")
  const [message, setmessage] = useState("")
  const [user,setuser] = useState("");
  console.log(input)


  const sendmessage=(e)=>{
    e.preventDefault();
    
    db.collection("messages").add({
      message:input,
      user:user,
      
    
    })

    setmessage([...message,{user:user,message:input}])
    console.log(message)
    setinput("")
  }

  

  return (
    <>
      <div className="App">
          <h1>welcome to Messanger Clone</h1>
          <h2>Welcome to Messenger {user}</h2>
          <form>
          <FormControl>
            <InputLabel>message...</InputLabel>
            <Input value={input} onChange={(e)=>{setinput(e.target.value)}} />
            <Button disabled={!input} type="submit" onClick={sendmessage} variant="contained" color="primary">send message</Button>
          </FormControl>
            
          </form>
          {
            message.map(m => {
            return <Messages user ={user} message = {m}/>
           })
          }
      </div>
    </>
  );
}

export default App;
