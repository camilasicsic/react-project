import React, { useContext } from 'react';
import styled from 'styled-components';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import './signIn.css';
import { authentication } from '../../services/Firebase';
import { UserContext } from '../../context/UserContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser} = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(authentication, provider)
      .then((res) => {
        setUser({
          displayName: res.user.displayName,
          email: res.user.email,
          uid: res.user.uid,
        })
        localStorage.setItem('ecommerce-user', `${res.user.displayName};${res.user.email};${res.user.uid}`)
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='add-item-container'>
      <div className='title-container'>SIGN IN</div>
      <div className='button-container'>
        <button className='sign-in-button' onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
