import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

        const [burgerstatus, setburgerstatus] = useState(false);
        const [handle,sethand] = useState(false);

        useEffect(()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 50){
                    sethand(true);
                }else sethand(false);
            });
            return ()=>{
                window.removeEventListener("scroll");
            };
        },[]);

        const cars = useSelector(selectCars);
        console.log(cars)

    return (
        <Nav className={`${handle && "nav-black"}`}>
            <a href="#">
                <img src="/images/logo.svg" alt="tesla" />
            </a>
            <Menu>
                {
                    cars && cars.map((car,index)=>{
                        return <a key={index} href="#">{car}</a>
                    })
                }
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIcon onClick={()=>setburgerstatus(true)} style={{
                    marginLeft:"1rem",
                    cursor:"pointer",
                    position:"relative",
                    right:"-10px",
                }}/>
            </RightMenu>
            <BergerMenu show={burgerstatus}>
                <Close >
                    <CloseIcon onClick={()=>setburgerstatus(false)} />
                </Close>
                {
                    cars && cars.map((car,index)=>{
                        return <li><a key={index} href="#">{car}</a></li>
                    })
                }
                
                <li>Order now</li>
                <li>Inventory</li>
                <li>Solar panel</li>
                <li>Roof panel</li>
                <li>Model 3</li>
                <li>Model 3</li>
                <li>Model 3</li>
                <li>Model 3</li>
                <li>Model 3</li>
            </BergerMenu>

        </Nav>
    )
}

export default Header

const Nav = styled.div`
    position:fixed;
    z-index:9;
    padding:20px 30px;
    display:flex;
    align-items:center;
    min-height:60px;
    width:100%;
    justify-content:space-between;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        font-size:1rem;
        margin:0 1rem;
        font-weight:600;
        color:#333;
        text-transform:uppercase;
    }

    @media all and (max-width:820px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-size:1rem;
        margin:0 .2rem;
        font-weight:600;
        color:#333;
        text-transform:uppercase;
    }
`

const BergerMenu = styled.div`
    position:fixed;
    z-index:10;
    top:0;
    right:0;
    bottom:0;
    background-color:#fff;
    width:300px;
    text-align:start;
    padding:20px;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: all .5s;

    li{
        padding:10px 0;
        letter-transform:uppercase;
        border-bottom:1px solid grey;
        font-size:1.2rem;
        color:#666;
        font-weight:600;
        transition: all .1s;
        cursor:pointer;
    }
    li a{
        color:#666;
    }
    li:hover{
        transform: scale(1.05);
    }
`

const Close = styled.div`
    text-align:right;

`