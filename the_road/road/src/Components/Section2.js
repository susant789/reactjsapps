import React from 'react'
import styled from "styled-components"
import Card from "./Card.js"
import cardimg from "../images/forest.jpg"
import cardimg2 from "../images/river.jpg"
import cardimg3 from "../images/sea.jpg"

function Section2() {
    return (
        <Container>
            <SectionH>
                Most popular tours of Today
            </SectionH>
            <CardWrapper>
                <Card img={cardimg} heading="wild forest" price="499"/>
                <Card img={cardimg2} heading="wast river" price="799"/>
                <Card img={cardimg3} heading="endless sea" price="999"/>
            </CardWrapper>  
        </Container>
    )
}

const Container = styled.div`
    padding:4rem 0 8rem 0;
    height:100vh;
`;
const SectionH = styled.div`
    margin:2rem 0 2rem 0;
    text-align:center;
    font-size:6rem;
    color:var(--primary-color);
    text-shadow:0 .1rem .5rem #777;
`;
const CardWrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top:10rem;
`;

export default Section2
