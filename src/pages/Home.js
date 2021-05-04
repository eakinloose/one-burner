import React from 'react'
import Teams from '../components/BondedTeams/Teams'
import CEO from '../components/CEO/CEO'
import ContactSales from '../components/ContactSales/ContactSales'
import Footer from '../components/Footer/Footer'
import Help from '../components/HelpSection/Help'
import Partners from '../components/Partners/Partners'
import Presence from '../components/Presence/Presence'
import DemoSection from '../components/topSection/DemoSection'

const Home = () => {
    return (
        <div>
            <DemoSection/>
            <Teams/>
            <Help/>
            <Partners/>
            <Presence/>
            <CEO/>
            <ContactSales/>
            <Footer/>
        </div>
    )
}

export default Home
