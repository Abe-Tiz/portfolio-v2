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
            I'm particularly interested in creating user-friendly interfaces and designing experiences that make people's lives easier. 
            I'm motivated by the challenge of turning complex problems into elegant solutions, and am always looking for new ways to improve my skills and knowledge.
           </p>
           <p>
            Some of the projects I've worked on include:-<br /> 
            <br /><strong>Todo app :- </strong>  that allows users to organize their tasks in a simple and intuitive way, 
            <br /><strong>food recipe app :- </strong> that makes it easy to discover and save your favorite recipes, and 
           <br /><strong>responsive personal portfolio :- </strong> that showcases my skills and work experience and other projects.
            </p>
            <p>
              In addition to my technical skills, I'm a good communicator and team player, and always strive to deliver high-quality work on time and within budget. 
              I have a Bachelor's degree in Information System from Addis Ababa University,
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
