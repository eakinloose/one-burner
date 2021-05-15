import React from 'react'
import Teams from '../components/BondedTeams/Teams';
import Footer from '../components/Footer/Footer';
import NavPricing from '../components/NavbarPricing/NavPricing';
import PricingSectionOne from '../components/pricingSection/PricingSectionOne';
import PricingTop from '../components/PricingTopSection/PricingTop';

const pricing = () => {
    return (
        <div>
            <PricingTop/>
            <Teams/>
            <NavPricing/>
            <PricingSectionOne/>
            <Footer/>
        </div>
    )
}
export default pricing;