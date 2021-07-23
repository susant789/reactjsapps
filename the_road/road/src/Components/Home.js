import React from 'react';
import styled from 'styled-components';
import airBalloon from '../images/air-balloon.png';
import headerBg from "../images/header-bg.jpg"
import Section2 from './Section2';
import Section3 from './Section3';

function Home() {
    return (
        <>
            <Section1>
                <Header className="center">
                    <HeaderText>
                        <h1>Around the world</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem molestiae!</p>
                    </HeaderText>
                    <img src={airBalloon} alt="balloon" />
                    <Logo>
                        <h1>
                            <span>T</span>
                            <span>h</span>
                            <span>e</span>
                            <span>r</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                        </h1>
                    </Logo>
                </Header>
            </Section1>
            <Section2 />
            <Section3 />
        </>
    )
}

const Section1 = styled.div`
    margin:3.5rem;
    background-color:var(--secondary-color);
    box-shadow:0 1rem 3rem var(--grey-color);
    overflow:hidden;
`;
const Header = styled.div`
    width:100%;
    height:calc(100vh - 7rem);
    background:linear-gradient(rgba(18,113,255,.5),rgba(18,113,255,.3)),url(${headerBg})center no-repeat;
    background-size:cover;
    position:relative;
    perspective:100rem;
    img{
        width:46%;
        animation:balloon 200s infinite;
    };
`;
const HeaderText = styled.div`
    text-align:center;
    text-transform:uppercase;
    letter-spacing:.1rem;
    text-shadow:0 .1rem .2rem var(--grey-color);
    h1{
        font-size:5rem;
        font-weight:900;
        color:var(--white-color);
    }
    p{
        font-size:1.5rem;
        font-weight:500;
        color:var(--secondary-color);
        max-width:50rem;
        margin:auto;
    }
`;
const Logo = styled.div`
    position:absolute;
    top:4rem;
    right:4rem;
    color:var(--primary-color);
    h1{
        display:flex;
    }
    h1 span{
        font-size:1.5rem;
        text-transform:uppercase;
        background:var(--white-color);
        display:flex;
        margin:.5rem;
        justify-content:center;
        align-items:center;
        width:3rem;
        height:3rem;
        border-radius:50%;
    }
    h1 span:nth-child(1){
        animation:letter-drop 5s .1s infinite;
    }
    h1 span:nth-child(2){
        animation:letter-drop 5s .2s infinite;
    }
    h1 span:nth-child(3){
        animation:letter-drop 5s .3s infinite;
    }
    h1 span:nth-child(4){
        animation:letter-drop 5s .4s infinite;
    }
    h1 span:nth-child(5){
        animation:letter-drop 5s .5s infinite;
    }
    h1 span:nth-child(6){
        animation:letter-drop 5s .6s infinite;
    }
    h1 span:nth-child(7){
        animation:letter-drop 5s .7s infinite;
    }
`;

export default Home
