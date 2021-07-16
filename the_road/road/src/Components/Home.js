import React from 'react';
import styled from 'styled-components';
import airBalloon from '../images/air-balloon.png';
import headerBg from "../images/header-bg.jpg"


function Home() {
    return (
        <Container>
            <Header className="center">
                <Header_text>
                    <h1>Around the world</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem molestiae!</p>
                </Header_text>
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
        </Container>
    )
}

const Container = styled.div`
    margin:3.5rem;
    background-color:var(--secondary-color);
    box-shadow:0 1rem 3rem var(--grey-color);
`;
const Header = styled.div`
    width:100%;
    height:calc(100vh - 7rem);
    background:linear-gradient(rgba(18,113,255,.5),rgba(18,113,255,.3)),url(${headerBg})center no-repeat;
    background-size:cover;
    position:relative;
    img{
        width:46%;
    }
`;
const Header_text = styled.div`
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
    letter-spacing:1rem;
    display:flex;
    h1 span{
        font-size:2rem;
        background:var(--white-color);
        display:block;
    }
`;

export default Home
