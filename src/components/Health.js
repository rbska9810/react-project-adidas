import React from 'react'
import HealthItem from './HealthItem'

/* style */
import '../style/Health.css';

const Health = () => {
  return (
    <div className='Health'>
      <div className="inner health-inner">
        <HealthItem 
        images={'./img/health1.png'}
        title={'KEEP ON MOVING'}
        content={'새해의 활기찬 에너지로 다시 운동을 시작해보세요.'}
        />
        <HealthItem 
        images={'./img/health2.png'}
        title={'KEEP RUNNING'}
        content={'더 나은 한해를 만들고 싶다면 지금 바로 러닝을 시작해보세요.'}
        />
        <HealthItem 
        images={'./img/health3.png'}
        title={'adidas Z.N.E. 빠져드는 그 순간'}
        content={'머리부터 발끝까지, 모든 순간 완벽하게.'}
        />
        <HealthItem 
        images={'./img/health4.png'}
        title={'FEEL YOUR STRENGTH'}
        content={'내 안의 잠재력을 깨워줄 아디다스 트레이닝 컬렉션'}
        />
      </div>
    </div>
  )
}

export default Health