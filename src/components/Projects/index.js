import React, { useEffect } from 'react';
import { Divider } from '../Divider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../buttonElements';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsH1,
  ProjectsRow,
  Project,
  ProjectInfo,
  ProjectH1,
  ProjectButtons,
  ProjectButton,
  IntroBtnWrapper,
  H1Box,
} from './ProjectsElements';

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ProjectsContainer id='project'>
      <ProjectsWrapper>
        <ProjectsH1 data-aos='fade-right' data-offset='300'>
          Projects.
        </ProjectsH1>
        <Divider
          data-aos='fade-left'
          data-offset='400'
          data-aos-delay='300'
          light='true'
        />
        <ProjectsRow>
          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='300'>
            <ProjectInfo>
              <H1Box>
                <ProjectH1>First Racket Assignment</ProjectH1>
              </H1Box>

              <ProjectButtons>
                <ProjectButton href='http://cs.oswego.edu/~nnguyen6/CSC344/pdfFiles/assignment1/PC_001_Racket_Interactions.pdf'>
                  {' '}
                  Specification{' '}
                </ProjectButton>
                <ProjectButton href='http://cs.oswego.edu/~nnguyen6/CSC344/pdfFiles/assignment1/Solution.pdf'>
                  {' '}
                  Solution{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>
          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='450'>
            <ProjectInfo>
              <H1Box>
                <ProjectH1>Second Racket Assignment</ProjectH1>
              </H1Box>

              <ProjectButtons>
                <ProjectButton href='http://cs.oswego.edu/~nnguyen6/CSC344/pdfFiles/assignment2/WebWorkSite_Assignment.pdf'>
                  {' '}
                  Specification{' '}
                </ProjectButton>
                <ProjectButton href='https://logannguyen.netlify.app/'>
                  {' '}
                  Solution{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>
        </ProjectsRow>
        <IntroBtnWrapper data-aos='fade-up' data-aos-delay='500'>
          <Button to='site' smooth={true} duration={800}>
            Sites
          </Button>
        </IntroBtnWrapper>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
