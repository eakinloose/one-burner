import React from 'react'
import Logo from '../../images/logo.png'
import facebook from '../../images/facebook.svg'
import youtube from '../../images/youtube.svg'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin.svg'
// import { footerDataOne, footerDataThree, footerDataFour ,footerDataTwo } from '../data/footerData'
import {
    FooterWrapper,
    FooterTop,
    FooterMid,
    FooterRight,
    FooterBottom,
    FooterLeft,
    ContactIcons,
    FooterList,
    FooterListTwo,
    FooterListThree,
    FooterListFour
} from './footerStyles'
import { footerDataFour, footerDataOne, footerDataThree, footerDataTwo } from '../../data/footerData'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop>
                <img src={Logo} alt="log"/>
                <select>
                    <option>English</option>
                </select>
            </FooterTop>
            <FooterMid>
                <FooterLeft>
                    <h4>No 1 CRM solution in Africa</h4>
                    <p>Terms of services| Privacy Policy</p>
                
                    <p>Get in touch</p>
                    <h4>+234-80-000-0000</h4>
                    <ContactIcons>
                        <img src={facebook} alt="facebook"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </ContactIcons>
                </FooterLeft>
                <FooterRight>
                    <ul>
                        <li href="#"><h4>PRODUCT</h4></li>
                        {/* {footerDataOne.map((list, index) =>{
                            return(
                                <FooterList to={list.link} key={index}>{list.title}</FooterList>
                            )})} */}
                            {footerDataOne.map((list, index) =>{
                            return(
                                <FooterList to={list.link} key={index}>{list.title}</FooterList>
                            )})}
                    </ul>
                    <ul>
                        <li href="#"><h4>COMPANY</h4></li>
                        {/* {footerDataTwo.map((list, index) => {
                            return(
                                <FooterListTwo to={list.link} key={index}>{list.title}</FooterListTwo>
                            )})} */}
                            {footerDataTwo.map((list, index) => {
                            return(
                                <FooterListTwo to={list.link} key={index}>{list.title}</FooterListTwo>
                            )})}
                    </ul>
                    <ul>
                        <li href="#"><h4>ONEBURNER FOR TEAMS</h4></li>
                        {footerDataThree.map((list, index)=>{
                            return(
                                <FooterListThree to={list.link} key={index}>{list.title}</FooterListThree>
                            )})}
                    </ul>
                    <ul>
                        <li href="#"><h4>RESOURCES</h4></li>
                        {footerDataFour.map((list, index)=>{
                            return(
                                <FooterListFour to={list.link} key={index}>{list.title}</FooterListFour>
                            )})}
                    </ul>

                </FooterRight>

            </FooterMid>
            <FooterBottom>
            <p>&copy; 2020 Oneburner.com. All Right Reserved.</p>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer
