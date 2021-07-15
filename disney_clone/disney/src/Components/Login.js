import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const signin =()=>{
    auth.signInWithPopup(provider)
    .then(()=>{
      history.push("/")
    })
    .catch(err=>console.log(err))
  }
  return (
    <Container>
      <Section>
        <Logos1>
          <img src="/images/cta-logo-one.svg" />
        </Logos1>
        <Signin onClick={signin}>Click to login</Signin>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias cum
          eveniet facere? Voluptates veritatis autem cum amet blanditiis odio
          voluptas numquam alias debitis, eveniet ipsum ad reiciendis, dicta
          neque delectus ipsam. Aliquid aspernatur nesciunt, ipsam cum autem
          debitis suscipit!
        </Desc>
        <Logos2>
          <img src="/images/cta-logo-two.png" />
        </Logos2>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 8rem);
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;

  &:before{
      content:"";
      position:fixed;
      background-image:url("/images/login-background.jpg");
      background-size:cover;
      background-position:top;
      background-repeat:no-repeat;
      background-attachment:fixed;
      background-origin:content-box;
      left:0;
      top:0;
      right:0;
      bottom:0;
      z-index:-1;
  }
`;
const Section = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:-5rem;
`;
const Logos1 = styled.div`
  width: 60%;
  margin-bottom:1rem;
`;
const Signin = styled.button`
    width:60%;
    padding:1.5rem 0;
    color:#fff;
    background:blue;
    letter-spacing:.3rem;
    text-transform:uppercase;
    border-radius:.2rem;
    margin-bottom:1rem;
    transition:all 250ms;

    &:hover{
        background:cyan;
        color:black;
        transition:all 250ms;
    }
`
;
const Logos2 = styled.div`
    text-align:center;
    img{
        width:58%;
    }

`;
const Desc = styled.div`
    width:60%;
    text-align:center;
    font-size:1.2rem;
    font-weight:400;
    line-height:1.5rem;
    letter-spacing:.2rem;
    margin-bottom:1rem;

`;

export default Login;
