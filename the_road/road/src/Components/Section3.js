import React from 'react'
import styled from "styled-components"
import Story from './Story';
import video from "../images/video.mp4"

function Section3() {
    return (
        <Stories >
            <StoriesWrap className="center">
                <VideoContainer>
                    <video src={video} type="video/mp4" autoPlay muted loop></video>
                </VideoContainer>
                <Story />
                <Story />
            </StoriesWrap>
        </Stories>
    )
}

const Stories = styled.div`
    margin:3.5rem;
    background-color:var(--secondary-color);
    box-shadow:0 1rem 4rem var(--grey-color);
`;

const StoriesWrap = styled.div`
    width:100%;
    height:90vh;
    flex-direction:column;
    justify-content:space-around;
    padding:5rem 0;
    position:relative;
`;
const VideoContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    video{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:.4;
    }
`;
export default Section3
