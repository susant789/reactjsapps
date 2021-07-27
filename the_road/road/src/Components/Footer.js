import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Navlist>
                <a href="">Home</a>
                <a href="">Tours</a>
                <a href="">About Us</a>
                <a href="">Offers</a>
                <a href="">Contact</a>
            </Navlist>
            <p>All rights reserved and created by susant</p>
        </Container>
    )
}

const Container = styled.div`  
    padding:2rem 0 3rem 0;
    text-align:center;
    p{
        font-size:1.5rem;
        color:#999;
    }
`;
const Navlist = styled.div`
    margin-bottom:3rem;
    a{
        margin:0 3rem;
        font-size:2rem;
        font-weight:600;
        color:grey;
        letter-spacing:.2rem;
        transition:all .3s;
        padding:.3rem 1rem;
        border-radius:.3rem;
        &:hover{
            transform: rotate(-10deg);
            box-shadow:0 1rem 1rem grey;
            background:#fff;
        }
    };
`;

export default Footer
