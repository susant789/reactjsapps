import React from 'react'
import styled from "styled-components"
import {useSelector} from "react-redux"
import {selectMovies} from "../Features/Movies/movieSlice"
import {Link} from "react-router-dom"

function Movies() {

    const movies = useSelector(selectMovies);

    return (
        <Container>
            <h1>Recommended for You</h1>
            <Section>
                {movies && movies.map(movie=>(
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg}/>
                        </Link>
                    </Wrap>
                ))}
            </Section>
        </Container>
    )
}

const Container = styled.div`
 h1{
     margin-bottom:5rem;
     font-size:3rem;
 }
`
const Section = styled.div`
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    grid-gap:2rem;
    margin:2rem 0;
`
const Wrap = styled.div`
border:.3rem solid rgba(249,249,249,.3);
border-radius:1rem;
box-shadow:0 1rem 2rem #000;
transition: all 250ms;
 img{
     width:100%;
     height:100%;
     object-fit:cover;
     border-radius:1rem;
 }
 &:hover{
    border:.3rem solid #fff;
    transform:scale(1.03);
    transition: all 250ms;
}
`


export default Movies
