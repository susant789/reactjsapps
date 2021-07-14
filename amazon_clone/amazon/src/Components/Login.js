import React,{useState} from "react";
import styled from "styled-components";
import {auth} from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const login = (e)=>{
        e.preventDefault();
        //login logic
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            //logged in 
            history.push("/")
        }).catch(e=>alert(e.message));

    }
    const register = (e)=>{
        e.preventDefault();
        //register  logic
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            //registered and logged in 
            history.push("/")
        }).catch(e=>alert(e.message));
    }

  return (
    <Container>
        <img src="http://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt="logo" />
      <Signin>
        <Form>
            <h1>Sign in</h1>
            <h5>E-mail</h5>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text"/>
            <h5>password</h5>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
        </Form>
        <button onClick={login}>Signn in</button>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          placeat? Asperiores nisi dignissimos officiis quas laboriosam tenetur
          a, ut excepturi inventore illum reiciendis veniam blanditiis natus
          facere necessitatibus fugit eligendi?
        </p>
        <button onClick={register} className="btn2">Create your amazon account</button>
      </Signin>
    </Container>
  );
}

const Container = styled.div`
    width:100%;
    height:100vh;
    text-align:center;
    position:fixed;
    background:#999;
    img{
        position:absolute;
        width:12rem;
        top:2rem;
        left:50%;
        transform:translateX(-50%);
    }
`;
const Signin = styled.div`
    min-width:400px;
    max-width:400px;
    margin:0 auto;
    background:#fff;
    padding:.5rem .8rem;
    margin-top:8rem;
    border-radius:.5rem;
    border:.1rem solid black;
    p{
        width:100%;
        text-align:left;
    };
    button{
        width:100%;
        height:2rem;
        margin:1rem 0;
        background:orange;
        outline:none;
        border:.1rem solid grey;
        border-radius:.2rem;
    }
    .btn2{
        background:#999 !important;
    }
`;
const Form = styled.form`
    text-align:left;
    h1{
        margin-bottom:1rem;
    };
    input{
        width:100%;
        padding:.5rem 1rem;
        border:.1rem solid black;
        font-size:1rem;
        letter-spacing:.05rem;
    };
    h5{
        margin:.2rem 0;
    }
`;

export default Login;
