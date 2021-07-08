import React from 'react'
import styled from "styled-components"

function Mviews() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    margin:8rem 0;
    grid-gap:1.5rem;
`
const Wrap = styled.div`
    border: .3rem solid rgba(249,249,249,.1);
    border-radius:1rem;
    box-shadow:0 1rem 2rem #000;
    transition: all 250ms;
    cursor:pointer;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        border:.3rem solid #fff;
        transform:scale(1.03);
        transition: all 250ms;
    }
`
export default Mviews
