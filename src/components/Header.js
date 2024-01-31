import React from 'react'
import {useState}from 'react';
/* style */
import '../style/reset.css';
import '../style/Header.css';

/* icon */
import { BiLogInCircle } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  let counter = 0;
  const [counter1, setCounter1] = useState(0);
  let increase = ()=>{
    counter = counter1 + 1;
    setCounter1(counter1 + 1 );
    console.log('counter',counter,'counter1',counter1);
  }
  return (
    <div className='header'>
      <div className="inner header-inner">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + './img/logo.svg'} alt="logo" />
        </div>
        <ul className="gnb">
          <li>
            <a href="#none">
              men
            </a>
          </li>
          <li>
            <a href="#none">
              women
            </a>
          </li>
          <li>
            <a href="#none">
              kids
            </a>
          </li>
          <li>
            <a href="#none">
              sports
            </a>
          </li>
          <li>
            <a href="#none">
              brands
            </a>
          </li>
          <li>
            <a href="#none">
              sale
            </a>
          </li>
        </ul>
        <div className="login">
          <a href="#none">
            <BiLogInCircle className='login-icon'/>
            로그인
          </a>
          <a href="#none">
            <IoCartOutline className='login-icon'/>
            장바구니
          </a>
          <a onClick={increase} href="#none" className='heart-btn-parent'>
            <FaRegHeart className='login-icon'/>
            <span className='heart-btn'>{counter1}</span>
            즐겨찾기
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header