import React from 'react'
import styled from "styled-components"

function Movies() {
    return (
        <Container>
            <h1>Recommended for You</h1>
            <Section>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
            </Section>
            <Section>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg"/>
                </Wrap>
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
