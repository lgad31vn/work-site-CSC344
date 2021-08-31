import React, { useEffect } from 'react';

import { CgMoveUp } from 'react-icons/cg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  FooterContainer,
  FooterBox,
  FooterH1,
  FooterQuote,
  FooterSpan,
  FooterToTop,
  FooterLast,
  LastSpan,
  SiteUList,
  SiteLink,
  SitesWrapper,
  LinkWrapper,
} from './FooterElements';
import { Divider } from '../Divider';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  // const [isOpen, setIsOpen] = useState(false);
  // const clicky = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <FooterContainer id='site'>
      <FooterBox data-aos='zoom-in' data-aos-delay='300'>
        <FooterH1>Other Sites and Materials</FooterH1>
        <Divider />
        <SitesWrapper>
          <SiteUList>
            <SiteLink data-aos='fade-up' data-aos-delay='400'>
              Racket/Scheme/Lisp
              <LinkWrapper>
                <a href='https://racket-lang.org/'> Racket Hompage </a>{' '}
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/Racket_(programming_language)'>
                  {' '}
                  Racket Wiki{' '}
                </a>
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/Scheme_(programming_language)'>
                  {' '}
                  Scheme Wiki{' '}
                </a>
                {'  |  '}
                <a href='https://racket-lang.org/'> Lisp Wiki </a>
                {'  |  '}
                <a href='https://twobithistory.org/2018/10/14/lisp.html'>
                  {' '}
                  Lisp: God's Own Language{' '}
                </a>
              </LinkWrapper>
            </SiteLink>
            <SiteLink data-aos='fade-up' data-aos-delay='500'>
              {' '}
              Prolog
              <LinkWrapper>
                <a href='https://www.swi-prolog.org/'> SWI Prolog Hompage </a>{' '}
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/Prolog'>
                  {' '}
                  Prolog Wiki{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://stackoverflow.com/questions/1513373/what-are-the-advantages-of-using-prolog-over-other-languages'>
                  {' '}
                  Prolog Advantages{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://www.engineeringenotes.com/artificial-intelligence-2/languages/prolog-programming-features-and-disadvantages-artificial-intelligence/35772'>
                  {' '}
                  Prolog: Features and Disadvantages{' '}
                </a>{' '}
              </LinkWrapper>
            </SiteLink>
            <SiteLink data-aos='fade-up' data-aos-delay='600'>
              {' '}
              Haskell
              <LinkWrapper>
                <a href='https://www.haskell.org/'> Haskell Hompage </a>{' '}
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/Haskel'>
                  {' '}
                  Haskell Wiki{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://www.haskell.edu/academics/business/future-students/application-packet/'>
                  {' '}
                  School of Business{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://serokell.io/blog/top-software-written-in-haskell'>
                  {' '}
                  Top Haskell Softwares{' '}
                </a>
              </LinkWrapper>{' '}
            </SiteLink>
            <SiteLink data-aos='fade-up' data-aos-delay='700'>
              {' '}
              Rust
              <LinkWrapper>
                <a href='https://www.rust-lang.org/'> Rust Hompage </a>{' '}
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/Rust'> Rust Wiki </a>
              </LinkWrapper>{' '}
            </SiteLink>
            <SiteLink data-aos='fade-up' data-aos-delay='800'>
              {' '}
              Programming Languages
              <LinkWrapper>
                <a href='https://en.wikipedia.org/wiki/Programming_language'>
                  {' '}
                  Programming Language Wiki{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/List_of_programming_languages'>
                  {' '}
                  List of Programming Languages Wiki{' '}
                </a>
              </LinkWrapper>{' '}
            </SiteLink>
            <SiteLink data-aos='fade-up' data-aos-delay='900'>
              {' '}
              Formalisms
              <LinkWrapper>
                <a href='https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form'>
                  {' '}
                  BNF Wiki{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://en.wikipedia.org/wiki/Lambda_calculus'>
                  {' '}
                  Lamda calculous Wiki{' '}
                </a>
              </LinkWrapper>{' '}
            </SiteLink>

            <SiteLink data-aos='fade-up' data-aos-delay='1000'>
              {' '}
              Web Development in Racket
              <LinkWrapper>
                <a href='https://docs.racket-lang.org/web-server/index.html'>
                  {' '}
                  Web Dev in Racket{' '}
                </a>{' '}
                {'  |  '}
                <a href='https://serverracket.com/'> Server Racket </a>
              </LinkWrapper>{' '}
            </SiteLink>
          </SiteUList>
        </SitesWrapper>
      </FooterBox>
      <FooterToTop
        data-aos='fade-up'
        data-aos-delay='350'
        to='intro'
        smooth={true}
        duration={1000}
      >
        <CgMoveUp />
      </FooterToTop>
      <FooterQuote
        data-aos='fade-down'
        data-aos-offset='-350'
        data-aos-delay='350'
      >
        "<FooterSpan>Gaining </FooterSpan> 1% better per day but{' '}
        <FooterSpan>persistently</FooterSpan> is really the most{' '}
        <FooterSpan>efficient</FooterSpan> process ever."
      </FooterQuote>

      <FooterLast
        data-aos='fade-down'
        data-aos-offset='-350'
        data-aos-delay='400'
      >
        NAM <LastSpan>(LOGAN)</LastSpan> NGUYEN @2021
      </FooterLast>
    </FooterContainer>
  );
};

export default Footer;
