import styled from 'styled-components';
import { device } from '../DeviceSizes/DeviceSizes';

export const ProjectsContainer = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin-top: -140px;
    height: 1100px;
  }
  @media ${device.mobileL} {
    margin-top: -200px;
    height: 1850px;
  }
`;
export const ProjectsWrapper = styled.div`
  z-index: 500;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media ${device.tablet} {
    height: 1100px;
  }
  @media ${device.mobileL} {
    height: 1850px;
  }
`;
export const ProjectsH1 = styled.h1`
  margin-top: 15px;
  color: #7510f7;
  font-size: 36px;
  font-family: 'Rubik', sans-serif;
  text-shadow: 2px 2px rgb(50, 50, 70, 0.5);

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;
export const ProjectsRow = styled.div`
  margin-top: 20px;
  width: 1000px;
  font-size: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: auto auto;
    width: 600px;
    margin: 30px auto;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;
export const ProjectInfo = styled.span`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.7rem;
  width: 280px;
  transition: opacity 0.7s;
  border: 1px solid #7510f7;
  border-radius: 10px;
`;
export const H1Box = styled.div`
  margin-top: -30px;
  background-color: #fff;
  width: 180px;
  z-index: 999;
`;
export const ProjectH1 = styled.h1`
  font-size: 25px;
  color: #000;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-shadow: 3px 3px rgb(50, 50, 70, 0.2);
`;

export const ProjectButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -15px;
`;

export const ProjectButton = styled.a`
  height: 30px;
  width: 110px;
  border-radius: 10px;
  border: 1px solid #7510f7;
  color: #7510f7;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background-color: #7510f7;
    color: #fff;
  }
`;

export const Project = styled.div`
  height: 150px;
  margin: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  @media ${device.mobileL} {
    margin: 0;
    border-radius: 0;
  }
`;
export const IntroBtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
