import React from 'react'

const Card = () => {
  return (
    <div className="card">
          <div className='img-container'>
            <div className="bg-hover"></div>
            <img src="/images/image-equilibrium.jpg" alt="" className="img-eqb" />
            <img src="/images/icon-view.svg" alt="" className='eye-icon' />
          </div>
           
            <h3>Equilibrium #3429</h3>
            <p className='text'>Our Equilibrium collection promotes balance and calm.</p>
            <div className="flex-container">
              <div className="flex-child">
                <img src="/images/icon-ethereum.svg" alt="" />
                <p>0.041 ETH</p>
              </div>
              <div className="flex-child">
                <img src="/images/icon-clock.svg" alt="" />
                <p style={{color:"hsla(215, 52%, 70%, 0.683)"}}>3 days left</p>
              </div>
            </div>
            <hr />
            <div className="flex-foot">
              <img src="/images/image-avatar.png" alt="" />
              <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
  )
}

export default Card