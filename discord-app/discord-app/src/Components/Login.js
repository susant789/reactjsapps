import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import  {auth , provider} from "../Firebase"

function Login() {
    const login = () => {
        auth.signInWithPopup(provider)
        .catch((err)=>{
            alert(err.message)
        })
      };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg"
          alt="Discord"
        />
      </div>
      <Button onClick={login}>Sign In</Button>
    </div>
  );
}

export default Login;
