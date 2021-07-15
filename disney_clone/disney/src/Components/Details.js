import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom"
import db from "../firebase.js"

function Details() {

  const { id } = useParams();
  const [ movie,setMovie ] = useState()
  
  useEffect(()=>{
    //grab the data from db
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=>{
        if(doc.exists){
        //states are used for individual components whereas redux are used for whole website
        //save data in movie state for every movie
            setMovie(doc.data());
        }else{
          //redirect to homepage
        }
    })
  }, [])
 
  return (
    <Container>
      {movie && (
        <>
          <Background>
        <img src={movie.backgroundImg} />
      </Background>
      <Title>
        <img src={movie.titleImg} />
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
        {movie.subTitle}
      </Subtitle>
      <Desc>
        {movie.description}
      </Desc>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 8rem);
  position: relative;
  padding: 0 4rem;
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
  width: 40vw;
  object-fit:contain;
  margin:2rem 0 2rem 4rem;
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
  font-size: 1.8rem;
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
