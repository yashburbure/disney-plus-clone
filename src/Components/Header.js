import React from 'react';
import styled from 'styled-components';
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <Navmenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </Navmenu>
            <UserImg src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
        </Nav>
    )
}
export default Header;
const Nav = styled.div`
    height:70px;
    background:#090b13;
    // background:transparent;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;
`;
const Logo=styled.img`
    width: 80px; 
`;
const Navmenu=styled.div`
    display:flex;
    flex:1;
    align-items:center;
    margin-left:20px;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px; 
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1);
            }
        }
    }
`;
const UserImg=styled.img`
    height:48px;
    width:48px;
    border-radius:50%;
    cursor:pointer;
`;