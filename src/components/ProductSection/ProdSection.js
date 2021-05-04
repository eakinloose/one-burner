import React from 'react'
import caseimg from '../../image 2/case.png'
import Store from '../../image 2/store-2-line 1.png'
import plug from '../../image 2/plug-line 1.png'
import list from '../../image 2/list.png'
import {ProdSectionWrapper, ProductSection, BackDrop} from './ProdSecStyle'

const ProdSection = ({Switch, isClicked}) => {
    return (
        <>
            <ProdSectionWrapper isClicked={isClicked}>
                <ProductSection>
                    <div>
                        <span><img src={caseimg} alt="Client" />Clients</span>
                        <p>See the amazing team that uses Oneburner.</p>
                    </div>
                    <div>
                        <span><img src={Store} alt="store" />Oneburner Stores</span>
                        <p>Explore our ready made solution to expand your business.</p>
                    </div>
                    <div>
                        <span><img src={plug} alt="Integration" />Integration</span>
                        <p>Connect different solution to Oneburner and get more done.</p>
                    </div>
                    <div>
                        <span><img src={list} alt="Questions" />Why Oneburner?</span>
                        <p>Learn more about our features, success rates, benefits and demo.</p>
                    </div>
                </ProductSection>
            </ProdSectionWrapper>
            <BackDrop onClick={Switch} isClicked={isClicked}/>
        </>
    )
}

export default ProdSection
