import React from 'react';
import styled from 'styled-components';
function Movies() {
  return(
    <Container>
        <h4>Recommended for you</h4>
        <Content>
          <Wrap>
            <img src="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>          
          </Wrap>
          <Wrap>
            <img src="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>          
          </Wrap>
          <Wrap>
            <img src="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>          
          </Wrap>
          <Wrap>
            <img src="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>          
          </Wrap> 
        </Content>
    </Container>
  )
}

export default Movies;
const Container=styled.div`

`;
const Content=styled.div`
  display:grid;
  grid-gap:25px;
  grid-template-columns:repeat(4,minmax(0,1fr));

`;
const Wrap=styled.div`
  border-radius:10px;
  cursor:pointer;
  overflow:hidden;
  border:3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  img{
    height:100%;
    width:100%;
    object-fit:cover;
  }
  &:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
  }
`;