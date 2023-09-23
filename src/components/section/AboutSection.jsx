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
          
          

          <p>I am software developer specialized in web
              technologies like ReactJs, React Native, Nextjs,
              javascript, HTML5, CSS3, SQL, java, bootstrap5, C#, NodeJs,Express and MongoDb.I
              am open minded to adopt new technologies to fulfill
              business needs. I enjoy coding
          </p>
            <p>
              I am an Information System Student in Addis Ababa University,
              and am constantly learning and staying up-to-date with the latest trends and technologies in my field.
            </p>
            <p>
              I'm excited to connect with other developers and designers who share my passion for creating amazing user experiences. Thanks for taking the time to get to know me!
            </p>
           
          <CTAButton href="/cv/Abebe.pdf" target="_blank" >
              Download CV
          </CTAButton>

        </AboutContent>
      </AboutContainer>
       <hr />
    

    </>
  );
}

export default AboutSection
