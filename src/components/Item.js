import React from 'react'

const Item = (props) => {
  return (
    <div className='Item'>
      <div className="Item-img">
        <img src={process.env.PUBLIC_URL + props.images} alt="img" />
      </div>
      <div className="Item-text">
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Item