import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img src="http://m.gettywallpapers.com/wp-content/uploads/2020/02/KGF-2-Wallpaper-ForLaptop.jpg" />
      </Background>
      <Title>
        <img src="/images/viewers-disney.png" />
      </Title>
      <Controls>
        <Play>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </Play>
        <Trailer>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <Group>
          <img src="/images/group-icon.png" />
        </Group>
      </Controls>
      <Subtitle>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
        excepturi?
      </Subtitle>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        perferendis libero facere eaque molestias dolorum sequi sint, officia
        aliquid veritatis. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Distinctio, dolorem magni perspiciatis aliquam voluptates
        consectetur! Assumenda nam cumque vitae? Magnam quidem facere veritatis
        molestiae perspiciatis voluptate illum a perferendis at.
      </Desc>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 8rem);
  position: relative;
  padding: 0 4.5rem;
`;
const Background = styled.div`
  position: fixed;
  top: -1%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  width: 25vw;
  height:35vh;
  // margin-left: -8rem;
  // margin-top: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Controls = styled.div`
  margin-left: 4rem;
  display: flex;
  align-items: center;
  button {
    margin-right: 2rem;
    padding: 1rem;
  }
`;
const Play = styled.button`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 10rem;
  border-radius: 0.5rem;
  span {
    color: #000;
    letter-spacing:.3rem;
  }
`;
const Trailer = styled.button`
  display: flex;
  align-items: center;
  height: 5rem;
  width: auto;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-transform:uppercase;
  letter-spacing:.3rem;
`;
const Add = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.2rem solid #ddd;
  background: transparent;
  span {
    font-size: 2.5rem;
  }
`;
const Group = styled(Add)``;

const Subtitle = styled.div`
  font-size: 1.4rem;
  margin-left: 4rem !important;
  margin:2rem 0;

`;

const Desc = styled.div`
  font-size: 1.5rem;
  width: 80%;
  line-height: 2rem;
  margin-left: 4rem;
`;

export default Details;
