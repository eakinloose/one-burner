import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
   sectionDataOne,
   sectionDataTwo,
   sectionDataThree,
   sectionDataFour,
   sectionDataFive,
   sectionDataSix,
} from "../../data/sectionData";
import {
   SecOneContent,
   SectionTwoContent,
   SectionThreeContent,
   SectionFourContent,
   SectionFiveContent,
   SectionSixContent,
   Head,
   LastSection,
} from "./pricingSectionOneStyles";
import Partners from "../Partners/Partners";

const PricingSectionOne = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);
   return (
      <>
         {sectionDataOne.map((item, index) => {
            return (
               <SecOneContent key={index}>
                  <div data-aos="fade-right">
                     <h2>{item.heading}</h2>
                     <p>{item.paragraph}</p>
                  </div>
                  <div className="img" data-aos="fade-up">
                     <img src={item.image} alt={item.heading} />
                  </div>
               </SecOneContent>
            );
         })}
         {sectionDataTwo.map((item) => {
            return (
               <SectionTwoContent>
                  <div data-aos="fade-up"  className="img">
                     <img src={item.image} alt={item.heading} />
                  </div>
                  <div data-aos="fade-right">
                     <h2>{item.heading}</h2>
                     <p>{item.paragraph}</p>
                  </div>
               </SectionTwoContent>
            );
         })}
         {sectionDataThree.map((item) => {
            return (
               <SectionThreeContent>
                  <div data-aos="fade-left">
                     <h2>{item.heading}</h2>
                     <p>{item.paragraph}</p>
                  </div>
                  <div data-aos="fade-up" className="img">
                     <img src={item.image} alt={item.heading} />
                  </div>
               </SectionThreeContent>
            );
         })}
         <Head>
            <div>
               <h3>
                  integrate with your favourite tools easily with just one click
               </h3>
            </div>
         </Head>
         <Partners />
         {sectionDataFour.map((item) => {
            return (
               <SectionFourContent>
                  <div data-aos="fade-up" className="img">
                     <img src={item.image} alt={item.heading} />
                  </div>
                  <div data-aos="fade-right">
                     <h2>{item.heading}</h2>
                     <p>{item.paragraph}</p>
                  </div>
               </SectionFourContent>
            );
         })}
         {sectionDataFive.map((item) => {
            return (
               <SectionFiveContent>
                  <div data-aos="fade-left">
                     <h2>{item.heading}</h2>
                     <p>{item.paragraph}</p>
                  </div>
                  <div data-aos="fade-up" className="img">
                     <img src={item.image} alt={item.heading} />
                  </div>
               </SectionFiveContent>
            );
         })}
         {sectionDataSix.map((item) => {
            return (
               <SectionSixContent>
                  <div data-aos="fade-up" className="img">
                     <img src={item.image} alt={item.heading} />
                  </div>
                  <div data-aos="fade-right">
                     <h2>{item.heading}</h2>
                     <p>{item.paragraph}</p>
                  </div>
               </SectionSixContent>
            );
         })}
         <LastSection>
            <h2>Choose a better way to work</h2>
            <p>
               No credit card details | No additional installation | No time
               wasting
            </p>
            <button>Start my free trail</button>
         </LastSection>
      </>
   );
};

export default PricingSectionOne;
