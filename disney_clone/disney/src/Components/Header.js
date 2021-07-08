import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <Navbar>
            <Logo src="/images/logo.svg"/>
            <Menu>
                <a href="#"><img src="/images/home-icon.svg"/><span>Home</span></a>
                <a href="#"><img src="/images/search-icon.svg"/><span>Search</span></a>
                <a href="#"><img src="/images/watchlist-icon.svg"/><span>Watchlist</span></a>
                <a href="#"><img src="/images/original-icon.svg"/><span>Original</span></a>
                <a href="#"><img src="/images/movie-icon.svg"/><span>Movie</span></a>
                <a href="#"><img src="/images/series-icon.svg"/><span>Series</span></a>
            </Menu>
            <Profile src="/images/mypic.jpg"/>
        </Navbar>
    )
}

const Navbar = styled.div`
    height:8rem;
    background-color:#000;
    display:flex;
    align-items:center;
    padding:0 3rem;
    justify-content:space-between;
`
const Logo = styled.img`
    width:9rem;
    padding:0 1rem;
`
const Menu = styled.div`
    display:flex;
    flex:1;
    justify-content:center;

    a{
        display:flex;
        align-items:center;
        font-size:1.5rem;
        margin:0 1rem;

        img{
            height:2.4rem;
            margin-right:.5rem;
        }
        span{
            letter-spacing:.2rem;
            text-transform:uppercase;
            position:relative;

            &:after{
                content:"";
                height:.1rem;
                width:100%;
                background:#fff;
                position:absolute;
                left:0;
                bottom:-.4rem;
                opacity:0;
                tranform:scaleX(0);
                transform-position:center;
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1.1);
                transition:all .3s;
            }
        }
    }
`
const Profile = styled.img`
    width: 5rem;
    height:5rem;
    object-fit:cover;
    border-radius:50%;
    cursor:pointer;

`
export default Header

