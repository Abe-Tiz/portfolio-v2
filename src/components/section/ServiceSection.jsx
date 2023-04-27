import React from 'react'
import {FaBrain, FaCode, FaLaptopCode} from "react-icons/fa"
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
                <p>I develop Responsive website and web App using HTML, CSS and Javascript (ReactJs).</p>
            </SingleServices>

            <SingleServices>
                <IconWrapper>
                     <FaLaptopCode />
                </IconWrapper>
                <h1>Design to HTML</h1>
                <p>I  Convert the existing design in to perfect HTML/CSS websites.</p>            
            </SingleServices>
 
            <SingleServices>
                <IconWrapper>
                   <FaBrain />
                </IconWrapper>
                <h1>Mentorship</h1>
                <p> you can book a session with me for mentorship or one-to-one codeing $20/hr.</p>
            </SingleServices>
        </ServicesItems>
    </ServiceContainer>
    <hr/>
    </>
  )
}

export default ServiceSection
