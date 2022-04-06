import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { selectUserName, selectUserEmail, selectUserPhoto,setUserLogin,setSignOut } from "../features/User/UserSlice";
import {auth,provider,signOut,onAuthStateChanged} from "../Firebase";
import { signInWithPopup } from 'firebase/auth';
import { async } from '@firebase/util';
function Header() {
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);

    useEffect(()=>{
        onAuthStateChanged(auth,async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                navigate("/");
            }
            else{
                navigate("/login");
            }
        })
    },[]);
    const Signin=()=>{
        signInWithPopup(auth,provider)
            .then((result)=>{
                let user=result.user;
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                navigate("/");
            })
    }
    const Signout=()=>{
        signOut(auth)
            .then(()=>{
                dispatch(setSignOut());
                navigate("/login");
            })
    }
    // console.log(userName);
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            {
                !userName?
                <LoginContainer>
                    <Login onClick={Signin}> Login</Login> 
                </LoginContainer>:
                <>
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
                <UserImg onClick={Signout} src={userPhoto}/>
            </>
            }
        </Nav >
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
const Logo = styled.img`
    width: 80px; 
`;
const Navmenu = styled.div`
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
const UserImg = styled.img`
    height:48px;
    width:48px;
    border-radius:50%;
    cursor:pointer;
`;
const LoginContainer=styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;
const Login=styled.div`
    border:1px solid #f9f9f9;
    padding:8px 16px;
    border-radius:4px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    position:absolute;
    right:0;
    cursor:pointer;
    transition:all 0.2s ease 0s;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
        
    }
`;