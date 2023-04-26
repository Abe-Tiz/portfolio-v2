import React from 'react'
import {FaGithub,FaLink} from "react-icons/fa"
import {
    ProjectDescription,
    ProjectImageContainer,
     ProjectsSection, SingleProject, SlantedCard, Tags
 } from '../styles/section/projectSection.styles'
import { SectionHeading } from '../styles/commen/SectionHeading.styles'
import { projects } from '../../data/Projects'

const ProjectSection = () => {
  return (
    <>
     <ProjectsSection id='projects'>
        <SectionHeading>
             <h1>Projects</h1>
             <p>These are some of my best projects</p>
        </SectionHeading>
            <div>
                {projects && projects.map((project,index) =>(
                    <SingleProject key={index}>
                        
                        <ProjectImageContainer>
                            <img src={project.img} alt={project.title} />
                            <SlantedCard />
                        </ProjectImageContainer>

                        <ProjectDescription>
                            <h1>
                                {project.title}
                            </h1>
                            <Tags>
                                {project.tags && project.tags.map((tag,index) =>(
                                    <span key={index}>{tag}</span>
                                ))}
                            </Tags>
                            <p>{project.description}</p>
                            <div>
                                <a href={project.codeLink} target='_blank'>
                                    <FaGithub />
                                    <span>View Code</span>
                                </a>
                                <a href={project.ProjectLink} target='_blank'>
                                    <FaLink/>
                                    <span>{project.ProjectLinkText}</span>
                                </a>
                            </div>
                        </ProjectDescription>
                    </SingleProject>
                ))}

            </div>
        

     </ProjectsSection>
      <hr />
    </>
  )
}

export default ProjectSection
