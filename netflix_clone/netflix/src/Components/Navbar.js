import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../img/Netflix-Logo.png"
import avatar from "../img/Netflix-avatar.png"

function Navbar() {

    const [handle,sethand] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                sethand(true);
            }else sethand(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`Nav ${handle && "nav-black"}`}>
            <img src={logo} alt="netflix-logo" className="nav-logo" />
            <img src={avatar} alt="netflix-avatar" className="nav-avatar" />
        </div>
    )
}

export default Navbar
