import React from 'react'
import { 
  AboutContainer, 
  Image, 
  ImageContainer ,
  Heading,
  AboutContent,
  GradiantCircle,
  DarkCircle,
  Emoji
} from '../styles/section/aboutsection.styles'
import { CTAButton } from '../styles/commen/CTAButton.styles';
 
 

const AboutSection = () => {
   

  return (
    <>
      <AboutContainer id='about'>
        
        <ImageContainer>
          <Image src='/images/abiye.jpg' alt='prof-image'  title='Abebe Tizazu'/>
          <DarkCircle />
          <GradiantCircle />
        </ImageContainer>

        <AboutContent>

         <Heading>
             <h1>About Me  <Emoji>💝</Emoji></h1>
         </Heading>
          
          

          <p>Hi there! My name is Abebe Tizazu and I'm a frontend developer with a passion for creating beautiful and functional web and mobile applications. 
            I specialize in React JS, HTML, CSS3,Javascript and React Native, and have experience working on a variety of projects.
          </p>
            
            
            <p>
               I am an Information System Student in Addis Ababa University,
               and am constantly learning and staying up-to-date with the latest trends and technologies in my field.
            </p>
            <p>
              I'm excited to connect with other developers and designers who share my passion for creating amazing user experiences. Thanks for taking the time to get to know me!
            </p>
           
          <CTAButton href="#" target="_blank" >
              Download CV
          </CTAButton>

        </AboutContent>
      </AboutContainer>
       <hr />
    

    </>
  );
}

export default AboutSection
