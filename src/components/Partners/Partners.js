import React from 'react'
import {PartnersSection} from './PartnersStyle'
import { partnerImages } from './partnerData'

const Partners = () => {
    return (
        <PartnersSection>
            {partnerImages.map((item, index)=>{
                return(
                    <img src={item.image} alt={item.alt} key={index}/>
                )
            })}
            
        </PartnersSection>
    )
}

export default Partners
