import React from 'react'
import { Button, List,ListItem,ListItemText } from '@material-ui/core';
import '../Todolist.css'
import db from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todolist(props) {
    return (
        <List>
            <ListItem className="todo_list">
                <ListItemText primary="Todo..." secondary={props.todo.todo} />
            </ListItem>
            <DeleteForeverIcon onClick={e=>{
                db.collection('todoapp').doc(props.todo.id).delete()
            }}/>
        </List>
    )
}

export default Todolist
