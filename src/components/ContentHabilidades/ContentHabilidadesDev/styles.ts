import styled, { css } from 'styled-components';
import { GrReactjs } from 'react-icons/gr'
import { RiVuejsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'

export const Container = styled.div`
  width: 90vw;

  //border: 1px solid green;
  text-align: center;
  margin: 0 auto;

  span {
    color: var(--shape);
    font-size: 1.2rem;
    font-weight: 500;    
  }

  h1 {
    font-size: 2.5rem;
    color: var(--red);
    border-bottom: 3px solid #FF4C2C;
    margin: 0 1rem 1rem 1rem;
    padding-bottom: 0.5rem;
  }

  div {
    //border: 2px solid green;
    display: flex;
    flex-wrap: wrap;
    margin: .4rem auto;

  }
  `;

export const CardSkills = styled.div`
  //border: 2px solid green;
  display: flex;
  flex-direction: column;
  color: var(--shape);
  
  justify-content: center;
  align-items: center;
  //margin: 0.5rem auto;
  
  background-color: #233436;
  border-radius: .25rem;
  padding: 1rem; 
  width: 11rem;

`;
export const iconCss = css`
    width: 2rem;
    height: 2rem;
    fill: var(--red);
    margin-bottom: .5rem;
    font-weight: 700;
    //flex-shrink: 0;
`
export const TypescriptIcon = styled(SiTypescript)`${iconCss}`
export const ReactIcon = styled(GrReactjs)`${iconCss}`
export const VueIcon = styled(RiVuejsLine)`${iconCss}`
export const NodeIcon = styled(FaNodeJs)`${iconCss}`
export const JavaIcon = styled(FaJava)`${iconCss}`
export const PythonIcon = styled(FaPython)`${iconCss}`
export const GitIcon = styled(FaGithub)`${iconCss}`
export const StyeldComponentsIcon = styled(SiStyledcomponents)`${iconCss}`
export const MySqlIcon = styled(GrMysql)`${iconCss}`
export const MongoDbIcon = styled(SiMongodb)`${iconCss}`

export const CardIcon = styled.(`Si${item}`)`

`;