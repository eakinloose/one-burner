import React from 'react'
import {
  sectionDataOne,  
  sectionDataTwo, 
  sectionDataThree,
  sectionDataFour,
  sectionDataFive,
  sectionDataSix
} 
from '../../data/sectionData'
import {
  SecOneContent, 
  SectionTwoContent,
  SectionThreeContent,
  SectionFourContent,
  SectionFiveContent,
  SectionSixContent,
  Head,
  LastSection} 
from './pricingSectionOneStyles'
import Partners from '../Partners/Partners'


const PricingSectionOne = () => {
  return (
    <>
      {sectionDataOne.map((item, index)=>{
        return(
          <SecOneContent key={index}>
            <div>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
            <img src={item.image} alt={item.heading}/>
          </SecOneContent>
        )
      })}
      {sectionDataTwo.map((item)=>{
        return(
          <SectionTwoContent>
            <img src={item.image} alt={item.heading}/>
            <div>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
          </SectionTwoContent>
        )
      })}
      {sectionDataThree.map((item)=>{
        return(
          <SectionThreeContent>
            <div>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
            <img src={item.image} alt={item.heading}/>
          </SectionThreeContent>
        )
      })}
      <Head>
        <div>
          <h3>
            integrate with your favourite tools easily with just one click
          </h3>
        </div>
      </Head>
      <Partners/>
      {sectionDataFour.map((item)=>{
        return(
          <SectionFourContent>
            <img src={item.image} alt={item.heading}/>
            <div>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
          </SectionFourContent>
        )
      })}
      {sectionDataFive.map((item)=>{
        return(
          <SectionFiveContent>
            <div>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
            <img src={item.image} alt={item.heading}/>
          </SectionFiveContent>
        )
      })}
      {sectionDataSix.map((item)=>{
        return(
          <SectionSixContent>
            <img src={item.image} alt={item.heading}/>
            <div>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
          </SectionSixContent>
        )
      })}
      <LastSection>
        <h2>Choose a better way to work</h2>
        <p>No credit card details | No additional installation | No time wasting</p>
        <button>Start my free trail</button>
      </LastSection>
    </>
  )
}

export default PricingSectionOne;