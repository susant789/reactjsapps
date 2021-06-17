import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from "react-reveal/Fade"


function Section({title,img,desc,lbtn,rbtn}) {
    return (
        <Wrap bgimg={img}>
            <TextItem>
                <Fade>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </Fade>
            </TextItem>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LButton>{lbtn}</LButton>
                        {rbtn && 
                            <RButton>{rbtn}</RButton>
                        }
                    </ButtonGroup>
                    <ExpandMoreIcon style={{
                        color:"white",
                        animation:"animateDown infinite 1.5s",
                    }}/>
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-image:${props =>`url("/images/${props.bgimg}")`};
    background-position:center;
    background-repeat:no-repeat;
    text-align:center;
    display:grid;
    place-items:center;
    z-index:-1;
`

const TextItem = styled.div`
    margin-top:5rem;
    text-transform:uppercase;
`

const ButtonGroup = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    
`

const LButton = styled.div`
    font-size:1rem;
    color:white;
    background-color:rgba(23,26,32,0.8);
    padding:.5rem 1.5rem;
    margin:.5rem 1rem;
    border-radius:30px;
    width:250px;
    cursor:pointer;
    letter-spacing:.1rem;
    transition:transform .2s;
    :hover{
        transform:scale(1.05)
    }
`
const RButton = styled(LButton)`
    background-color:#ddd;
    color:#333;
`
const Buttons = styled.div`
    margin-top:28rem;
`