import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../DeviceSizes/DeviceSizes';

export const FooterContainer = styled.div`
  height: 100vh;
  background-color: #7510f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterBox = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  background-color: #141c3a;
  color: #fff;
  width: 1300px;
  border-radius: 20px;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);

  @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.mobileL} {
    width: 330px;
  }
`;
export const FooterH1 = styled.h1`
  font-family: 'Lato', sans-serif;
  text-shadow: 3px 3px rgb(50, 50, 70, 1);

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
    top: 30px;
  }
`;
export const FooterButton = styled(Link)`
  height: 40px;
  width: 250px;
  border-radius: 25px;
  font-size: 1.2rem;
  color: #fff;
  border: 2px solid #7510f7;
  background-color: #141c3a;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  text-shadow: 2px 2px rgb(50, 50, 70, 0.5);

  &:hover {
    background-color: #7510f7;
  }

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 1.1rem;
    bottom: 35px;
  }
`;
export const FooterQuote = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  text-shadow: 1.2px 1.2px rgb(50, 50, 70, 0.2);

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 0.55rem;
  }
`;
export const FooterFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 0.65rem;
    bottom: -30px;
  }
`;

export const FooterSpan = styled.span`
  font-weight: bold;
  color: #49fce3;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const FooterToTop = styled(Link)`
  position: relative;
  bottom: 90px;
  left: 500px;
  border: 1px solid #49fce3;
  font-size: 35px;
  color: #fff;
  background-color: #00b793;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  z-index: 999;
  &:hover {
    background: #7510f7;
  }
`;

export const FooterLast = styled.div`
  font-size: 0.6rem;
  font-weight: bold;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  text-shadow: 1.2px 1.2px rgb(50, 50, 70, 0.2);

  @media ${device.mobileL} {
    bottom: -50px;
  }
`;
export const LastSpan = styled.span`
  font-weight: bold;
  color: #49fce3;
  font-family: 'Rubik', sans-serif;
`;

export const SitesWrapper = styled.div`
  margin: 40px;
`;
export const SiteUList = styled.ul``;
export const SiteLink = styled.li`
  margin: 20px 0 20px 0;
  font-weight: bold;
`;
export const LinkWrapper = styled.div`
  margin: 2px 0 2px 0;
  a {
    color: #49fce3;
    text-decoration: none;
  }

  &:hover {
    color: #fff;
  }
`;
