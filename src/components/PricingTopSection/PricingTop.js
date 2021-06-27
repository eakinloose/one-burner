import React from 'react'
import communication from '../../image4/lanidng-image.png'
import {PricingTopWrapper, PricingTopLeft} from './PricingTopStyles'

const PricingTop = () => {
  return (
    <div>
      <PricingTopWrapper>
        <img src={communication} alt="communication"/>
        <PricingTopLeft>
            <h1>Collaborate with your team and get more done</h1>
            <p>Duis sunt qui culpa commodo quis nulla irure excepteur elit. Labore nostrud. Ut aliqua duis ullamco enim ex culpa nulla.Enim fugiat non ipsum incididunt fugiat dolore tempor exercitation ex ea. Est excepteur sunt exercitation sit irure ut sint ad do. Ea velit id laborum consectetur officia consectetur est. Tempor consequat magna officia dolore magna cillum dolore non duis. Sit minim nostrud in ad ea aliqua.</p>
            <button>text here</button>
        </PricingTopLeft>
      </PricingTopWrapper>
    </div>
  )
}

export default PricingTop
