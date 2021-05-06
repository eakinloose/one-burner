import React from 'react'
import communication from '../../image4/lanidng-image.png'
import {PricingTopWrapper, PricingTopLeft} from './PricingTopStyles'

const PricingTop = () => {
  return (
    <div>
      <PricingTopWrapper>
        <PricingTopLeft>
            <h1>Collaborate with your team and get more done</h1>
            <p>Duis sunt qui culpa commodo quis nulla irure excepteur elit. Labore nostrud. Ut aliqua duis ullamco enim ex culpa nulla.</p>
            <button>text here</button>
        </PricingTopLeft>
        <img src={communication} alt="communication"/>
      </PricingTopWrapper>
    </div>
  )
}

export default PricingTop
