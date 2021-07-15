import React, { useEffect } from 'react'
import styled from 'styled-components'
import ISlider from "./ISlider.js"
import Mviews from './Mviews.js'
import Movies from './Movies.js'
import db from "../firebase.js"
import {useDispatch} from "react-redux"
import {setMovie} from "../Features/Movies/movieSlice"
import { login, signout} from "../Features/Movies/userSlice"
import { auth } from "../firebase"

function Home() {

    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot(snapshot =>{
            let tempdata = snapshot.docs.map(doc=>{
                return {id : doc.id,...doc.data()}
            })
            dispatch(setMovie(tempdata));
        })
    },[])
    useEffect(()=>{
        auth.onAuthStateChanged(authuser=>{
          if(authuser){
            dispatch(login({
              name:authuser.displayName,
              email:authuser.email,
              photo:authuser.photoURL,
            }))
          }else{
            dispatch(signout())
          }
        })
      },[])

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
