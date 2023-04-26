import React from 'react'
import {FaCode} from "react-icons/fa"
import { 
  IconWrapper,
  ServiceContainer, 
  ServicesItems, 
  SingleServices 

} from '../styles/section/serviceSection.styles'
import {SectionHeading} from "../styles/commen/SectionHeading.styles"

const ServiceSection = () => {

  return (
    <>
    
    <ServiceContainer id='services'>
        <SectionHeading>
            <h1>Services</h1>
            <p>Exited Work with you</p>
        </SectionHeading>
        
        <ServicesItems>
            <SingleServices>
                <IconWrapper>
                    <FaCode />
                </IconWrapper>
                <h1>Web Development</h1>
                <p>I develop Responsive website and web App using HTML, CSS and Javascript (ReactJs)</p>
            </SingleServices>
        </ServicesItems>
    </ServiceContainer>
    <hr/>
    </>
  )
}

export default ServiceSection
