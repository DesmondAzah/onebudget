import styled from 'styled-components';

export const MyFirstDiv = styled.div`
  background-color: #d785e9 !important;
  position: relative;


  @media (min-width: 769px) {
    overflow: hidden;
  }
`;
export const ContainerSection = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 2.75rem 2.5625rem 2.75rem 2.625rem;
  @media (min-width: 769px)
 {
  padding-bottom: 6.25rem;
  padding-top: 5rem;
  position: relative;
  text-align: left;
  z-index: 2;  
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    padding: calc(0.57143px + 7.7381vw) 8.4722222222%;
}
  `;

export const MainH1 = styled.h1`
  text-shadow: 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9;
  margin-bottom: 0.75rem!important;
  color: #25384f!important;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  font-family: Gilroy Heavy,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  @media (min-width: 769px)
  {
    margin-bottom: 1.5rem!important;
    margin-left: 0;
    margin-right: 0;
  }
 
  `;
export const SecondDiv = styled.div`
  text-shadow: 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9, 0 0 7px #85c3e9;
  margin-bottom: 2rem!important;
  
  @media (min-width: 769px) {
    margin-bottom: 2.25rem!important;
  }
  @media (min-width: 769px){
    -webkit-font-feature-settings: "pnum" on,"lnum" on!important;
    font-feature-settings: "pnum" on,"lnum" on!important;
    font-family: KlinicSlab!important;
    font-size: 1.625rem!important;
    font-style: italic!important;
    font-weight: 400!important;
  }
  @media (min-width: 769px)  {
    color: #244564!important;
    line-height: normal!important;
  }
  .h4, .h4.color-ink {
    font-family: KlinicSlab!important;
    line-height: normal!important;
  }
  .h4 {
    -webkit-font-feature-settings: "pnum" on,"lnum" on!important;
    font-feature-settings: "pnum" on,"lnum" on!important;
    color: #244564!important;
    font-size: 1.375rem;
    font-style: italic!important;
    font-weight: 400!important;
  }
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  `;
export const ImageDiv = styled.div`
  margin-left: auto!important;
  margin-right: auto!important;
  max-width: 23.75rem!important;
  padding-bottom: 1.6875rem;
  `;
