import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

const HealthItem = (props) => {
  return (
    <div className='HealthItem'>
      <div className="HealthItem-img">
        <img src={process.env.PUBLIC_URL + props.images} alt="img" />
      </div>
      <div className="HealthItem-text">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
      <div className="HealthItem-buy">
        <a href='#none'>
          지금 구매하기 <FaAngleDoubleRight className='buy-arrow-icon'/>
        </a>
      </div>
    </div>
  )
}

export default HealthItem