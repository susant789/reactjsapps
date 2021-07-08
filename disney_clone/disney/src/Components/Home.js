import react from 'react'
import styled from 'styled-components'
import ISlider from "./ISlider.js"
import Mviews from './Mviews.js'
import Movies from './Movies.js'



function Home() {
    return (
        <Container>
            <ISlider/>
            <Mviews />
            <Movies />
        </Container>
    )
}


const Container = styled.div`
    min-height: calc(100vh - 8rem);
    position:relative;
    padding:0 4.5rem;
    
    &:before {
        content:"";
        background:url("/images/home-back.png") center center / cover no-repeat fixed;
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        z-index:-1;
    }
`
export default Home
