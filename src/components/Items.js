import React from 'react'
import Item from './Item'

/* style */
import '../style/Items.css';

const Items = () => {
  return (
    <div className='Items'>
      <div className="inner Items-inner">
        <div className="btn-wrap">
          <button className='black-btn'>MD'S PICK</button>
          <button className='white-btn'>Best of adidas🔥</button>
        </div>
        <div className="Item-wrap">
          <Item
          images={'./img/item1.png'}
          title={'GAZELLE'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item2.png'}
          title={'가젤'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item3.png'}
          title={'캠퍼스 00s'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item4.png'}
          title={'캠퍼스 00s'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item5.png'}
          title={'퍼피렛'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item6.png'}
          title={'슈퍼스타 82'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item7.png'}
          title={'삼바 클래식'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item8.png'}
          title={'삼바 클래식'}
          content={'Shoes'}
          />
          <Item
          images={'./img/item9.png'}
          title={'아디컬러 퍼퍼 재킷'}
          content={'Clothing'}
          />
          <Item
          images={'./img/item10.png'}
          title={'모노그램 베스트'}
          content={'Clothing'}
          />
          <Item
          images={'./img/item11.png'}
          title={'다운자켓'}
          content={'Clothing'}
          />
          <Item
          images={'./img/item12.png'}
          title={'슈퍼스타 82'}
          content={'Shoes'}
          />
        </div>
      </div>
    </div>
  )
}

export default Items