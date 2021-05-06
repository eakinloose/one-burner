import React from 'react'
import Teams from '../components/BondedTeams/Teams';
import Footer from '../components/Footer/Footer';
import PricingTop from '../components/PricingTopSection/PricingTop';

const pricing = () => {
    return (
        <div>
            <PricingTop/>
            <Teams/>
            <Footer/>
        </div>
    )
}

export default pricing;