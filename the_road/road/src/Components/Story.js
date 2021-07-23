import React from "react";
import styled from "styled-components";
import storyp from "../images/story-img-1.jpg"

function Story() {
  return (
    <Stories>
      <StoryBg>
          <StoryContent>
            <img src={storyp} alt="story" />
            <StoryInfo>
            <h1>Lorem ipsum dolor sit, amet consectetura</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nemo
                temporibus officiis consectetur exercitationem rem ipsam cum fugiat
                magni nesciunt dicta atque perspiciatis tenetur quidem consequatur,
                laudantium repudiandae numquam fuga.
            </p>
            </StoryInfo>
        </StoryContent>
      </StoryBg>
    </Stories>
  );
}

const Stories = styled.div`
    width:70%;
`;
const StoryBg = styled.div`
    width:100%;
    background:rgba(258,258,258,.9);
    padding:5rem;
    box-shadow: 0 .1rem 2rem #777;
    transform:skewX(20deg);
`;
const StoryContent = styled.div`
    display:flex;
    align-items:center;
    img{
        width:12rem;
        height:12rem;
        border-radius:50%;
        object-fit:cover;
        margin-right:2rem;
    }
    transform:skewX(-20deg);
`;
const StoryInfo = styled.div`
    h1{
        text-transform:uppercase;
        font-size:2rem;
        color:grey;
        letter-spacing:.1rem;
        margin-bottom:2rem;
    }
    p{
        font-size:1.2rem;
        color:#777;
        letter-spacing:.1rem;
    }
`;

export default Story;
