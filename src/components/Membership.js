import React from 'react'

/* icon */
import { GoArrowRight } from "react-icons/go";


/* style */
import '../style/Membership.css'

const Membership = () => {
  return (
    <div className='Membership'>
      <h2>지금 멤버십 가입하고 10% 할인 혜택 받으세요.</h2>
      <p>* 이메일 수신동의자에 한해 10% 할인쿠폰 발급</p>
      <button className='Membership-btn'>
        회원가입
        <GoArrowRight className='Membership-btn-arrow'/>
      </button>
    </div>
  )
}

export default Membership