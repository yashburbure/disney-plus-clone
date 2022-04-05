import React,{useEffect} from 'react';
import styled from 'styled-components';
import Imgslider from './Imgslider';
import Viewers from './Viewers';
import Movies from './Movies';

import {db,collection,onSnapshot,doc} from '../Firebase'
import { useDispatch } from 'react-redux'
import {setMovies} from '../features/Movies/MovieSlice';
import userEvent from '@testing-library/user-event';
function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const colref=collection(db,"movies");
    onSnapshot(colref,(snanshot)=>{
      let tempmovies=snanshot.docs.map((doc)=>{
          return {id:doc.id,...doc.data()};
      });
      dispatch(setMovies(tempmovies));
    });
  },[]);
  return (
    <div>
      <Container>
        <Imgslider/>
        <Viewers/>
        <Movies/>
      </Container>
    </div>
  )
}

export default Home;
const Container=styled.main`
  overflow-x:hidden;
  min-height:calc(100vh - 70px);
  padding:0 calc(3.5vw + 1px);
  position:relative;
  &:before{
    background:url('/images/home-background.png') center center / cover no-repeat fixed;
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
  }
`;