import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
        <Content>
            <Logonoe src="/images/cta-logo-one.svg"/>
            <Signup>GET ALL THERE</Signup>
            <Description>
                Disney+ is the exclusive home for your favourite movies and TV shows from Disney, Pixar, Marvel, Star Wars, and National Geographic. Start streaming today.
            </Description>
            <Logotwo src="/images/cta-logo-two.png"/>
        </Content>
    </Container>
  )
}

export default Login
const Container=styled.div`
    position:relative;
    min-height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;

    &:before{
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image:url("/images/login-background.jpg");
        position:absolute;
        top:0;
        bottom:0;
        content:"";
        left:0; 
        right:0;
        z-index:-1;
        opacity:0.7;
    }
`;
const Content=styled.div`
    margin-top:100px;
    max-width:650px;
    width:70%;
    padding:80px 40px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Logonoe=styled.img`
`;
const Signup=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    cursor:pointer;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background-color:#0483ee;
    }
`;
const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`;
const Logotwo=styled.img`
    width:90%;
`;