import React from 'react';
import styled from 'styled-components';
function Detail() {
  return(
    <Container>
      <Background>
        <img src="https://4.bp.blogspot.com/-KuWXfA_2zEw/WsPYrBXXXOI/AAAAAAAAVyw/1cMGP21yZcU5Y9uEKNGHuu5LabzGdKGfwCLcBGAs/s1600/Bao-Lead-Image.jpg"/>
      </Background>
      <ImageTitle>
        <img src="https://www.transparentpng.com/thumb/disney/mI9A46-cinderella-castle-disney-transparent-picture.png"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png"/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 * 7m * Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
      An aging Chinese mom suffering from empty nest syndrome gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy.
      </Description>
    </Container>

  ) 
}

export default Detail;
const Container=styled.div`
  position:relative;
  min-height:calc(100vh-70px);
  padding:0 calc(3.5vw + 5px);
`;
const Background=styled.div`
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:-1;
  opacity:0.8;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;
const ImageTitle=styled.div`
  height:30vh; 
  width:35vw;
  margin-top:60px;
  min-height:170px;
  min-width:200px;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;
const Controls=styled.div`
  display:flex;
  align-items:center;
  margin-top:9px;
`
const PlayButton=styled.button`
  border-radius:4px;
  font-size:15px;
  display:flex;
  align-items:center;
  height:56px;
  background:rgb(249,249,249);
  border:none;
  padding:0 15px;
  margin-right:12px;
  letter-spacing:1.8px;
  cursor:pointer;
  &:hover{
    background:rgb(198,198,198);
  }
;`
const TrailerButton=styled(PlayButton)`
  background:rgb(0,0,0,0.3);
  border:1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:upprecase;
`;
const AddButton=styled.button`
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border:2px solid white;
  background-color:rgba(0,0,0,0.6);
  cursor:pointer;
  margin-right:16px;
  span{
    font-size:30px;
  }
`;
const GroupWatchButton=styled(AddButton)`
  background-color:rgb(0,0,0);
`;
const SubTitle=styled.div`
  color:rgb(249,249,249);
  font-size:15px;
  min-height:20px;
  margin-top:26px;
`;
const Description=styled.div`
  line-height:1.4;
  font-size:20px;
  margin-top:16px;
  color:rgb(249,249,249);
  max-width:700px;
`;