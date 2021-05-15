import React from 'react'
import {Link} from 'react-router-dom'
import {pricingNavs} from '../../data/NavLinks'
import {PriceingNavigation} from './NavPricingStyles'

const NavPricing = () => {
  return (
    <PriceingNavigation>
      {pricingNavs.map((item, index)=>{
        return(
          <p key={index}><Link className="Nav-price">{item.title}</Link></p>
        )
      })}
    </PriceingNavigation>
  )
}

export default NavPricing
